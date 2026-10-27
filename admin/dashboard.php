<?php
// admin/dashboard.php - Panel de control y auditoría para la administradora de GESMujer
require_once __DIR__ . '/includes/sesion.php';
verificarAutenticacion();

// Cerrar sesión
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: login.php');
    exit;
}

require_once __DIR__ . '/../api/conexion.php';

// Consultar métricas del sistema
$total_registros = 0;
$total_logs = 0;
$logs_recientes = [];

try {
    // Total de registros sincronizados
    $stmt = $pdo->query("SELECT COUNT(*) FROM datos_indicadores");
    $total_registros = $stmt->fetchColumn();
} catch (Exception $e) {
    // Si la tabla aún no tiene datos
    $total_registros = 0;
}

try {
    // Últimos logs de sincronización
    $stmt_logs = $pdo->query("SELECT * FROM logs_sincronizacion ORDER BY id_log DESC LIMIT 15");
    $logs_recientes = $stmt_logs->fetchAll();
    $total_logs = count($logs_recientes);
} catch (Exception $e) {
    $logs_recientes = [];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Control | GESMujer</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --ges-morado-profundo: #4a154b;
            --ges-rosa-mexicano: #c2185b;
        }
        body {
            background-color: #f8f6f8;
            font-family: 'Segoe UI', system-ui, sans-serif;
        }
        .navbar-admin {
            background: linear-gradient(90deg, #4a154b 0%, #701d57 100%);
            box-shadow: 0 3px 12px rgba(0,0,0,0.15);
        }
        .stat-card-admin {
            background: white;
            border-radius: 16px;
            padding: 20px;
            border: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
            border-left: 5px solid #701d57;
        }
    </style>
</head>
<body>

    <!-- Navegación del Panel Administrativo -->
    <nav class="navbar navbar-expand-lg navbar-dark navbar-admin">
        <div class="container-fluid px-4">
            <span class="navbar-brand fw-bold">
                <i class="fa-solid fa-lock me-2"></i> Panel de Control | GESMujer
            </span>
            <div class="ms-auto d-flex align-items-center">
                <span class="text-white small me-3 d-none d-md-inline">
                    <i class="fa-solid fa-user-circle me-1"></i> <?php echo htmlspecialchars($_SESSION['admin_nombre'] ?? 'Administradora'); ?>
                </span>
                <a href="../index.html" class="btn btn-outline-light btn-sm rounded-pill px-3 me-2" target="_blank">
                    <i class="fa-solid fa-arrow-up-right-from-square me-1"></i> Ver Portal Público
                </a>
                <a href="dashboard.php?logout=1" class="btn btn-danger btn-sm rounded-pill px-3 fw-bold">
                    <i class="fa-solid fa-power-off me-1"></i> Cerrar Sesión
                </a>
            </div>
        </div>
    </nav>

    <div class="container-fluid px-4 py-4">

        <!-- Fila de Resumen / KPIs de Control -->
        <div class="row g-3 mb-4">
            <div class="col-12 col-md-4">
                <div class="stat-card-admin">
                    <div class="small text-muted fw-bold text-uppercase">Datos Sincronizados (CISGES)</div>
                    <div class="fs-2 fw-bold text-dark"><?php echo number_format($total_registros); ?></div>
                    <div class="small text-muted">Registros acumulados en base de datos</div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="stat-card-admin" style="border-left-color: var(--ges-rosa-mexicano);">
                    <div class="small text-muted fw-bold text-uppercase">Estado de la API REST</div>
                    <div class="fs-2 fw-bold text-success"><i class="fa-solid fa-circle-check me-1"></i> Activa</div>
                    <div class="small text-muted">Endpoint: /api/sincronizar.php</div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="stat-card-admin" style="border-left-color: #00897b;">
                    <div class="small text-muted fw-bold text-uppercase">Eventos de Auditoría</div>
                    <div class="fs-2 fw-bold text-dark"><?php echo number_format($total_logs); ?></div>
                    <div class="small text-muted">Últimas transacciones registradas</div>
                </div>
            </div>
        </div>

        <!-- Tabla de Bitácora de Sincronizaciones -->
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
            <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                <h5 class="fw-bold mb-0 text-dark">
                    <i class="fa-solid fa-list-check text-primary me-2"></i> Bitácora de Auditoría (logs_sincronizacion)
                </h5>
                <span class="badge bg-light text-dark border px-3 py-2 rounded-pill">
                    Monitoreo en Tiempo Real
                </span>
            </div>
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light small text-uppercase">
                            <tr>
                                <th class="ps-4">ID</th>
                                <th>Fecha y Hora</th>
                                <th>Estado</th>
                                <th>Mensaje del Sistema</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (empty($logs_recientes)): ?>
                                <tr>
                                    <td colspan="4" class="text-center py-4 text-muted">
                                        <i class="fa-solid fa-inbox fs-3 d-block mb-2 text-secondary"></i>
                                        Aún no hay registros de sincronización en la bitácora.
                                    </td>
                                </tr>
                            <?php else: ?>
                                <?php foreach ($logs_recientes as $log): ?>
                                    <tr>
                                        <td class="ps-4 fw-bold text-muted"><?php echo $log['id_log']; ?></td>
                                        <td class="small"><?php echo htmlspecialchars($log['fecha']); ?></td>
                                        <td>
                                            <?php if ($log['estado'] === 'ÉXITO'): ?>
                                                <span class="badge bg-success-subtle text-success border border-success-subtle px-3 py-1 rounded-pill fw-bold">
                                                    <i class="fa-solid fa-check me-1"></i> ÉXITO
                                                </span>
                                            <?php else: ?>
                                                <span class="badge bg-danger-subtle text-danger border border-danger-subtle px-3 py-1 rounded-pill fw-bold">
                                                    <i class="fa-solid fa-xmark me-1"></i> ERROR
                                                </span>
                                            <?php endif; ?>
                                        </td>
                                        <td class="small text-muted"><?php echo htmlspecialchars($log['mensaje']); ?></td>
                                    </tr>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>

</body>
</html>
