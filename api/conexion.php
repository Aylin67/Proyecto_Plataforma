<?php
// api/conexion.php - Conexión centralizada a la base de datos pública de GESMujer

$host = 'localhost';
$dbname = 'gesmujer_publica_db';
$usuario = 'root';
$password = ''; // Contraseña de XAMPP

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $usuario,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'status' => 'error',
        'mensaje' => 'Error de conexión a la base de datos: ' . $e->getMessage()
    ]);
    exit;
}
