(function(window) {
    'use strict';

    const datosTematicos = {
        //  USUARIAS ATENDIDAS
        atendidas: {
            titulo: "USUARIAS ATENDIDAS",
            subtitulo: "Atención integral a mujeres, adolescentes y niñas",
            icono: "fa-people-group",
            iconoColor: "#00838f",
            badge: "CISGES",
            fuenteCorta: "CISGES ",
            kpiTotal: { label: "Total de usuarias registradas", valor: "345" },
            graficaPrincipal: {
                titulo: "Atendidas ",
                labels: ["Mujeres adultas", "Adolescentes", "Madres tutoras", "Niñas y niños"],
                data: [216, 60, 39, 30],
                colores: ["#60ced8", "#e67eb7", "#5aa348", "#ecb0a0"],
                tipo: "bar"
            },
            analisis: "Cada cifra en esta gráfica representa a una mujer, una adolescente o una niña que encontró en GESMujer un espacio seguro para ser escuchada. Atendemos a mujeres adultas, jóvenes, madres tutoras y a las niñas y niños."
        },
        // ATENCIÓN PSICOLÓGICA
        psicologia: {
            titulo: "ATENCIÓN Y ASESORÍA PSICOLÓGICA",
            subtitulo: "Citas, sesiones de contención y seguimiento terapéutico",
            icono: "fa-hand-holding-heart",
            iconoColor: "#7b1fa2",
            badge: "CISGES",
            fuenteCorta: "CISGES ",
            kpiTotal: { label: "Sesiones psicológicas", valor: "1" },
            graficaPrincipal: {
                titulo: "Tipo de atención psicológica",
                labels: ["Asesoría inicial", "Terapia continua", "Contención en crisis", "Canalización clínica"],
                data: [1, 1, 1, 1],
                colores: ["#60ced8", "#e67eb7", "#5aa348", "#ecb0a0"],
                tipo: "bar"
            },
            analisis: "A través del acompañamiento psicológico sostenemos a niñas, adolescentes y mujeres en su proceso de sanación emocional. Ofrecemos asesoría inicial, terapia continua, contención en crisis y canalización a servicios especializados. Cada sesión es un acto de resistencia: un espacio donde el dolor se nombra, se comprende y se transforma. Porque sanar también es un derecho."
        },
        // JUICIOS Y ASESORÍA LEGAL
        juicios: {
            titulo: "JUICIOS Y ASESORÍA LEGAL",
            subtitulo: "Acompañamiento jurídico, litigio familiar y órdenes de protección",
            icono: "fa-scale-balanced",
            iconoColor: "#283593",
            badge: "CISGES",
            fuenteCorta: "CISGES ",
            kpiTotal: { label: "Servicios jurídicos", valor: "1" },
            graficaPrincipal: {
                titulo: "Materia del litigio",
                labels: ["Pensión alimenticia", "Guarda y custodia", "Divorcio incausado", "Órdenes de protección"],
                data: [1, 1, 1, 1],
                colores: ["#60ced8", "#e67eb7", "#5aa348", "#ecb0a0"],
                tipo: "bar"
            },
            analisis: "El acceso a la justicia no debería ser un privilegio. En GESMujer acompañamos jurídicamente a mujeres que enfrentan litigios familiares, demandas de pensión alimenticia, guarda y custodia, divorcios y solicitudes de órdenes de protección. Cada expediente abierto es una puerta que se abre frente a la impunidad, un paso firme hacia la restitución de derechos y una vida digna para las mujeres y sus hijas e hijos."
        },
        // FEMINICIDIOS
        feminicidios: {
            titulo: "REGISTRO HEMEROGRÁFICO DE FEMINICIDIOS",
            subtitulo: "Monitoreo de muertes violentas, armas y alertas de género ",
            icono: "fa-ribbon",
            iconoColor: "#c62828",
            badge: "CISGES",
            fuenteCorta: "CISGES",
            kpiTotal: { label: "Casos registrados", valor: "154" },
            graficaPrincipal: {
                titulo: "Distribución por regiones de Oaxaca",
                labels: ["Valles Centrales", "Istmo", "Tuxtepec", "Costa", "Mixteca", "Sierra Sur", "Sierra Norte", "Cañada"],
                data: [30, 45, 4, 37, 13, 14, 6, 5],
                colores: ["#60ced8", "#e67eb7", "#5aa348", "#e39d8a", "#c592e6", "#ea8d8d", "#f7ee73", "#e089b7"],
                tipo: "bar"
            },
            analisis: "Documentamos hemerográficamente los feminicidios ocurridos en las 8 regiones de Oaxaca para visibilizar una realidad que no debe ser olvidada. Detrás de cada caso hay una mujer, un nombre, una familia y una historia de violencia estructural. Nombrar lo que ocurre es el primer paso para exigir justicia, prevención y políticas públicas que protejan a las mujeres."
        },
        // TALLERES
        talleres: {
            titulo: "TALLERES Y CAPACITACIÓN COMUNITARIA",
            subtitulo: "Procesos formativos comunitarios, diplomados y asistencia",
            icono: "fa-chalkboard-user",
            iconoColor: "#e65100",
            badge: "CISGES",
            fuenteCorta: "CISGES",
            kpiTotal: { label: "Procesos formativos", valor: "1" },
            graficaPrincipal: {
                titulo: "Modalidades de formación impartidas",
                labels: ["Talleres comunitarios", "Diplomados", "Seminarios", "Módulos"],
                data: [1, 1, 1, 1],
                colores: ["#60ced8", "#e67eb7", "#5aa348", "#e39d8a"],
                tipo: "bar"
            },
            analisis: "La formación es una herramienta de liberación. A través de talleres comunitarios, diplomados, seminarios y módulos llegamos a las comunidades más alejadas de Oaxaca para compartir conocimientos sobre derechos humanos, prevención de violencias, salud y autonomía. Cada proceso formativo siembra conciencia, fortalece liderazgos y teje redes de mujeres que se sostienen entre sí."
        },
        // PROYECTOS
        proyectos: {
            titulo: "PROYECTOS INSTITUCIONALES Y FONDOS",
            subtitulo: "Gestión de proyectos, financiamiento y beneficiarias",
            icono: "fa-diagram-project",
            iconoColor: "#00695c",
            badge: "CISGES",
            fuenteCorta: "CISGES",
            kpiTotal: { label: "Proyectos institucionales", valor: "1" },
            graficaPrincipal: {
                titulo: "Estado de la cartera de proyectos",
                labels: ["Activos", "Concluidos", "En gestión"],
                data: [1, 1, 1],
                colores: ["#60ced8", "#e67eb7", "#5aa348", "#e39d8a"],
                tipo: "bar"
            },
            analisis: "Gestionamos proyectos que transforman realidades. Con el respaldo de fondos públicos y donaciones privadas, ejecutamos iniciativas de atención directa, formación comunitaria, investigación e incidencia pública. Cada peso invertido se traduce en más mujeres acompañadas, más comunidades informadas y más pasos hacia una Oaxaca con igualdad sustantiva."
        },
        // SALUD 
        salud: {
            titulo: "SALUD Y MORTALIDAD EN MUJERES",
        
            subtitulo: "Mortalidad general, materna e infantil.",
            icono: "fa-heart-pulse",
            iconoColor: "#00897b",
            badge: "INEGI · EDR",
            fuenteCorta: "INEGI · EDR",
            pieFuente: "Fuente: INEGI, Estadísticas de Defunciones Registradas (EDR) 2025",
        },
        // EDUCACIÓN 
        educacion: {
            titulo: "DIMENSIÓN DE EDUCACIÓN Y TRAYECTORIA ACADÉMICA",
            subtitulo: "Acceso escolar, trayectoria académica y analfabetismo en Oaxaca (INEGI & SEP)",
            icono: "fa-book-open",
            iconoColor: "#f57c00",
            badge: "INEGI & SEP",
            fuenteCorta: "INEGI / SEP / ANUIES",
        },
        // VIVIENDA 
        vivienda: {
            titulo: "DIMENSIÓN DE VIVIENDA, SERVICIOS Y PATRIMONIO",
            subtitulo: "Tenencia, servicios básicos y condiciones habitacionales en Oaxaca (INEGI)",
            icono: "fa-house-chimney",
            iconoColor: "#1565c0",
            badge: "INEGI Censo 2020",
            fuenteCorta: "INEGI / CONEVAL",
        },
        // INGRESO 
        ingreso: {
            titulo: "DIMENSIÓN DE INGRESOS, INFORMALIDAD Y REMESAS",
            subtitulo: "Ingresos por hogar y desocupación trimestral en Oaxaca (INEGI · ENIGH & ENOE)",
            icono: "fa-sack-dollar",
            iconoColor: "#2e7d32",
            badge: "INEGI · ENIGH & ENOE",
            fuenteCorta: "INEGI / ENIGH / ENOE",
        },
        // LENGUAS INDÍGENAS
        lenguas: {
            titulo: "DIMENSIÓN DE LENGUAS INDÍGENAS",
            subtitulo: "Población de 3 años y más hablante de lengua indígena y condición de habla de español (INEGI)",
            icono: "fa-language",
            iconoColor: "#7b1fa2",
            badge: "INEGI · Censos e Intercensal",
            fuenteCorta: "INEGI / Censos / Intercensal",
            pieFuente: "INEGI · Censos 2010, 2020 y Encuesta Intercensal 2025",
            kpiTotal: { label: "Habla lengua indígena (2025)", valor: "29.39%" }
        }
    };

    // ESTADO Y VARIABLES INTERNAS
    let modalTematicoBootstrap = null;
    let timerTarjetaActiva = null;

    // RENDERIZADO DEL MODAL TEMÁTICO
    function renderizarModalTematico(nombreTema, data) {
        const labelTotal = document.getElementById('labelTematicaTotal');
        const valorTotal = document.getElementById('valorTematicaTotal');
        const notaTotal  = document.getElementById('notaTematicaTotal');

        if (data.kpiTotal) {
            if (labelTotal) labelTotal.innerHTML = '<i class="fa-solid fa-chart-line me-1"></i> ' + data.kpiTotal.label;
            if (valorTotal) valorTotal.textContent = data.kpiTotal.valor;
            if (notaTotal)  notaTotal.textContent  = data.kpiTotal.nota || '';
        }

        const labelM = document.getElementById('labelTematicaMujeres');
        const valorM = document.getElementById('valorTematicaMujeres');
        const badgeM = document.getElementById('badgeTematicaMujeres');
        const labelH = document.getElementById('labelTematicaHombres');
        const valorH = document.getElementById('valorTematicaHombres');
        const badgeH = document.getElementById('badgeTematicaHombres');

        if (data.kpiSecundario1) {
            if (labelM) labelM.innerHTML = '<i class="fa-solid fa-circle-info me-1"></i> ' + data.kpiSecundario1.label;
            if (valorM) valorM.textContent = data.kpiSecundario1.valor;
            if (badgeM) {
                badgeM.textContent = data.kpiSecundario1.badge || '';
                badgeM.style.background = data.kpiSecundario1.color || '#c2185b';
            }
        }
        if (data.kpiSecundario2) {
            if (labelH) labelH.innerHTML = '<i class="fa-solid fa-circle-info me-1"></i> ' + data.kpiSecundario2.label;
            if (valorH) valorH.textContent = data.kpiSecundario2.valor;
            if (badgeH) {
                badgeH.textContent = data.kpiSecundario2.badge || '';
                badgeH.style.background = data.kpiSecundario2.color || '#00897b';
            }
        }

        const tituloPrincipal = document.getElementById('modalTematicoGraficaTitulo');
        const descPrincipal   = document.getElementById('modalTematicoGraficaDesc');
        const tituloSecundario = document.getElementById('modalTematicoSecundarioTitulo');

        if (tituloPrincipal && data.graficaPrincipal) {
            tituloPrincipal.innerHTML = '<i class="fa-solid fa-chart-column me-1"></i> ' + (data.graficaPrincipal.titulo || 'Gráfica principal');
        }
        if (tituloSecundario && data.graficaSecundaria) {
            tituloSecundario.innerHTML = '<i class="fa-solid fa-chart-pie me-1"></i> ' + (data.graficaSecundaria.titulo || 'Distribución');
        }

        // === LECTURA DE DATOS (debajo del KPI morado) ===
        const analisisCard = document.getElementById('modalTematicoAnalisisCard');
        if (analisisCard) {
            if (data.analisis) {
                analisisCard.innerHTML = `
                    <div class="d-flex align-items-start gap-2 mb-2">
                        <i class="fa-solid fa-lightbulb" style="color:#e65100; font-size:1.1rem; margin-top:2px;"></i>
                        <div style="flex:1;">
                            <div class="fw-bold small text-uppercase mb-1" style="color:#4a154b;">Lectura de datos</div>
                            <p class="small mb-0" style="color:#444; line-height:1.5; text-align:justify;">${data.analisis}</p>
                        </div>
                    </div>
                `;
            } else {
                analisisCard.innerHTML = '';
            }
        }

        if (window._chartTematicoPrincipal) { window._chartTematicoPrincipal.destroy(); window._chartTematicoPrincipal = null; }
        if (window._chartTematicoSecundario) { window._chartTematicoSecundario.destroy(); window._chartTematicoSecundario = null; }

        const canvasPrincipal = document.getElementById('canvasTematicoPrincipal');
        if (canvasPrincipal && data.graficaPrincipal && data.graficaPrincipal.labels) {
            const ctx = canvasPrincipal.getContext('2d');
            window._chartTematicoPrincipal = new Chart(ctx, {
                type: data.graficaPrincipal.tipo || 'bar',
                data: {
                    labels: data.graficaPrincipal.labels,
                    datasets: [{
                        label: data.graficaPrincipal.titulo || 'Total',
                        data: data.graficaPrincipal.data,
                        backgroundColor: data.graficaPrincipal.colores || ['#4a154b', '#c2185b', '#00897b', '#e65100'],
                        borderRadius: 8, borderWidth: 1, borderColor: '#ffffff', barPercentage: 0.7
                    }]
                },
                options: {
                    animation: false,
                    responsive: true, maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        datalabels: {
                            anchor: 'end', align: 'end', color: '#333',
                            font: { weight: 'bold', size: 11 },
                            formatter: v => v == null ? '' : Number(v).toLocaleString('es-MX')
                        },
                        tooltip: { callbacks: { label: c => ' ' + Number(c.raw).toLocaleString('es-MX') } }
                    },
                    layout: { padding: { top: 24, bottom: 30 } },
                    scales: data.graficaPrincipal.tipo === 'doughnut' ? {} : {
                        y: {
                            beginAtZero: true,
                            ticks: { callback: v => v >= 1000000 ? (v / 1000000).toFixed(1) + 'M' : v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v, font: { size: 10 } },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: { 
                            ticks: { 
                                font: { size: 9, weight: 'bold' },
                                color: '#4a154b',
                                maxRotation: 0,
                                minRotation: 0,
                                autoSkip: false,
                                padding: 8
                            }, 
                            grid: { display: false } 
                        }
                    }
                }
            });
        }

        const canvasSecundario = document.getElementById('canvasTematicoSecundario');
        if (canvasSecundario && data.graficaSecundaria && data.graficaSecundaria.labels) {
            const ctx2 = canvasSecundario.getContext('2d');
            window._chartTematicoSecundario = new Chart(ctx2, {
                type: data.graficaSecundaria.tipo || 'doughnut',
                data: {
                    labels: data.graficaSecundaria.labels,
                    datasets: [{
                        data: data.graficaSecundaria.data,
                        backgroundColor: data.graficaSecundaria.colores || ['#4a154b', '#c2185b', '#00897b', '#e65100'],
                        borderWidth: 2, borderColor: '#ffffff'
                    }]
                },
                options: {
                    animation: false,
                    responsive: true, maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true, position: 'bottom', labels: { font: { size: 10 }, boxWidth: 12 } },
                        datalabels: {
                            color: '#fff', font: { weight: 'bold', size: 10 },
                            formatter: (value, ctx) => {
                                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                                return total ? (value / total * 100).toFixed(1) + '%' : '';
                            }
                        }
                    }
                }
            });
        }
    }
    // RENDERIZADO DE LAS 4 GRÁFICAS DE SALUD (INEGI EDR 2025)
   
    let chartSaludCausas = null;
    let chartSaludSuicidio = null;
    let chartSaludMama = null;
    let chartSaludDiabetes = null;
    let chartSaludMaterna = null;
    let chartSaludInfantil = null;
    let chartEduAptitud = null;
    let chartEduAlfabetismo = null;
    let chartEduMatricula = null;
    let chartEduEscolaridad = null;
    let chartEduAsistencia = null;
    let chartVivServicios = null;
    let chartVivPisos = null;
    let chartIngresoRubros = null;
    let chartIngresoDesocupacion = null;
    let chartLenguasMonolingues = null;
    let chartLenguasCondicion = null;

    // 1. TOP 10 CAUSAS DE DEFUNCIÓN EN MUJERES EN OAXACA (DATOS REALES INEGI EDR 2025)
    const causasNombresCompletos = [
        'Enfermedades endocrinas y metabólicas',
        'Enfermedades isquémicas del corazón',
        'Enfermedades de otras partes del aparato digestivo',
        'Otras enfermedades del aparato respiratorio',
        'Enfermedades cerebrovasculares',
        'Enfermedades hipertensivas',
        'Tumores malignos de los órganos digestivos',
        'Tumores malignos de órganos genitourinarios',
        'Enfermedades del aparato urinario',
        'Tumores malignos de huesos, piel y de la mama'
    ];

    const causasLabelsEje = [
        'Enf. endocrinas y metabólicas',
        'Enf. isquémicas del corazón',
        'Otras del aparato digestivo',
        'Otras del aparato respiratorio',
        'Enf. cerebrovasculares',
        'Enf. hipertensivas',
        'Tumores órganos digestivos',
        'Tumores genitourinarios',
        'Enf. del aparato urinario',
        'Tumores mama, piel y huesos'
    ];

    const causasValoresMujeres = [2622, 2367, 894, 862, 799, 707, 606, 367, 337, 287];

    function renderizarSaludINEGI() {
        if (chartSaludCausas) { chartSaludCausas.destroy(); chartSaludCausas = null; }
        if (chartSaludSuicidio) { chartSaludSuicidio.destroy(); chartSaludSuicidio = null; }
        if (chartSaludMama) { chartSaludMama.destroy(); chartSaludMama = null; }
        if (chartSaludDiabetes) { chartSaludDiabetes.destroy(); chartSaludDiabetes = null; }
        if (chartSaludMaterna) { chartSaludMaterna.destroy(); chartSaludMaterna = null; }
        if (chartSaludInfantil) { chartSaludInfantil.destroy(); chartSaludInfantil = null; }

        // 1. 10 Principales Causas de Defunción en Mujeres (GRÁFICA DE BARRAS)
        const ctx0 = document.getElementById('canvasSaludCausas');
        if (ctx0) {
            chartSaludCausas = new Chart(ctx0.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: causasLabelsEje,
                    datasets: [{
                        label: 'Defunciones registradas (Mujeres)',
                        data: causasValoresMujeres,
                        backgroundColor: '#48b5c4',
                        hoverBackgroundColor: '#369da8',
                        borderRadius: 4,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.72,
                        categoryPercentage: 0.85
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                title: function(items) {
                                    const idx = items[0].dataIndex;
                                    return causasNombresCompletos[idx] || items[0].label;
                                },
                                label: function(context) {
                                    return ' ' + Number(context.raw).toLocaleString('es-MX') + ' defunciones registradas';
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 9.5 },
                            formatter: function(val) {
                                return Number(val).toLocaleString('es-MX');
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de defunciones registradas',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) {
                                    return Number(val).toLocaleString('es-MX');
                                }
                            },
                            grid: {
                                color: 'rgba(0,0,0,0.05)'
                            }
                        },
                        x: {
                            ticks: {
                                font: { size: 9, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 45,
                                minRotation: 35
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 2. Suicidio por Causa (INEGI EDR 2025 - Mujeres)
        const ctx1 = document.getElementById('canvasSaludSuicidio');
        if (ctx1) {
            const suicidioCausasNombres = [
                'Ahorcamiento, estrangulamiento o sofocación',
                'Envenenamiento',
                'Disparo de arma de fuego',
                'Otras causas'
            ];
            chartSaludSuicidio = new Chart(ctx1.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: [
                        ['Ahorcamiento,', 'estrangulamiento', 'o sofocación'],
                        'Envenenamiento',
                        ['Disparo de arma', 'de fuego'],
                        'Otras causas'
                    ],
                    datasets: [{
                        label: 'Defunciones registradas ',
                        data: [33, 7, 1, 0],
                        backgroundColor: ['#60ced8', '#e67eb7', '#5aa348', '#ecb0a0'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                title: function(items) {
                                    const idx = items[0].dataIndex;
                                    return suicidioCausasNombres[idx] || items[0].label;
                                },
                                label: function(c) {
                                    return ' ' + Number(c.raw).toLocaleString('es-MX') + ' defunciones registradas';
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10.5 },
                            formatter: function(v) {
                                return v != null ? Number(v).toLocaleString('es-MX') : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de defunciones registradas',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) {
                                    return Number(val).toLocaleString('es-MX');
                                }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 3. Tumor maligno de la mama
        const ctx2 = document.getElementById('canvasSaludMama');
        if (ctx2) {
            chartSaludMama = new Chart(ctx2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: [
                        '15 a 19', '20 a 24', '25 a 29', '30 a 34', '35 a 39',
                        '40 a 44', '45 a 49', '50 a 54', '55 a 59', '60 a 64',
                        '65 a 69', '70 a 74', '75 a 79', '80 a 84', '85 y más', 'No especificado'
                    ],
                    datasets: [{
                        label: 'Defunciones por grupo quinquenal',
                        data: [0, 0, 2, 4, 11, 19, 18, 23, 19, 24, 30, 22, 10, 16, 12, 0],
                        backgroundColor: [
                            '#60ced8', '#e67eb7', '#5aa348', '#e39d8a',
                            '#60ced8', '#e67eb7', '#5aa348', '#e39d8a',
                            '#60ced8', '#e67eb7', '#5aa348', '#e39d8a',
                            '#60ced8', '#e67eb7', '#5aa348', '#e39d8a'
                        ],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.7
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        datalabels: {
                            anchor: 'end', align: 'end', color: '#333',
                            font: { weight: 'bold', size: 9 },
                            formatter: v => (v && v > 0) ? Number(v).toLocaleString('es-MX') : ''
                        },
                        tooltip: { callbacks: { label: c => ' ' + Number(c.raw).toLocaleString('es-MX') + ' defunciones' } }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { font: { size: 10 } },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 9, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 45,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 4. Diabetes mellitus
        const ctx3 = document.getElementById('canvasSaludDiabetes');
        if (ctx3) {
            chartSaludDiabetes = new Chart(ctx3.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: [
                        '0 a 4', '5 a 9', '10 a 14', '15 a 19', '20 a 24', '25 a 29',
                        '30 a 34', '35 a 39', '40 a 44', '45 a 49', '50 a 54', '55 a 59',
                        '60 a 64', '65 a 69', '70 a 74', '75 a 79', '80 a 84', '85 y más', 'No especificado'
                    ],
                    datasets: [{
                        label: 'Defunciones por grupo quinquenal',
                        data: [0, 0, 0, 3, 3, 8, 10, 17, 59, 80, 170, 230, 291, 336, 359, 313, 294, 347, 1],
                        backgroundColor: [
                            '#60ced8', '#e67eb7', '#5aa348', '#e39d8a',
                            '#60ced8', '#e67eb7', '#5aa348', '#e39d8a',
                            '#60ced8', '#e67eb7', '#5aa348', '#e39d8a',
                            '#60ced8', '#e67eb7', '#5aa348', '#e39d8a',
                            '#60ced8', '#e67eb7', '#5aa348'
                        ],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.7
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        datalabels: {
                            anchor: 'end', align: 'end', color: '#333',
                            font: { weight: 'bold', size: 9 },
                            formatter: v => (v && v > 0) ? Number(v).toLocaleString('es-MX') : ''
                        },
                        tooltip: { callbacks: { label: c => ' ' + Number(c.raw).toLocaleString('es-MX') + ' defunciones' } }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { font: { size: 10 } },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 9, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 45,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 5. Defunciones maternas por todas las causas
        const ctx4 = document.getElementById('canvasSaludMaterna');
        if (ctx4) {
            const causasMaternasCompletas = [
                'Tumores malignos de los órganos genitourinarios',
                'Tumor maligno de la placenta',
                'Causas obstétricas directas',
                'Otro aborto',
                'Edema, proteinuria y trastornos hipertensivos en el embarazo, parto y puerperio',
                'Otra atención materna relacionada con el feto y con la cavidad amniótica',
                'Infección de las vías genitourinarias en el embarazo',
                'Diabetes mellitus en el embarazo',
                'Hemorragia postparto',
                'Otras complicaciones del embarazo y del parto',
                'Causas obstétricas directas, excepto aborto',
                'Muerte obstétrica de causa no especificada',
                'Causas obstétricas indirectas'
            ];

            const causasMaternasLabelsEje = [
                'Tumores genitourinarios ',
                'Tumor de la placenta ',
                'Causas obstétricas directas ',
                'Otro aborto ',
                'Trastornos hipertensivos',
                'Atención al feto',
                'Infección vías urinarias',
                'Diabetes en embarazo ',
                'Hemorragia postparto ',
                'Otras complicaciones parto ',
                'Causas directas no aborto ',
                'Causa no especificada ',
                'Causas indirectas '
            ];

            const causasMaternasValores = [2, 2, 24, 1, 3, 1, 1, 1, 6, 3, 7, 1, 6];
            chartSaludMaterna = new Chart(ctx4.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: causasMaternasLabelsEje,
                    datasets: [{
                        label: 'Defunciones maternas registradas',
                        data: causasMaternasValores,
                        backgroundColor: [
                            '#7b1fa2', '#ab47bc', '#c2185b', '#e91e63',
                            '#e53935', '#f57c00', '#fb8c00', '#ffa726',
                            '#d81b60', '#ad1457', '#8e24aa', '#78909c', '#00897b'
                        ],
                        hoverBackgroundColor: [
                            '#6a1b9a', '#9c27b0', '#ad1457', '#d81b60',
                            '#d32f2f', '#e65100', '#f57c00', '#ff9800',
                            '#c2185b', '#880e4f', '#7b1fa2', '#607d8b', '#00796b'
                        ],
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.72,
                        categoryPercentage: 0.85
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 9.5 },
                            formatter: function(val) {
                                return Number(val).toLocaleString('es-MX');
                            }
                        },
                        tooltip: {
                            callbacks: {
                                title: function(items) {
                                    const idx = items[0].dataIndex;
                                    return causasMaternasCompletas[idx] || items[0].label;
                                },
                                label: function(c) {
                                    return ' ' + c.raw + ' defunciones maternas';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            suggestedMax: 27,
                            title: {
                                display: true,
                                text: 'Número de defunciones maternas',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                stepSize: 2
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 8, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 45,
                                minRotation: 35
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 6. 10 Principales causas de defunción infantil
        const ctx5 = document.getElementById('canvasSaludInfantil');
        if (ctx5) {
            const infantilNombresCompletos = [
                ' Ciertas afecciones originadas en el período perinatal',
                ' Malformaciones congénitas, deformidades y anomalías cromosómicas',
                ' Otras enfermedades del aparato respiratorio',
                ' Enfermedades infecciosas intestinales',
                ' Otros accidentes, incluso los efectos tardíos',
                ' Enfermedades víricas',
                ' Síntomas, signos y hallazgos anormales clínicos y de laboratorio',
                'Otras enfermedades bacterianas',
                'Enfermedades endocrinas y metabólicas',
                'Enfermedades del sistema nervioso'
            ];

            const infantilLabelsEje = [
                'Afecciones período perinatal',
                'Malformaciones congénitas',
                'Otras del aparato respiratorio',
                'Infecciosas intestinales',
                'Otros accidentes y tardíos',
                'Enfermedades víricas',
                'Síntomas y signos anormales',
                'Otras enf. bacterianas',
                'Endocrinas y metabólicas',
                'Enf. del sistema nervioso'
            ];
            const infantilValores = [105, 53, 31, 10, 7, 5, 5, 4, 4, 3];
            chartSaludInfantil = new Chart(ctx5.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: infantilLabelsEje,
                    datasets: [{
                        label: 'Defunciones infantiles (Niñas)',
                        data: infantilValores,
                        backgroundColor: [
                            '#c2185b', '#8e24aa', '#00acc1', '#fb8c00', '#e53935',
                            '#3949ab', '#546e7a', '#43a047', '#7cb342', '#d81b60'
                        ],
                        hoverBackgroundColor: [
                            '#ad1457', '#7b1fa2', '#0097a7', '#f57c00', '#d32f2f',
                            '#303f9f', '#455a64', '#388e3c', '#689f38', '#c2185b'
                        ],
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.72,
                        categoryPercentage: 0.85
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 9.5 },
                            formatter: function(v) {
                                return Number(v).toLocaleString('es-MX');
                            }
                        },
                        tooltip: {
                            callbacks: {
                                title: function(items) {
                                    const idx = items[0].dataIndex;
                                    return infantilNombresCompletos[idx] || items[0].label;
                                },
                                label: function(c) {
                                    const pct = ['43.57%', '21.99%', '12.86%', '4.15%', '2.90%', '2.07%', '2.07%', '1.66%', '1.66%', '1.24%'];
                                    return ' ' + Number(c.raw).toLocaleString('es-MX') + ' defunciones de niñas ';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            suggestedMax: 118,
                            title: {
                                display: true,
                                text: 'Número de defunciones registradas ',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) {
                                    return Number(val).toLocaleString('es-MX');
                                }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 8.5, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 45,
                                minRotation: 35
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }
    }

    
    // RENDERIZADO DE LAS 5 GRÁFICAS DE EDUCACIÓN (INEGI )
    
    function renderizarEducacionINEGI() {
        if (chartEduAptitud) { chartEduAptitud.destroy(); chartEduAptitud = null; }
        if (chartEduAlfabetismo) { chartEduAlfabetismo.destroy(); chartEduAlfabetismo = null; }
        if (chartEduMatricula) { chartEduMatricula.destroy(); chartEduMatricula = null; }
        if (chartEduEscolaridad) { chartEduEscolaridad.destroy(); chartEduEscolaridad = null; }
        if (chartEduAsistencia) { chartEduAsistencia.destroy(); chartEduAsistencia = null; }

        // 1. Población de 6 a 14 años según aptitud para leer y escribir
        const ctx0 = document.getElementById('canvasEduAptitud');
        if (ctx0) {
            chartEduAptitud = new Chart(ctx0.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Sabe leer y escribir', 'No sabe leer y escribir', 'No especificado'],
                    datasets: [{
                        label: 'Valor porcentual (%)',
                        data: [89.19, 10.23, 0.58],
                        backgroundColor: ['#48b5c4', '#e67eb7', '#b0bec5'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + c.raw + '%';
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10.5 },
                            formatter: function(v) {
                                return v != null ? v + '%' : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val + '%'; }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 2. Población  alfabetismo
        const ctx1 = document.getElementById('canvasEduAlfabetismo');
        if (ctx1) {
            chartEduAlfabetismo = new Chart(ctx1.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Alfabeta', 'Analfabeta', 'No especificado'],
                    datasets: [{
                        label: 'Valor porcentual (%)',
                        data: [88.35, 11.32, 0.33],
                        backgroundColor: ['#5aa348', '#e65100', '#b0bec5'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + c.raw + '%';
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10.5 },
                            formatter: function(v) {
                                return v != null ? v + '%' : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val + '%'; }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 3. Matrícula escolar de mujeres según nivel educativo (SEP / INEGI)
        const ctx2 = document.getElementById('canvasEduMatricula');
        if (ctx2) {
            chartEduMatricula = new Chart(ctx2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Inicial', 'Preescolar', 'Primaria', 'Secundaria', 'Media superior', 'Superior'],
                    datasets: [{
                        label: 'Alumnas matriculadas',
                        data: [3938, 84019, 239800, 110641, 78735, 48973],
                        backgroundColor: ['#ecb0a0', '#60ced8', '#48b5c4', '#5aa348', '#f57c00', '#7b1fa2'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.65
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + Number(c.raw).toLocaleString('es-MX') ;
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 9.5 },
                            formatter: function(v) {
                                return v != null ? Number(v).toLocaleString('es-MX') : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de alumnas matriculadas',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return Number(val).toLocaleString('es-MX'); }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 9.5, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 4. Población de 15 años y más según nivel de escolaridad
        const ctx3 = document.getElementById('canvasEduEscolaridad');
        if (ctx3) {
            chartEduEscolaridad = new Chart(ctx3.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: [
                        'Sin escolaridad',
                        'Educación básica',
                        ['Media', 'superior'],
                        ['Educación', 'superior'],
                        'No especificado'
                    ],
                    datasets: [{
                        label: '',
                        data: [9.78, 52.72, 20.19, 16.98, 0.33],
                        backgroundColor: ['#e65100', '#48b5c4', '#5aa348', '#7b1fa2', '#b0bec5'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.6
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + c.raw + '%';
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10 },
                            formatter: function(v) {
                                return v != null ? v + '%' : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 60,
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val + '%'; }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 9.5, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 5. Población de 3 años y más según condición de asistencia escolar
        const ctx4 = document.getElementById('canvasEduAsistencia');
        if (ctx4) {
            chartEduAsistencia = new Chart(ctx4.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Asiste a la escuela', 'No asiste a la escuela', 'No especificado'],
                    datasets: [{
                        label: '',
                        data: [25.55, 74.13, 0.32],
                        backgroundColor: ['#60ced8', '#e67eb7', '#b0bec5'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + c.raw + '%';
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10.5 },
                            formatter: function(v) {
                                return v != null ? v + '%' : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 85,
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val + '%'; }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }
    }
    // RENDERIZADO DE LAS 2 GRÁFICAS DE VIVIENDA 
    
    function renderizarViviendaINEGI() {
        if (chartVivServicios) { chartVivServicios.destroy(); chartVivServicios = null; }
        if (chartVivPisos) { chartVivPisos.destroy(); chartVivPisos = null; }

        // 1. Viviendas según disponibilidad de servicios
        const ctx0 = document.getElementById('canvasVivServicios');
        if (ctx0) {
            chartVivServicios = new Chart(ctx0.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: [
                        'Energía eléctrica',
                        'Sanitario',
                        'Drenaje',
                        ['Agua entubada dentro', 'de la vivienda']
                    ],
                    datasets: [{
                        label: '',
                        data: [1093796, 1090470, 901346, 455703],
                        backgroundColor: ['#48b5c4', '#60ced8', '#5aa348', '#ecb0a0'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + Number(c.raw).toLocaleString('es-MX');
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10 },
                            formatter: function(v) {
                                return v != null ? Number(v).toLocaleString('es-MX') : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de viviendas particulares habitadas',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return Number(val).toLocaleString('es-MX'); }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 2. Viviendas según material en pisos
        const ctx1 = document.getElementById('canvasVivPisos');
        if (ctx1) {
            chartVivPisos = new Chart(ctx1.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: [
                        ['Material durable', '(cemento, madera, mosaico)'],
                        'Piso de tierra',
                        'No especificado'
                    ],
                    datasets: [{
                        label: '',
                        data: [969778, 149170, 2898],
                        backgroundColor: ['#5aa348', '#e65100', '#b0bec5'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + Number(c.raw).toLocaleString('es-MX');
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10 },
                            formatter: function(v) {
                                return v != null ? Number(v).toLocaleString('es-MX') : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Número de viviendas particulares habitadas',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return Number(val).toLocaleString('es-MX'); }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }
    }
    // DATOS DE TASA DE DESOCUPACIÓN EN OAXACA (ENOE/INEGI)
const desocupacionOaxaca = {
    labels: [
        '2023-I', '2023-II', '2023-III', '2023-IV',
        '2024-I', '2024-II', '2024-III', '2024-IV',
        '2025-I', '2025-II', '2025-III', '2025-IV',
        '2026-I', '2026-II'
    ],
    valores: [1.35, 1.22, 1.94, 1.54, 1.42, 1.20, 1.05, 1.87, 1.63, 1.08, 1.66, 1.32, 1.16, 0.80],
    anios: ['2023', '2023', '2023', '2023', '2024', '2024', '2024', '2024',
            '2025', '2025', '2025', '2025', '2026', '2026']
};

let chartDesocupacionOaxaca = null;

function renderizarDesocupacionOaxaca() {
    if (chartDesocupacionOaxaca) { chartDesocupacionOaxaca.destroy(); chartDesocupacionOaxaca = null; }

    const ctx = document.getElementById('canvasDesocupacionOaxaca');
    if (!ctx) return;

    // Colores por año para distinguir visualmente los trimestres
    const coloresPorAnio = {
        '2023': '#48b5c4',
        '2024': '#5aa348',
        '2025': '#f57c00',
        '2026': '#7b1fa2'
    };
    const colores = desocupacionOaxaca.anios.map(a => coloresPorAnio[a]);

    chartDesocupacionOaxaca = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: desocupacionOaxaca.labels,
            datasets: [{
                label: 'Tasa de desocupación (%)',
                data: desocupacionOaxaca.valores,
                borderColor: '#c2185b',
                backgroundColor: 'rgba(194, 24, 91, 0.10)',
                borderWidth: 2.5,
                tension: 0.35,
                fill: true,
                pointBackgroundColor: colores,
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 22, bottom: 5, left: 5, right: 10 } },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: items => 'Trimestre ' + items[0].label,
                        label: c => ' Tasa de desocupación: ' + Number(c.raw).toFixed(2) + '%'
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    offset: 4,
                    color: '#4a154b',
                    font: { weight: 'bold', size: 9.5 },
                    formatter: v => v != null ? v.toFixed(2) + '%' : ''
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 2.2,
                    title: {
                        display: true,
                        text: 'Tasa de desocupación (%)',
                        color: '#666',
                        font: { size: 10.5, weight: '500' }
                    },
                    ticks: {
                        font: { size: 10 },
                        callback: v => v + '%'
                    },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                },
                x: {
                    ticks: {
                        font: { size: 9, weight: 'bold' },
                        color: '#4a154b',
                        autoSkip: false,
                        maxRotation: 45,
                        minRotation: 35
                    },
                    grid: { display: false }
                }
            }
        }
    });
}

    // 4. INGRESO CORRIENTE PROMEDIO TRIMESTRAL SEGÚN RUBROS (DATOS REALES INEGI ENIGH OAXACA)
    function renderizarIngresoINEGI() {
        if (typeof Chart === 'undefined') return;

        if (chartIngresoRubros) {
            chartIngresoRubros.destroy();
            chartIngresoRubros = null;
        }

        const ctx = document.getElementById('canvasIngresoRubros');
        if (ctx) {
            chartIngresoRubros = new Chart(ctx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: [
                        ['Ingreso', 'del trabajo'],
                        ['Renta de la', 'propiedad'],
                        'Transferencias',
                        ['Estimación alquiler', 'de la vivienda'],
                        ['Otros ingresos', 'corrientes']
                    ],
                    datasets: [{
                        label: 'Ingreso promedio trimestral ($ MXN)',
                        data: [32613, 1992, 11587, 5811, 22],
                        backgroundColor: [
                            '#2e7d32',
                            '#0288d1',
                            '#7b1fa2',
                            '#f57c00',
                            '#78909c'
                        ],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 25, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10 },
                            formatter: function(v) {
                                return v != null ? '$' + Number(v).toLocaleString('es-MX') : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Pesos mexicanos ($ MXN)',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return '$' + Number(val).toLocaleString('es-MX'); }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 2. TASA DE DESOCUPACIÓN TOTAL TRIMESTRAL SEGÚN ENTIDAD FEDERATIVA (ENOE OAXACA 2023-2026)
        if (chartIngresoDesocupacion) {
            chartIngresoDesocupacion.destroy();
            chartIngresoDesocupacion = null;
        }

        const ctx2 = document.getElementById('canvasIngresoDesocupacion');
        if (ctx2) {
 chartIngresoDesocupacion = new Chart(ctx2.getContext('2d'), {
type: 'bar',
 data: {labels: [['2023', 'I'],['2023', 'II'],['2023', 'III'],['2023', 'IV'],['2024', 'I'],['2024', 'II'],
['2024', 'III'],['2024', 'IV'],['2025', 'I'],['2025', 'II'],['2025', 'III'],['2025', 'IV'],['2026', 'I'],
['2026', 'II']],
                    datasets: [{
                        label: 'Tasa de desocupación (%)',
                        data: [1.35, 1.22, 1.94, 1.54, 1.42, 1.20, 1.05, 1.87, 1.63, 1.08, 1.66, 1.32, 1.16, 0.80],
                        backgroundColor: [
                            '#95d5b2', '#95d5b2', '#95d5b2', '#95d5b2', // 2023 (verde menta pastel)
                            '#90e0ef', '#90e0ef', '#90e0ef', '#90e0ef', // 2024 (azul cielo pastel)
                            '#d8b4e2', '#d8b4e2', '#d8b4e2', '#d8b4e2', // 2025 (lila / morado pastel)
                            '#ffb4a2', '#ffb4a2'                         // 2026 (melocotón / naranja pastel)
                        ],
                        borderRadius: 6,
                        borderWidth: 1.5,
                        borderColor: '#ffffff',
                        barPercentage: 0.65
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 25, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                title: function(items) {
                                    const l = items[0].label;
                                    return Array.isArray(l) ? ('Año ' + l[0] + ' · Trimestre ' + l[1]) : l;
                                },
                                label: function(c) {
                                    return ' Tasa de desocupación: ' + Number(c.raw).toFixed(2) + '% de la PEA';
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 9 },
                            formatter: function(v) {
                                return v != null ? Number(v).toFixed(2) + '%' : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            suggestedMax: 2.3,
                            title: {
                                display: true,
                                text: 'Tasa de desocupación (% de la PEA)',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val + '%'; }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 8.5, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }
    }

    // RENDERIZADO DE LAS 2 GRÁFICAS DE LENGUAS INDÍGENAS (INEGI)
    function renderizarLenguasINEGI() {
        if (chartLenguasMonolingues) { chartLenguasMonolingues.destroy(); chartLenguasMonolingues = null; }
        if (chartLenguasCondicion) { chartLenguasCondicion.destroy(); chartLenguasCondicion = null; }

        // 1. Población de 3 años y más hablante de lengua indígena que no habla español (Censos 2010 y 2020)
        const ctx0 = document.getElementById('canvasLenguasMonolingues');
        if (ctx0) {
            chartLenguasMonolingues = new Chart(ctx0.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['2010', '2020'],
                    datasets: [{
                        label: '',
                        data: [128050, 87809],
                        backgroundColor: ['#7b1fa2', '#ab47bc'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.45
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + Number(c.raw).toLocaleString('es-MX');
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10.5 },
                            formatter: function(v) {
                                return v != null ? Number(v).toLocaleString('es-MX') : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return Number(val).toLocaleString('es-MX'); }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 11, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }

        // 2. Población de 3 años y más según condición de habla indígena (Intercensal 2025)
        const ctx1 = document.getElementById('canvasLenguasCondicion');
        if (ctx1) {
            chartLenguasCondicion = new Chart(ctx1.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Habla lengua indígena', 'No habla lengua indígena', 'No especificado'],
                    datasets: [{
                        label: 'Valor porcentual (%)',
                        data: [29.39, 70.29, 0.32],
                        backgroundColor: ['#00897b', '#48b5c4', '#b0bec5'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 22, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + c.raw + '%';
                                }
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            offset: 2,
                            color: '#333',
                            font: { weight: 'bold', size: 10 },
                            formatter: function(v) {
                                return v != null ? v + '%' : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 85,
                            title: {
                                display: true,
                                text: 'Valor porcentual (%)',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val + '%'; }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10, weight: 'bold' },
                                color: '#4a154b',
                                autoSkip: false,
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }
    }

    // ABRIR MODAL TEMÁTICO
    function abrirModalTematico(nombreTema) {
        const data = datosTematicos[nombreTema];
        if (!data) { console.warn("No hay configuración: " + nombreTema); return; }

        const elTitulo = document.getElementById("modalTematicoLabel");
        const elSub = document.getElementById("modalTematicoSubtitulo");
        const elBadge = document.getElementById("modalTematicoBadge");
        const elIcono = document.getElementById("modalTematicoIcono");
        const elFuenteCorta = document.getElementById("modalTematicoFuenteCorta");
        const elPieFuente = document.getElementById("modalTematicoPieFuente");
        const footerTematico = document.getElementById("modalTematicoFooter");

        if (elTitulo) elTitulo.innerText = data.titulo || "";
        if (elSub) elSub.innerText = data.subtitulo || "";
        if (elBadge) elBadge.innerText = data.badge || "";
        if (elIcono) {
            elIcono.className = "fa-solid " + (data.icono || "fa-chart-pie");
            elIcono.style.color = data.iconoColor || "#c2185b";
        }
        if (elFuenteCorta) elFuenteCorta.innerText = data.fuenteCorta || "";
        if (elPieFuente) elPieFuente.innerHTML = data.pieFuente ? ('<i class="fa-solid fa-landmark text-secondary me-1"></i> ' + data.pieFuente) : "";

        const layoutSalud = document.getElementById("layoutTematicoSalud");
        const layoutEducacion = document.getElementById("layoutTematicoEducacion");
        const layoutVivienda = document.getElementById("layoutTematicoVivienda");
        const layoutIngreso = document.getElementById("layoutTematicoIngreso");
        const layoutLenguas = document.getElementById("layoutTematicoLenguas");
        const layoutStd = document.getElementById("layoutTematicoEstandar");

        if (layoutSalud) layoutSalud.classList.add("d-none");
        if (layoutEducacion) layoutEducacion.classList.add("d-none");
        if (layoutVivienda) layoutVivienda.classList.add("d-none");
        if (layoutIngreso) layoutIngreso.classList.add("d-none");
        if (layoutLenguas) layoutLenguas.classList.add("d-none");
        if (layoutStd) layoutStd.classList.add("d-none");

        const esDimensionCISGES = ['atendidas', 'psicologia', 'juicios', 'feminicidios', 'talleres', 'proyectos'].indexOf(nombreTema) !== -1;

        if (nombreTema === 'salud') {
            if (layoutSalud) {
                layoutSalud.classList.remove("d-none");
                renderizarSaludINEGI();
            }
        } else if (nombreTema === 'educacion') {
            if (layoutEducacion) {
                layoutEducacion.classList.remove("d-none");
                renderizarEducacionINEGI();
            }
        } else if (nombreTema === 'vivienda') {
            if (layoutVivienda) {
                layoutVivienda.classList.remove("d-none");
                renderizarViviendaINEGI();
            }
        } else if (nombreTema === 'ingreso') {
            if (layoutIngreso) {
                layoutIngreso.classList.remove("d-none");
                renderizarIngresoINEGI();
            }
        } else if (nombreTema === 'lenguas') {
            if (layoutLenguas) {
                layoutLenguas.classList.remove("d-none");
                renderizarLenguasINEGI();
            }
        } else if (esDimensionCISGES) {
            if (layoutStd) {
                layoutStd.classList.remove("d-none");
                renderizarModalTematico(nombreTema, data);
            }
        }

        if (footerTematico) {
            if (esDimensionCISGES) {
                footerTematico.classList.remove("modal-footer-salud-limpio");
            } else {
                footerTematico.classList.add("modal-footer-salud-limpio");
            }
        }

        const modalEl = document.getElementById("modalTematico");
        if (!modalEl) return;
        if (!modalTematicoBootstrap && typeof bootstrap !== 'undefined') {
            modalTematicoBootstrap = new bootstrap.Modal(modalEl);
        }
        if (modalTematicoBootstrap) modalTematicoBootstrap.show();
    }

    // MOSTRAR TEMA
    function mostrarTema(nombreTema, elemento) {
        if (typeof window.temaActual !== 'undefined') window.temaActual = nombreTema;
        try {
            sessionStorage.setItem('plataforma_vista_activa', JSON.stringify({ tipo: 'tema', id: nombreTema }));
            history.replaceState(null, document.title, '#tema-' + nombreTema);
        } catch(e) {}
        document.querySelectorAll(".tema-card").forEach(card => {
            card.classList.remove("active");
            card.blur();
        });
        if (elemento) {
            elemento.classList.add("active");
            if (timerTarjetaActiva) clearTimeout(timerTarjetaActiva);
            timerTarjetaActiva = setTimeout(function() {
                if (elemento) { elemento.classList.remove("active"); elemento.blur(); }
            }, 1600);
        }
        if (datosTematicos[nombreTema]) {
            abrirModalTematico(nombreTema);
        } else {
            console.warn("La dimensión '" + nombreTema + "' no tiene configuración todavía.");
        }
    }

    window.datosTematicos = datosTematicos;
    window.abrirModalTematico = abrirModalTematico;
    window.mostrarTema = mostrarTema;
})(window);