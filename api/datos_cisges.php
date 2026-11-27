<?php
// api/datos_cisges.php - Provee datos reales y en vivo de las 6 dimensiones de CISGES para Plataforma

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, no-store, must-revalidate');

require_once __DIR__ . '/conexion.php';

try {
    // -------------------------------------------------------------
    // 1. DIMENSIÓN: FEMINICIDIOS (Línea Base Oficial + Nuevos Casos)
    // -------------------------------------------------------------
    // Línea base oficial establecida de Plataforma (154 casos históricos)
    $femCounts = [
        'Valles Centrales' => 30,
        'Istmo'            => 45,
        'Tuxtepec'         => 4,
        'Costa'            => 37,
        'Mixteca'          => 13,
        'Sierra Sur'       => 14,
        'Sierra Norte'     => 6,
        'Cañada'           => 5
    ];

    // Sumar nuevos casos registrados desde CISGES (id > 154)
    $cantEnFem = 0;
    try {
        $stmtNuevos = $pdo->query("SELECT Region, COUNT(*) as c FROM feminicidios WHERE id > 154 GROUP BY Region");
        while ($r = $stmtNuevos->fetch(PDO::FETCH_ASSOC)) {
            $regRaw = strtoupper(trim($r['Region'] ?? ''));
            $c = (int)$r['c'];
            $cantEnFem += $c;

            if (strpos($regRaw, 'VALLES') !== false) {
                $femCounts['Valles Centrales'] += $c;
            } elseif (strpos($regRaw, 'ISTMO') !== false || strpos($regRaw, 'ITSMO') !== false) {
                $femCounts['Istmo'] += $c;
            } elseif (strpos($regRaw, 'TUXTEPEC') !== false || strpos($regRaw, 'PAPALOAPAN') !== false) {
                $femCounts['Tuxtepec'] += $c;
            } elseif (strpos($regRaw, 'COSTA') !== false) {
                $femCounts['Costa'] += $c;
            } elseif (strpos($regRaw, 'MIXTECA') !== false) {
                $femCounts['Mixteca'] += $c;
            } elseif (strpos($regRaw, 'SIERRA SUR') !== false) {
                $femCounts['Sierra Sur'] += $c;
            } elseif (strpos($regRaw, 'SIERRA NORTE') !== false) {
                $femCounts['Sierra Norte'] += $c;
            } elseif (strpos($regRaw, 'CAÑADA') !== false || strpos($regRaw, 'CANADA') !== false) {
                $femCounts['Cañada'] += $c;
            }
        }
    } catch(Exception $e) {}

    // Si no hubo en id > 154, verificar si se registraron vía tabla de sincronización (datos_indicadores)
    if ($cantEnFem === 0) {
        try {
            $stmtSync = $pdo->query("SELECT id_region, SUM(valor) as c FROM datos_indicadores WHERE id_indicador = 'feminicidios' GROUP BY id_region");
            while ($r = $stmtSync->fetch(PDO::FETCH_ASSOC)) {
                $regRaw = strtoupper(trim($r['id_region'] ?? ''));
                $c = (int)$r['c'];

                if (strpos($regRaw, 'VALLES') !== false) {
                    $femCounts['Valles Centrales'] += $c;
                } elseif (strpos($regRaw, 'ISTMO') !== false || strpos($regRaw, 'ITSMO') !== false) {
                    $femCounts['Istmo'] += $c;
                } elseif (strpos($regRaw, 'TUXTEPEC') !== false || strpos($regRaw, 'PAPALOAPAN') !== false) {
                    $femCounts['Tuxtepec'] += $c;
                } elseif (strpos($regRaw, 'COSTA') !== false) {
                    $femCounts['Costa'] += $c;
                } elseif (strpos($regRaw, 'MIXTECA') !== false) {
                    $femCounts['Mixteca'] += $c;
                } elseif (strpos($regRaw, 'SIERRA SUR') !== false) {
                    $femCounts['Sierra Sur'] += $c;
                } elseif (strpos($regRaw, 'SIERRA NORTE') !== false) {
                    $femCounts['Sierra Norte'] += $c;
                } elseif (strpos($regRaw, 'CAÑADA') !== false || strpos($regRaw, 'CANADA') !== false) {
                    $femCounts['Cañada'] += $c;
                }
            }
        } catch(Exception $e) {}
    }

    $femTotal  = array_sum($femCounts);
    $femLabels = array_keys($femCounts);
    $femData   = array_values($femCounts);

    // -------------------------------------------------------------
    // 2. DIMENSIÓN: ATENDIDAS
    // -------------------------------------------------------------
    $adultas = 0;
    try { $adultas = (int)$pdo->query("SELECT COUNT(*) FROM usuario")->fetchColumn(); } catch(Exception $e){}
    $adol = 0;
    try { 
        $adol = (int)$pdo->query("SELECT COUNT(*) FROM atencionestusadol")->fetchColumn();
        if ($adol === 0) {
            $adol = (int)$pdo->query("SELECT COUNT(*) FROM tutor WHERE nombre2 IS NOT NULL AND TRIM(nombre2) != '' AND TRIM(nombre2) != '-'")->fetchColumn();
        }
    } catch(Exception $e){}
    $tutoras = 0;
    try { $tutoras = (int)$pdo->query("SELECT COUNT(*) FROM tutor")->fetchColumn(); } catch(Exception $e){}
    $ninos = 0;
    try { 
        $n1 = (int)$pdo->query("SELECT COUNT(*) FROM hijos_usuario")->fetchColumn();
        $n2 = (int)$pdo->query("SELECT COUNT(*) FROM hijos_tutor")->fetchColumn();
        $n3 = (int)$pdo->query("SELECT COUNT(*) FROM hijos_adolecente")->fetchColumn();
        $ninos = $n1 + $n2 + $n3;
    } catch(Exception $e){}

    $totalAtendidas = $adultas + $adol + $tutoras + $ninos;
    $atendidasData = [$adultas, $adol, $tutoras, $ninos];

    // -------------------------------------------------------------
    // 3. DIMENSIÓN: PSICOLOGÍA
    // -------------------------------------------------------------
    $asesoriaPsico = 0;
    $atencionPsico = 0;
    $crisisPsico   = 0;
    $canalizacion  = 0;

    try {
        // Asesoría psicológica (en citas y detalles_atencion)
        $c1 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) LIKE '%ASESOR%PSICO%'")->fetchColumn();
        $d1 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(TipoAtencion) LIKE '%ASESOR%PSICO%'")->fetchColumn();
        $asesoriaPsico = $c1 + $d1;

        // Atención psicológica continua
        $c2 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) LIKE '%ATENCI%PSICO%'")->fetchColumn();
        $d2 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(TipoAtencion) LIKE '%ATENCI%PSICO%'")->fetchColumn();
        $atencionPsico = $c2 + $d2;

        // Contención en crisis / Citas de seguimiento
        $c3 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) = 'CITA' AND (ID_Personal IN (SELECT ID_Personal FROM personal WHERE ID_Rol = 3) OR ID_Personal = 1)")->fetchColumn();
        $d3 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(TipoAtencion) LIKE '%CRISIS%' OR UPPER(Herramientas) LIKE '%CRISIS%'")->fetchColumn();
        $crisisPsico = $c3 + $d3;

        // Canalización clínica
        $c4 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) LIKE '%CANALIZAC%'")->fetchColumn();
        $d4 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(TipoAtencion) LIKE '%CANALIZAC%'")->fetchColumn();
        $canalizacion = $c4 + $d4;
    } catch(Exception $e){}

    $psicTotal = $asesoriaPsico + $atencionPsico + $crisisPsico + $canalizacion;
    $psicLabels = ["Asesoría inicial", "Terapia continua", "Contención en crisis", "Canalización clínica"];
    $psicData   = [$asesoriaPsico, $atencionPsico, $crisisPsico, $canalizacion];

    // -------------------------------------------------------------
    // 4. DIMENSIÓN: JUICIOS Y ASESORÍA LEGAL
    // -------------------------------------------------------------
    $asesoriaLegal = 0;
    $pensionAlim   = 0;
    $guardaCust    = 0;
    $divorcioInc   = 0;
    $ordenesProt   = 0;

    try {
        // Asesoría legal y procedimientos (en citas y detalles de atención)
        $cl1 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) LIKE '%LEGAL%'")->fetchColumn();
        $dl1 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(TipoAtencion) LIKE '%LEGAL%' AND (Demanda IS NULL OR Demanda = '' OR Demanda = 'SIN DATOS')")->fetchColumn();
        $asesoriaLegal = $cl1 + $dl1;

        // Pensión alimenticia
        $p1 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(Demanda) LIKE '%PENSI%' OR UPPER(TipoAtencion) LIKE '%PENSI%'")->fetchColumn();
        $p2 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atenciona WHERE UPPER(Demanda) LIKE '%PENSI%' OR UPPER(TipoAtencion) LIKE '%PENSI%'")->fetchColumn();
        $p3 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) LIKE '%PENSI%'")->fetchColumn();
        $pensionAlim = $p1 + $p2 + $p3;

        // Guarda y custodia / Recuperación de menores
        $g1 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(Demanda) LIKE '%CUSTODIA%' OR UPPER(Demanda) LIKE '%MENOR%' OR UPPER(TipoAtencion) LIKE '%CUSTODIA%'")->fetchColumn();
        $g2 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atenciona WHERE UPPER(Demanda) LIKE '%CUSTODIA%' OR UPPER(Demanda) LIKE '%MENOR%' OR UPPER(TipoAtencion) LIKE '%CUSTODIA%'")->fetchColumn();
        $g3 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) LIKE '%CUSTODIA%' OR UPPER(TipoAtencion) LIKE '%MENOR%'")->fetchColumn();
        $guardaCust = $g1 + $g2 + $g3;

        // Divorcio incausado
        $di1 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(Demanda) LIKE '%DIVORCIO%' OR UPPER(TipoAtencion) LIKE '%DIVORCIO%'")->fetchColumn();
        $di2 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atenciona WHERE UPPER(Demanda) LIKE '%DIVORCIO%' OR UPPER(TipoAtencion) LIKE '%DIVORCIO%'")->fetchColumn();
        $di3 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) LIKE '%DIVORCIO%'")->fetchColumn();
        $divorcioInc = $di1 + $di2 + $di3;

        // Órdenes de protección / restricción
        $op1 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atencion WHERE UPPER(Demanda) LIKE '%ORDEN%' OR UPPER(Demanda) LIKE '%PROTECCI%' OR UPPER(Demanda) LIKE '%RESTRIC%' OR UPPER(TipoAtencion) LIKE '%ORDEN%' OR UPPER(TipoAtencion) LIKE '%PROTECCI%'")->fetchColumn();
        $op2 = (int)$pdo->query("SELECT COUNT(*) FROM detalles_atenciona WHERE UPPER(Demanda) LIKE '%ORDEN%' OR UPPER(Demanda) LIKE '%PROTECCI%' OR UPPER(Demanda) LIKE '%RESTRIC%' OR UPPER(TipoAtencion) LIKE '%ORDEN%' OR UPPER(TipoAtencion) LIKE '%PROTECCI%'")->fetchColumn();
        $op3 = (int)$pdo->query("SELECT COUNT(*) FROM citas WHERE UPPER(TipoAtencion) LIKE '%ORDEN%' OR UPPER(TipoAtencion) LIKE '%PROTECCI%' OR UPPER(TipoAtencion) LIKE '%RESTRIC%'")->fetchColumn();
        $ordenesProt = $op1 + $op2 + $op3;
    } catch(Exception $e){}

    $juiciosTotal = $asesoriaLegal + $pensionAlim + $guardaCust + $divorcioInc + $ordenesProt;
    $juiciosLabels = ["Asesoría legal", "Pensión alimenticia", "Guarda y custodia", "Divorcio incausado", "Órdenes de protección"];
    $juiciosData   = [$asesoriaLegal, $pensionAlim, $guardaCust, $divorcioInc, $ordenesProt];

    // -------------------------------------------------------------
    // 5. DIMENSIÓN: TALLERES Y CAPACITACIÓN COMUNITARIA
    // -------------------------------------------------------------
    $talleresCnt = 0;
    try { $talleresCnt = (int)$pdo->query("SELECT COUNT(*) FROM talleres")->fetchColumn(); } catch(Exception $e){}
    $diplomadosCnt = 0;
    try { $diplomadosCnt = (int)$pdo->query("SELECT COUNT(*) FROM diplomados")->fetchColumn(); } catch(Exception $e){}
    $seminariosCnt = 0;
    try { $seminariosCnt = (int)$pdo->query("SELECT COUNT(*) FROM seminarios")->fetchColumn(); } catch(Exception $e){}
    $modulosCnt = 0;
    try { $modulosCnt = (int)$pdo->query("SELECT COUNT(*) FROM modulos")->fetchColumn(); } catch(Exception $e){}

    $totalTalleres = $talleresCnt + $diplomadosCnt + $seminariosCnt + $modulosCnt;
    $talleresData = [$talleresCnt, $diplomadosCnt, $seminariosCnt, $modulosCnt];

    // -------------------------------------------------------------
    // 6. DIMENSIÓN: PROYECTOS INSTITUCIONALES Y FONDOS
    // -------------------------------------------------------------
    $activos = 0;
    $concluidos = 0;
    $gestion = 0;
    try {
        $activos = (int)$pdo->query("SELECT COUNT(*) FROM proyectos WHERE FechaInicio <= CURDATE() AND (FechaTermino >= CURDATE() OR FechaTermino IS NULL)")->fetchColumn();
        $concluidos = (int)$pdo->query("SELECT COUNT(*) FROM proyectos WHERE FechaTermino < CURDATE()")->fetchColumn();
        $gestion = (int)$pdo->query("SELECT COUNT(*) FROM proyectos WHERE FechaInicio > CURDATE() OR FechaInicio IS NULL")->fetchColumn();
    } catch(Exception $e){}

    $proyectosTotal = $activos + $concluidos + $gestion;
    $proyectosData = [$activos, $concluidos, $gestion];

    // Respuesta JSON completa
    echo json_encode([
        'status' => 'success',
        'dimensiones' => [
            'feminicidios' => [
                'kpiTotal' => $femTotal,
                'labels'   => $femLabels,
                'data'     => $femData
            ],
            'atendidas' => [
                'kpiTotal' => $totalAtendidas,
                'labels'   => ["Mujeres adultas", "Adolescentes", "Madres tutoras", "Niñas y niños"],
                'data'     => $atendidasData
            ],
            'psicologia' => [
                'kpiTotal' => $psicTotal,
                'labels'   => $psicLabels,
                'data'     => $psicData
            ],
            'juicios' => [
                'kpiTotal' => $juiciosTotal,
                'labels'   => $juiciosLabels,
                'data'     => $juiciosData
            ],
            'talleres' => [
                'kpiTotal' => $totalTalleres,
                'labels'   => ["Talleres comunitarios", "Diplomados", "Seminarios", "Módulos"],
                'data'     => $talleresData
            ],
            'proyectos' => [
                'kpiTotal' => $proyectosTotal,
                'labels'   => ["Activos", "Concluidos", "En gestión"],
                'data'     => $proyectosData
            ]
        ]
    ], JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'mensaje' => $e->getMessage()]);
}
