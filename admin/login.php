<?php
// admin/login.php - Acceso exclusivo para el personal autorizado de GESMujer

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Si ya está autenticado, redirigir al panel
if (isset($_SESSION['admin_autenticado']) && $_SESSION['admin_autenticado'] === true) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = trim($_POST['usuario'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($usuario) || empty($password)) {
        $error = 'Por favor, ingresa tu usuario y contraseña.';
    } else {
        require_once __DIR__ . '/../api/conexion.php';

        try {
            $stmt = $pdo->prepare("SELECT id_admin, usuario, password_hash, nombre_completo, activo FROM administradores WHERE usuario = :usuario LIMIT 1");
            $stmt->execute([':usuario' => $usuario]);
            $admin = $stmt->fetch();

            if ($admin && $admin['activo'] == 1 && password_verify($password, $admin['password_hash'])) {
                $_SESSION['admin_autenticado'] = true;
                $_SESSION['admin_id'] = $admin['id_admin'];
                $_SESSION['admin_usuario'] = $admin['usuario'];
                $_SESSION['admin_nombre'] = $admin['nombre_completo'];

                header('Location: dashboard.php');
                exit;
            } else {
                $error = 'Credenciales incorrectas o cuenta inactiva.';
            }
        } catch (Exception $e) {
            $error = 'Error de conexión con el servidor.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceso Administrativo | GESMujer</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            background-color: #2a1127;
            background-image: radial-gradient(#4a154b 1px, transparent 1px);
            background-size: 24px 24px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Segoe UI', system-ui, sans-serif;
        }
        .card-login {
            background: #ffffff;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.35);
            border: none;
            max-width: 420px;
            width: 100%;
            overflow: hidden;
        }
        .login-header {
            background: linear-gradient(135deg, #4a154b 0%, #701d57 100%);
            padding: 30px 20px;
            text-align: center;
            color: white;
        }
        .btn-ges {
            background: linear-gradient(135deg, #701d57 0%, #c2185b 100%);
            color: white;
            font-weight: 700;
            border-radius: 50px;
            padding: 12px;
            border: none;
            transition: all 0.3s;
        }
        .btn-ges:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(112, 29, 87, 0.35);
            color: white;
        }
    </style>
</head>
<body>

    <div class="card card-login mx-3">
        <div class="login-header">
            <div class="rounded-circle bg-white text-danger d-inline-flex align-items-center justify-content-center mb-2 shadow-sm" style="width: 50px; height: 50px; font-size: 1.4rem;">
                <i class="fa-solid fa-lock" style="color: #701d57;"></i>
            </div>
            <h4 class="fw-bold mb-0">Panel Administrativo</h4>
            <p class="small text-white-50 mb-0">GESMujer Rosario Castellanos</p>
        </div>

        <div class="p-4">
            <?php if (!empty($error)): ?>
                <div class="alert alert-danger py-2 small rounded-3" role="alert">
                    <i class="fa-solid fa-triangle-exclamation me-1"></i> <?php echo htmlspecialchars($error); ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="login.php">
                <div class="mb-3">
                    <label class="form-label small fw-bold text-muted">Usuario</label>
                    <div class="input-group">
                        <span class="input-group-text bg-light"><i class="fa-solid fa-user text-muted"></i></span>
                        <input type="text" name="usuario" class="form-control" placeholder="admin_gesmujer" required autofocus>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label small fw-bold text-muted">Contraseña</label>
                    <div class="input-group">
                        <span class="input-group-text bg-light"><i class="fa-solid fa-key text-muted"></i></span>
                        <input type="password" name="password" class="form-control" placeholder="••••••••" required>
                    </div>
                </div>

                <button type="submit" class="btn btn-ges w-100 mb-3">
                    <i class="fa-solid fa-right-to-bracket me-1"></i> Iniciar Sesión
                </button>
            </form>

            <div class="text-center">
                <a href="../index.html" class="small text-decoration-none text-muted">
                    <i class="fa-solid fa-arrow-left me-1"></i> Volver al Portal Ciudadano
                </a>
            </div>
        </div>
    </div>

</body>
</html>
