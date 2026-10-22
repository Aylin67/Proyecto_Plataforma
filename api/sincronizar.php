<?php
// api/sincronizar.php - Endpoint de la API REST para recibir datos de CISGES

header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/conexion.php';

// 1. TOKEN DE SEGURIDAD SECRETO (Solo CISGES)
$token_autorizado = 'GESMUJER_SECRET_TOKEN_2026';

// 2. VERIFICAR QUE LA PETICIÓN SEA POR MÉTODO POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'mensaje' => 'Método no permitido. La API solo acepta peticiones POST.'
    ]);
    exit;
}

// 3. VERIFICAR EL TOKEN DE SEGURIDAD EN LAS CABECERAS
$headers = getallheaders();
$token_recibido = $headers['Authorization'] ?? $headers['authorization'] ?? '';

// Limpiar la palabra "Bearer " si viene incluida
$token_recibido = str_replace('Bearer ', '', $token_recibido);

if ($token_recibido !== $token_autorizado) {
    http_response_code(401);
    echo json_encode([
        'status' => 'error',
        'mensaje' => 'Acceso no autorizado. Token de seguridad inválido o ausente.'
    ]);
    
    // Registrar intento no autorizado en la bitácora
    try {
        $stmt_log = $pdo->prepare("INSERT INTO logs_sincronizacion (fecha, estado, mensaje) VALUES (NOW(), 'ERROR', 'Intento de sincronización con token inválido')");
        $stmt_log->execute();
    } catch (Exception $ex) {}
    exit;
}

// 4. LEER EL PAQUETE JSON ENVIADO POR CISGES
$json_recibido = file_get_contents('php://input');
$datos = json_decode($json_recibido, true);

if (!$datos || !is_array($datos)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'mensaje' => 'Formato JSON inválido o cuerpo de la petición vacío.'
    ]);
    exit;
}

// 5. PROCESAR Y GUARDAR CADA REGISTRO EN LA BASE DE DATOS
$total_guardados = 0;

try {
    $pdo->beginTransaction();

    $sql = "INSERT INTO datos_indicadores 
            (id_indicador, id_region, anio, valor, valor_mujeres, valor_hombres, fecha_sincronizacion) 
            VALUES (:id_indicador, :id_region, :anio, :valor, :valor_mujeres, :valor_hombres, NOW())";
    
    $stmt = $pdo->prepare($sql);
    $filas = isset($datos[0]) ? $datos : [$datos];

    foreach ($filas as $fila) {
        // Validar campos obligatorios antes de insertar
        if (empty($fila['id_indicador']) || empty($fila['anio']) || empty($fila['id_region'])) {
            throw new Exception("Registro incompleto: falta id_indicador, anio o id_region en uno de los registros.");
        }

        $stmt->execute([
            ':id_indicador'  => $fila['id_indicador'],
            ':id_region'     => $fila['id_region'],
            ':anio'          => $fila['anio'],
            ':valor'         => $fila['valor'] ?? null,
            ':valor_mujeres' => $fila['valor_mujeres'] ?? null,
            ':valor_hombres' => $fila['valor_hombres'] ?? null
        ]);
        $total_guardados++;
    }

    // 6. REGISTRAR EL ÉXITO EN LA BITÁCORA
    try {
        $stmt_log = $pdo->prepare("INSERT INTO logs_sincronizacion (fecha, estado, mensaje) VALUES (NOW(), 'ÉXITO', :mensaje)");
        $stmt_log->execute([
            ':mensaje' => "Sincronización exitosa desde CISGES. Registros procesados: $total_guardados"
        ]);
    } catch (Exception $ex) {}

    $pdo->commit();

    // 7. RESPUESTA SATISFACTORIA
    http_response_code(200);
    echo json_encode([
        'status' => 'success',
        'mensaje' => 'Sincronización completada correctamente.',
        'registros_procesados' => $total_guardados
    ]);

} catch (Exception $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    http_response_code(500);

    // 8. REGISTRAR EL ERROR EN LA BITÁCORA
    try {
        $stmt_log = $pdo->prepare("INSERT INTO logs_sincronizacion (fecha, estado, mensaje) VALUES (NOW(), 'ERROR', :mensaje)");
        $stmt_log->execute([
            ':mensaje' => "Error tras procesar $total_guardados registros: " . $e->getMessage()
        ]);
    } catch (Exception $ex) {}

    echo json_encode([
        'status' => 'error',
        'mensaje' => 'Ocurrió un error interno al guardar los datos: ' . $e->getMessage(),
        'registros_procesados' => $total_guardados
    ]);
}
