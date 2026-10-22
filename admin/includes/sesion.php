<?php
// admin/includes/sesion.php - Control de autenticación y sesiones del panel administrativo

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function verificarAutenticacion() {
    if (!isset($_SESSION['admin_autenticado']) || $_SESSION['admin_autenticado'] !== true) {
        header('Location: login.php');
        exit;
    }
}
