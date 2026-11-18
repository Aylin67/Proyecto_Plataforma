-- ==============================================================
-- BASE DE DATOS: gesmujer_publica_db
-- Sistema de Información Estadística - GESMujer / CISGES
-- Generado a partir del modelo DBML de 7 dimensiones
-- ==============================================================

CREATE DATABASE IF NOT EXISTS `gesmujer_publica_db` 
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `gesmujer_publica_db`;

-- Desactivar temporalmente revisión de llaves foráneas para creación limpia
SET FOREIGN_KEY_CHECKS = 0;

-- --------------------------------------------------------------
-- 1. TABLA: administradores
-- Gestiona accesos al panel administrativo (admin/login.php)
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `administradores`;
CREATE TABLE `administradores` (
  `id_admin` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(50) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `nombre_completo` VARCHAR(100) NOT NULL,
  `activo` TINYINT(1) NOT NULL DEFAULT 1,
  `fecha_creacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_admin`),
  UNIQUE KEY `uk_admin_usuario` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 2. TABLA: logs_sincronizacion
-- Bitácora de peticiones desde CISGES (api/sincronizar.php)
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `logs_sincronizacion`;
CREATE TABLE `logs_sincronizacion` (
  `id_log` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` VARCHAR(20) NOT NULL,
  `mensaje` TEXT NULL,
  PRIMARY KEY (`id_log`),
  KEY `idx_logs_fecha` (`fecha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 3. TABLA: dimensiones
-- Catálogo de las áreas temáticas de visualización
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `dimensiones`;
CREATE TABLE `dimensiones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clave` VARCHAR(30) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `icono` VARCHAR(50) NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_dimension_clave` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 4. TABLA: fuentes_graficas
-- Metadatos y fuentes oficiales asociadas a cada dimensión
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `fuentes_graficas`;
CREATE TABLE `fuentes_graficas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dimension_id` INT NOT NULL,
  `etiqueta_anio` VARCHAR(50) NOT NULL DEFAULT '2025',
  `linea1` TEXT NOT NULL,
  `linea2` TEXT NULL,
  `derechos` TEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_fuente_dimension` (`dimension_id`),
  CONSTRAINT `fk_fuentes_dimensiones`
    FOREIGN KEY (`dimension_id`) REFERENCES `dimensiones` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 5. TABLA: salud_defunciones
-- Indicadores demográficos de salud y defunciones
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `salud_defunciones`;
CREATE TABLE `salud_defunciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dimension_id` INT NOT NULL,
  `anio` INT NOT NULL,
  `def_mujeres` INT NOT NULL,
  `def_hombres` INT NOT NULL,
  `tasa_rmm` DECIMAL(6,2) NOT NULL,
  `tasa_embarazo_adol` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_salud_def_dimension` (`dimension_id`),
  CONSTRAINT `fk_salud_dimensiones`
    FOREIGN KEY (`dimension_id`) REFERENCES `dimensiones` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 6. TABLA: salud_causas
-- Desglose por causas principales de defunción
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `salud_causas`;
CREATE TABLE `salud_causas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `salud_id` INT NOT NULL,
  `causa` VARCHAR(150) NOT NULL,
  `defunciones` INT NOT NULL,
  `porcentaje` DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_causas_salud` (`salud_id`),
  CONSTRAINT `fk_causas_salud_defunciones`
    FOREIGN KEY (`salud_id`) REFERENCES `salud_defunciones` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 7. TABLA: edu_alfabetismo
-- Alfabetismo, rezago y grado promedio de escolaridad
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `edu_alfabetismo`;
CREATE TABLE `edu_alfabetismo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dimension_id` INT NOT NULL,
  `anio` INT NOT NULL,
  `ciclo_escolar` VARCHAR(30) NOT NULL,
  `alf_mujeres_pct` DECIMAL(5,2) NOT NULL,
  `alf_hombres_pct` DECIMAL(5,2) NOT NULL,
  `asistencia_pct` DECIMAL(5,2) NOT NULL,
  `rezago_mujeres` INT NOT NULL,
  `grado_promedio` DECIMAL(4,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_edu_alf_dimension` (`dimension_id`),
  CONSTRAINT `fk_edu_alf_dimensiones`
    FOREIGN KEY (`dimension_id`) REFERENCES `dimensiones` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 8. TABLA: edu_stem
-- Matrícula diferenciada en áreas STEM
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `edu_stem`;
CREATE TABLE `edu_stem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `educacion_id` INT NOT NULL,
  `nivel_educativo` VARCHAR(100) NOT NULL,
  `matricula_mujeres` INT NOT NULL,
  `matricula_hombres` INT NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_edu_stem_educacion` (`educacion_id`),
  CONSTRAINT `fk_edu_stem_alfabetismo`
    FOREIGN KEY (`educacion_id`) REFERENCES `edu_alfabetismo` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 9. TABLA: vivienda_servicios
-- Condiciones de vivienda particular y servicios básicos
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `vivienda_servicios`;
CREATE TABLE `vivienda_servicios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dimension_id` INT NOT NULL,
  `anio` INT NOT NULL,
  `electricidad` INT NOT NULL,
  `sanitario` INT NOT NULL,
  `drenaje` INT NOT NULL,
  `agua_entubada` INT NOT NULL,
  `piso_firme` INT NOT NULL,
  `piso_tierra` INT NOT NULL,
  `piso_no_esp` INT NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_vivienda_dimension` (`dimension_id`),
  CONSTRAINT `fk_vivienda_dimensiones`
    FOREIGN KEY (`dimension_id`) REFERENCES `dimensiones` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 10. TABLA: ingreso_empleo
-- Empleo, brecha salarial, desocupación e informalidad
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `ingreso_empleo`;
CREATE TABLE `ingreso_empleo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dimension_id` INT NOT NULL,
  `anio` INT NOT NULL,
  `trimestre` INT NOT NULL,
  `ingreso_mujeres` DECIMAL(10,2) NOT NULL,
  `ingreso_hombres` DECIMAL(10,2) NOT NULL,
  `brecha_salarial_pct` DECIMAL(5,2) NOT NULL,
  `desoc_mujeres_pct` DECIMAL(5,2) NOT NULL,
  `desoc_hombres_pct` DECIMAL(5,2) NOT NULL,
  `informalidad_mujeres_pct` DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_ingreso_dimension` (`dimension_id`),
  CONSTRAINT `fk_ingreso_dimensiones`
    FOREIGN KEY (`dimension_id`) REFERENCES `dimensiones` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 11. TABLA: lenguas_hablantes
-- Población hablante de lengua indígena por sexo
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `lenguas_hablantes`;
CREATE TABLE `lenguas_hablantes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dimension_id` INT NOT NULL,
  `anio` INT NOT NULL,
  `total_hablantes` INT NOT NULL,
  `mujeres_hablantes` INT NOT NULL,
  `hombres_hablantes` INT NOT NULL,
  `pct_mujeres` DECIMAL(5,2) NOT NULL,
  `pct_hombres` DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_lenguas_dimension` (`dimension_id`),
  CONSTRAINT `fk_lenguas_dimensiones`
    FOREIGN KEY (`dimension_id`) REFERENCES `dimensiones` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 12. TABLA: lenguas_distribucion
-- Distribución por lenguas originarias específicas
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `lenguas_distribucion`;
CREATE TABLE `lenguas_distribucion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lenguas_id` INT NOT NULL,
  `nombre_lengua` VARCHAR(80) NOT NULL,
  `total_hablantes` INT NOT NULL,
  `mujeres` INT NOT NULL,
  `hombres` INT NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_lenguas_dist_padre` (`lenguas_id`),
  CONSTRAINT `fk_lenguas_dist_hablantes`
    FOREIGN KEY (`lenguas_id`) REFERENCES `lenguas_hablantes` (`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------------
-- 13. TABLA: datos_indicadores
-- Registros sincronizados dinámicamente vía API (api/sincronizar.php)
-- --------------------------------------------------------------
DROP TABLE IF EXISTS `datos_indicadores`;
CREATE TABLE `datos_indicadores` (
  `id_registro` INT NOT NULL AUTO_INCREMENT,
  `id_indicador` VARCHAR(50) NOT NULL,
  `id_region` VARCHAR(50) NOT NULL,
  `anio` INT NOT NULL,
  `valor` DECIMAL(12,2) NULL,
  `valor_mujeres` DECIMAL(12,2) NULL,
  `valor_hombres` DECIMAL(12,2) NULL,
  `fecha_sincronizacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_registro`),
  KEY `idx_indicador_busqueda` (`id_indicador`, `anio`, `id_region`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Reactivar revisión de llaves foráneas
SET FOREIGN_KEY_CHECKS = 1;

-- ==============================================================
-- INSERTS SEMILLA (DATOS INICIALES)
-- ==============================================================

-- Usuario Administrador Inicial: admin / admin123
INSERT INTO `administradores` (`usuario`, `password_hash`, `nombre_completo`, `activo`) 
VALUES ('admin', '$2y$10$YisjR/oBN1FrssVzndSzl.YGEGUuYIKlCJUu7GdfHkWzyzjjZU1zu', 'Administradora General GESMujer', 1)
ON DUPLICATE KEY UPDATE `activo`=1;

-- Dimensiones del Sistema
INSERT INTO `dimensiones` (`id`, `clave`, `nombre`, `icono`) VALUES
(1, 'salud', 'Salud y Mortalidad', 'fa-heart-pulse'),
(2, 'educacion', 'Educación y STEM', 'fa-graduation-cap'),
(3, 'vivienda', 'Vivienda y Servicios', 'fa-house-chimney'),
(4, 'ingreso', 'Ingresos y Empleo', 'fa-coins'),
(5, 'lenguas', 'Lenguas Indígenas', 'fa-comments'),
(6, 'violencia', 'Violencia de Género', 'fa-hand-fist'),
(7, 'ciberacoso', 'Ciberacoso MOCIBA', 'fa-mobile-screen');

-- Fuentes y Metadatos Iniciales
INSERT INTO `fuentes_graficas` (`dimension_id`, `etiqueta_anio`, `linea1`, `linea2`, `derechos`) VALUES
(1, '2025', 'INEGI - Estadísticas de Defunciones Registradas (EDR 2025)', 'Secretaría de Salud Federal - Cubos Dinámicos DGIS', 'Datos de uso público bajo licencia de datos abiertos.'),
(2, '2024-2025', 'INEGI - Censo de Población y Vivienda / SEP Indicadores Educativos', 'Estadística del Sistema Educativo Nacional', 'GESMujer Oaxaca'),
(3, '2020', 'INEGI - Censo de Población y Vivienda 2020', 'Tabulados del cuestionario ampliado de Vivienda', 'GESMujer Oaxaca'),
(4, '2024', 'INEGI - Encuesta Nacional de Ingresos y Gastos de los Hogares (ENIGH)', 'ENOE - Encuesta Nacional de Ocupación y Empleo', 'GESMujer Oaxaca'),
(5, '2020', 'INEGI - Censo de Población y Vivienda 2020 (Etnicidad)', 'Población de 3 años y más hablante de lengua indígena', 'GESMujer Oaxaca'),
(6, '2021-2024', 'INEGI - ENDIREH / SIESVIM Banco de Indicadores', 'Registro Estatal de Violencia contra las Mujeres', 'GESMujer Oaxaca'),
(7, '2025', 'INEGI - Módulo sobre Ciberacoso (MOCIBA 2025)', 'Tabulados interactivos Cuadro 1.27, 1.45 y 1.46', 'GESMujer Oaxaca');
