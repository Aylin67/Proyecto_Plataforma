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
        },
        // VIOLENCIA CONTRA LAS MUJERES (ENDIREH)
        violencia: {
            titulo: "DIMENSIÓN DE VIOLENCIA CONTRA LAS MUJERES",
            subtitulo: "Prevalencia de violencia contra las mujeres en el ámbito familiar (ENDIREH)",
            icono: "fa-shield-heart",
            iconoColor: "#c2185b",
            badge: "INEGI · ENDIREH 2006, 2016 y 2021",
            fuenteCorta: "INEGI / ENDIREH",
            pieFuente: "INEGI · Encuesta Nacional sobre la Dinámica de las Relaciones en los Hogares, 2006, 2016 y 2021",
            kpiTotal: { label: "Violencia Total en la Familia (2021)", valor: "12.0" }
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
    let chartIngresoOcupacion = null;
    let chartLenguasMonolingues = null;
    let chartLenguasCondicion = null;
    let chartLenguasAutoadscripcion = null;
    let chartLenguasComprension = null;
    let chartViolenciaFamiliar = null;
    let chartViolenciaOcupacion = null;
    let chartViolenciaDefunciones = null;
    let chartViolenciaInfancia = null;
    let chartViolenciaVida = null;

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
                                callback: function(val) { return val; }
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
                                callback: function(val) { return val; }
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

        // 3. POSICIÓN EN LA OCUPACIÓN DE LAS MUJERES TRABAJADORAS EN OAXACA (2006-2021)
        if (chartIngresoOcupacion) {
            chartIngresoOcupacion.destroy();
            chartIngresoOcupacion = null;
        }

        const ctxIngOcup = document.getElementById('canvasIngresoOcupacion');
        if (ctxIngOcup) {
            try {
                if (typeof Chart !== 'undefined' && typeof Chart.getChart === 'function') {
                    const existing = Chart.getChart(ctxIngOcup);
                    if (existing) existing.destroy();
                }

                let savedVio = {};
                try {
                    const rawVio = localStorage.getItem('gesmujer_violencia_datos');
                    if (rawVio) savedVio = JSON.parse(rawVio);
                } catch(e) {}

                const as2006 = savedVio['violencia_asalariada_2006'] !== undefined ? Number(savedVio['violencia_asalariada_2006']) : 39.9;
                const as2011 = savedVio['violencia_asalariada_2011'] !== undefined ? Number(savedVio['violencia_asalariada_2011']) : 50.5;
                const as2016 = savedVio['violencia_asalariada_2016'] !== undefined ? Number(savedVio['violencia_asalariada_2016']) : 60.9;
                const as2021 = savedVio['violencia_asalariada_2021'] !== undefined ? Number(savedVio['violencia_asalariada_2021']) : 50.8;

                const inf2006 = savedVio['violencia_informal_2006'] !== undefined ? Number(savedVio['violencia_informal_2006']) : 60.1;
                const inf2011 = savedVio['violencia_informal_2011'] !== undefined ? Number(savedVio['violencia_informal_2011']) : 49.3;
                const inf2016 = savedVio['violencia_informal_2016'] !== undefined ? Number(savedVio['violencia_informal_2016']) : 39.1;
                const inf2021 = savedVio['violencia_informal_2021'] !== undefined ? Number(savedVio['violencia_informal_2021']) : 49.2;

                const kpiIngOcup = document.getElementById('kpiIngresoOcupacion');
                if (kpiIngOcup) kpiIngOcup.textContent = as2021.toFixed(1) + '%';

                chartIngresoOcupacion = new Chart(ctxIngOcup.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['2006', '2011', '2016', '2021'],
                        datasets: [
                            {
                                label: 'Empleada, obrera o jornalera (Asalariada)',
                                data: [as2006, as2011, as2016, as2021],
                                backgroundColor: '#2e7d32',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#ffffff',
                                minBarLength: 12,
                                barPercentage: 0.65,
                                categoryPercentage: 0.75
                            },
                            {
                                label: 'Por cuenta propia, patrona o trabajó sin pago (Informal)',
                                data: [inf2006, inf2011, inf2016, inf2021],
                                backgroundColor: '#00897b',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#ffffff',
                                minBarLength: 12,
                                barPercentage: 0.65,
                                categoryPercentage: 0.75
                            }
                        ]
                    },
                    options: {
                        animation: false,
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: { top: 28, bottom: 5, left: 5, right: 10 }
                        },
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                                labels: {
                                    font: { size: 11, weight: 'bold' },
                                    boxWidth: 12,
                                    padding: 12
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(c) {
                                        return ' ' + c.dataset.label + ': ' + Number(c.raw).toFixed(1) + '%';
                                    }
                                }
                            },
                            datalabels: {
                                display: true,
                                anchor: 'end',
                                align: 'top',
                                offset: 3,
                                color: '#263238',
                                font: { weight: 'bold', size: 10 },
                                formatter: function(v) {
                                    return v != null ? Number(v).toFixed(1) + '%' : '';
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 75,
                                title: {
                                    display: true,
                                    text: 'Porcentaje (%)',
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
            } catch (err) {
                console.error('Error al inicializar gráfica de Ocupación en Ingreso:', err);
            }
        }
    }

    // RENDERIZADO DE LAS 4 GRÁFICAS DE LENGUAS INDÍGENAS (INEGI)
    function renderizarLenguasINEGI() {
        if (chartLenguasMonolingues) { chartLenguasMonolingues.destroy(); chartLenguasMonolingues = null; }
        if (chartLenguasCondicion) { chartLenguasCondicion.destroy(); chartLenguasCondicion = null; }
        if (chartLenguasAutoadscripcion) { chartLenguasAutoadscripcion.destroy(); chartLenguasAutoadscripcion = null; }
        if (chartLenguasComprension) { chartLenguasComprension.destroy(); chartLenguasComprension = null; }

        let saved = {};
        try {
            const raw = localStorage.getItem('gesmujer_lenguas_datos');
            if (raw) saved = JSON.parse(raw);
        } catch(e) {}

        // 1. Población de 3 años y más hablante de lengua indígena que no habla español (Censos 2010 y 2020)
        const ctx0 = document.getElementById('canvasLenguasMonolingues');
        if (ctx0) {
            const v2010 = saved['lenguas_monolingues_2010'] !== undefined ? Number(saved['lenguas_monolingues_2010']) : 128050;
            const v2020 = saved['lenguas_monolingues_2020'] !== undefined ? Number(saved['lenguas_monolingues_2020']) : 87809;

            chartLenguasMonolingues = new Chart(ctx0.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['2010', '2020'],
                    datasets: [{
                        label: '',
                        data: [v2010, v2020],
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
            const condSi = saved['lenguas_cond_si'] !== undefined ? Number(saved['lenguas_cond_si']) : 29.39;
            const condNo = saved['lenguas_cond_no'] !== undefined ? Number(saved['lenguas_cond_no']) : 70.29;
            const condNoesp = saved['lenguas_cond_noesp'] !== undefined ? Number(saved['lenguas_cond_noesp']) : 0.32;

            chartLenguasCondicion = new Chart(ctx1.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Habla lengua indígena', 'No habla lengua indígena', 'No especificado'],
                    datasets: [{
                        label: 'Valor porcentual (%)',
                        data: [condSi, condNo, condNoesp],
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

        // 3. Autoadscripción indígena en mujeres según condición de habla (Censo 2020 - Etnicidad 2)
        const ctx2 = document.getElementById('canvasLenguasAutoadscripcion');
        if (ctx2) {
            const autoHablaSi = saved['lenguas_auto_habla_si'] !== undefined ? Number(saved['lenguas_auto_habla_si']) : 97.76;
            const autoHablaNo = saved['lenguas_auto_habla_no'] !== undefined ? Number(saved['lenguas_auto_habla_no']) : 2.13;
            const autoHablaNoesp = saved['lenguas_auto_habla_noesp'] !== undefined ? Number(saved['lenguas_auto_habla_noesp']) : 0.11;

            const autoNoHablaSi = saved['lenguas_auto_nohabla_si'] !== undefined ? Number(saved['lenguas_auto_nohabla_si']) : 56.52;
            const autoNoHablaNo = saved['lenguas_auto_nohabla_no'] !== undefined ? Number(saved['lenguas_auto_nohabla_no']) : 43.17;
            const autoNoHablaNoesp = saved['lenguas_auto_nohabla_noesp'] !== undefined ? Number(saved['lenguas_auto_nohabla_noesp']) : 0.32;

            const autoNoespSi = saved['lenguas_auto_noesp_si'] !== undefined ? Number(saved['lenguas_auto_noesp_si']) : 4.72;
            const autoNoespNo = saved['lenguas_auto_noesp_no'] !== undefined ? Number(saved['lenguas_auto_noesp_no']) : 8.04;
            const autoNoespNoesp = saved['lenguas_auto_noesp_noesp'] !== undefined ? Number(saved['lenguas_auto_noesp_noesp']) : 87.24;

            const kpiAutoTotal = document.getElementById('kpiLenguasAutoTotal');
            if (kpiAutoTotal) kpiAutoTotal.textContent = autoHablaSi.toFixed(2);

            chartLenguasAutoadscripcion = new Chart(ctx2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Habla lengua indígena', 'No habla lengua indígena', 'No especificado'],
                    datasets: [
                        {
                            label: 'Se considera indígena',
                            data: [autoHablaSi, autoNoHablaSi, autoNoespSi],
                            backgroundColor: '#7b1fa2',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            minBarLength: 14,
                            barPercentage: 0.72,
                            categoryPercentage: 0.82
                        },
                        {
                            label: 'No se considera indígena',
                            data: [autoHablaNo, autoNoHablaNo, autoNoespNo],
                            backgroundColor: '#00897b',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            minBarLength: 14,
                            barPercentage: 0.72,
                            categoryPercentage: 0.82
                        },
                        {
                            label: 'No especificado',
                            data: [autoHablaNoesp, autoNoHablaNoesp, autoNoespNoesp],
                            backgroundColor: '#546e7a',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            minBarLength: 14,
                            barPercentage: 0.72,
                            categoryPercentage: 0.82
                        }
                    ]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 28, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                font: { size: 11, weight: 'bold' },
                                boxWidth: 12,
                                padding: 12
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + c.dataset.label + ': ' + Number(c.raw).toFixed(2);
                                }
                            }
                        },
                        datalabels: {
                            display: true,
                            anchor: 'end',
                            align: 'top',
                            offset: 3,
                            color: '#263238',
                            font: { weight: 'bold', size: 10 },
                            formatter: function(v) {
                                return v != null ? Number(v).toFixed(2) : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 112,
                            title: {
                                display: true,
                                text: 'Valor',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val; }
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

        // 4. Condición de comprensión de lengua indígena en mujeres no hablantes (Censo 2020 - Etnicidad 4)
        const ctx3 = document.getElementById('canvasLenguasComprension');
        if (ctx3) {
            const compEntiende = saved['lenguas_comp_entiende'] !== undefined ? Number(saved['lenguas_comp_entiende']) : 9.76;
            const compNoentiende = saved['lenguas_comp_noentiende'] !== undefined ? Number(saved['lenguas_comp_noentiende']) : 89.79;
            const compNoesp = saved['lenguas_comp_noesp'] !== undefined ? Number(saved['lenguas_comp_noesp']) : 0.45;

            const kpiCompTotal = document.getElementById('kpiLenguasCompTotal');
            if (kpiCompTotal) kpiCompTotal.textContent = compEntiende.toFixed(2);

            chartLenguasComprension = new Chart(ctx3.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Entiende lengua indígena', 'No entiende lengua indígena', 'No especificado'],
                    datasets: [{
                        label: 'Valor',
                        data: [compEntiende, compNoentiende, compNoesp],
                        backgroundColor: ['#00897b', '#7b1fa2', '#546e7a'],
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        minBarLength: 14,
                        barPercentage: 0.55
                    }]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 28, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + Number(c.raw).toFixed(2);
                                }
                            }
                        },
                        datalabels: {
                            display: true,
                            anchor: 'end',
                            align: 'top',
                            offset: 3,
                            color: '#263238',
                            font: { weight: 'bold', size: 10 },
                            formatter: function(v) {
                                return v != null ? Number(v).toFixed(2) : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 105,
                            title: {
                                display: true,
                                text: 'Valor',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val; }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10.5, weight: 'bold' },
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
        }    }


    // ABRIR MODAL TEMÁTICO
    
    // RENDERIZADO DE LAS GRÁFICAS DE VIOLENCIA (INEGI ENDIREH)
    function renderizarViolenciaINEGI() {
        if (chartViolenciaFamiliar) { chartViolenciaFamiliar.destroy(); chartViolenciaFamiliar = null; }

        let saved = {};
        try {
            const raw = localStorage.getItem('gesmujer_violencia_datos');
            if (raw) saved = JSON.parse(raw);
        } catch(e) {}

        const ctx0 = document.getElementById('canvasViolenciaFamiliar');
        if (ctx0) {
            const p2006 = saved['violencia_psico_2006'] !== undefined ? Number(saved['violencia_psico_2006']) : 15.8;
            const p2016 = saved['violencia_psico_2016'] !== undefined ? Number(saved['violencia_psico_2016']) : 8.7;
            const p2021 = saved['violencia_psico_2021'] !== undefined ? Number(saved['violencia_psico_2021']) : 9.8;

            const e2006 = saved['violencia_econ_2006'] !== undefined ? Number(saved['violencia_econ_2006']) : 0.8;
            const e2016 = saved['violencia_econ_2016'] !== undefined ? Number(saved['violencia_econ_2016']) : 4.1;
            const e2021 = saved['violencia_econ_2021'] !== undefined ? Number(saved['violencia_econ_2021']) : 2.8;

            const f2006 = saved['violencia_fisica_2006'] !== undefined ? Number(saved['violencia_fisica_2006']) : 2.7;
            const f2016 = saved['violencia_fisica_2016'] !== undefined ? Number(saved['violencia_fisica_2016']) : 2.9;
            const f2021 = saved['violencia_fisica_2021'] !== undefined ? Number(saved['violencia_fisica_2021']) : 2.7;

            const t2006 = saved['violencia_total_2006'] !== undefined ? Number(saved['violencia_total_2006']) : 16.3;
            const t2016 = saved['violencia_total_2016'] !== undefined ? Number(saved['violencia_total_2016']) : 11.3;
            const t2021 = saved['violencia_total_2021'] !== undefined ? Number(saved['violencia_total_2021']) : 12.0;

            const kpiTot = document.getElementById('kpiViolenciaTotal');
            if (kpiTot) kpiTot.textContent = t2021.toFixed(1);

            chartViolenciaFamiliar = new Chart(ctx0.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Violencia Psicológica', 'Violencia Económica / Patrimonial', 'Violencia Física', 'Violencia Total en la Familia'],
                    datasets: [
                        {
                            label: 'Año 2006',
                            data: [p2006, e2006, f2006, t2006],
                            backgroundColor: '#c2185b',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            minBarLength: 12,
                            barPercentage: 0.72,
                            categoryPercentage: 0.82
                        },
                        {
                            label: 'Año 2016',
                            data: [p2016, e2016, f2016, t2016],
                            backgroundColor: '#7b1fa2',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            minBarLength: 12,
                            barPercentage: 0.72,
                            categoryPercentage: 0.82
                        },
                        {
                            label: 'Año 2021',
                            data: [p2021, e2021, f2021, t2021],
                            backgroundColor: '#00897b',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            minBarLength: 12,
                            barPercentage: 0.72,
                            categoryPercentage: 0.82
                        }
                    ]
                },
                options: {
                    animation: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: { top: 28, bottom: 5, left: 5, right: 10 }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                font: { size: 11, weight: 'bold' },
                                boxWidth: 12,
                                padding: 12
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(c) {
                                    return ' ' + c.dataset.label + ': ' + Number(c.raw).toFixed(1);
                                }
                            }
                        },
                        datalabels: {
                            display: true,
                            anchor: 'end',
                            align: 'top',
                            offset: 3,
                            color: '#263238',
                            font: { weight: 'bold', size: 10 },
                            formatter: function(v) {
                                return v != null ? Number(v).toFixed(1) : '';
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 20,
                            title: {
                                display: true,
                                text: 'Prevalencia',
                                color: '#666',
                                font: { size: 10.5, weight: '500' }
                            },
                            ticks: {
                                font: { size: 10 },
                                callback: function(val) { return val; }
                            },
                            grid: { color: 'rgba(0,0,0,0.05)' }
                        },
                        x: {
                            ticks: {
                                font: { size: 10.5, weight: 'bold' },
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
        // 2. DEFUNCIONES POR CAUSAS EXTERNAS EN MUJERES (SSA/INEGI EDR 1990-2024)
        if (chartViolenciaDefunciones) { chartViolenciaDefunciones.destroy(); chartViolenciaDefunciones = null; }

        const ctxDef = document.getElementById('canvasViolenciaDefunciones');
        if (ctxDef) {
            try {
                if (typeof Chart !== 'undefined' && typeof Chart.getChart === 'function') {
                    const exDef = Chart.getChart(ctxDef);
                    if (exDef) exDef.destroy();
                }

                const s2022 = saved['violencia_suicidio_2022'] !== undefined ? Number(saved['violencia_suicidio_2022']) : 32;
                const s2023 = saved['violencia_suicidio_2023'] !== undefined ? Number(saved['violencia_suicidio_2023']) : 42;
                const s2024 = saved['violencia_suicidio_2024'] !== undefined ? Number(saved['violencia_suicidio_2024']) : 33;

                const h2022 = saved['violencia_homicidio_2022'] !== undefined ? Number(saved['violencia_homicidio_2022']) : 123;
                const h2023 = saved['violencia_homicidio_2023'] !== undefined ? Number(saved['violencia_homicidio_2023']) : 95;
                const h2024 = saved['violencia_homicidio_2024'] !== undefined ? Number(saved['violencia_homicidio_2024']) : 93;

                const a2022 = saved['violencia_accidentes_2022'] !== undefined ? Number(saved['violencia_accidentes_2022']) : 414;
                const a2023 = saved['violencia_accidentes_2023'] !== undefined ? Number(saved['violencia_accidentes_2023']) : 461;
                const a2024 = saved['violencia_accidentes_2024'] !== undefined ? Number(saved['violencia_accidentes_2024']) : 443;

                const kpiDef = document.getElementById('kpiViolenciaHomicidios');
                if (kpiDef) kpiDef.textContent = h2024.toLocaleString('es-MX');

                chartViolenciaDefunciones = new Chart(ctxDef.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['Defunciones por Suicidio', 'Defunciones por Homicidio', 'Defunciones por Causas Accidentales'],
                        datasets: [
                            {
                                label: 'Año 2022',
                                data: [s2022, h2022, a2022],
                                backgroundColor: '#c2185b',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#ffffff',
                                minBarLength: 12,
                                barPercentage: 0.72,
                                categoryPercentage: 0.82
                            },
                            {
                                label: 'Año 2023',
                                data: [s2023, h2023, a2023],
                                backgroundColor: '#7b1fa2',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#ffffff',
                                minBarLength: 12,
                                barPercentage: 0.72,
                                categoryPercentage: 0.82
                            },
                            {
                                label: 'Año 2024',
                                data: [s2024, h2024, a2024],
                                backgroundColor: '#00897b',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#ffffff',
                                minBarLength: 12,
                                barPercentage: 0.72,
                                categoryPercentage: 0.82
                            }
                        ]
                    },
                    options: {
                        animation: false,
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: { top: 28, bottom: 5, left: 5, right: 10 }
                        },
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                                labels: {
                                    font: { size: 11, weight: 'bold' },
                                    boxWidth: 12,
                                    padding: 12
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(c) {
                                        return ' ' + c.dataset.label + ': ' + Number(c.raw).toLocaleString('es-MX');
                                    }
                                }
                            },
                            datalabels: {
                                display: true,
                                anchor: 'end',
                                align: 'top',
                                offset: 3,
                                color: '#263238',
                                font: { weight: 'bold', size: 10 },
                                formatter: function(v) {
                                    return v != null ? Number(v).toLocaleString('es-MX') : '';
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 520,
                                title: {
                                    display: true,
                                    text: 'Número de defunciones',
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
                                    font: { size: 10.5, weight: 'bold' },
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
            } catch (err) {
                console.error('Error al renderizar canvasViolenciaDefunciones:', err);
            }
        }

        // 4. PREVALENCIA DE VIOLENCIA DURANTE LA INFANCIA (ENDIREH 2016 Y 2021)
        if (chartViolenciaInfancia) { chartViolenciaInfancia.destroy(); chartViolenciaInfancia = null; }

        const ctxInf = document.getElementById('canvasViolenciaInfancia');
        if (ctxInf) {
            try {
                if (typeof Chart !== 'undefined' && typeof Chart.getChart === 'function') {
                    const exInf = Chart.getChart(ctxInf);
                    if (exInf) exInf.destroy();
                }

                const tot2016 = saved['violencia_infancia_total_2016'] !== undefined ? Number(saved['violencia_infancia_total_2016']) : 44.9;
                const tot2021 = saved['violencia_infancia_total_2021'] !== undefined ? Number(saved['violencia_infancia_total_2021']) : 46.1;

                const psi2016 = saved['violencia_infancia_psico_2016'] !== undefined ? Number(saved['violencia_infancia_psico_2016']) : 24.2;
                const psi2021 = saved['violencia_infancia_psico_2021'] !== undefined ? Number(saved['violencia_infancia_psico_2021']) : 24.4;

                const fis2016 = saved['violencia_infancia_fisica_2016'] !== undefined ? Number(saved['violencia_infancia_fisica_2016']) : 38.5;
                const fis2021 = saved['violencia_infancia_fisica_2021'] !== undefined ? Number(saved['violencia_infancia_fisica_2021']) : 38.9;

                const sex2016 = saved['violencia_infancia_sexual_2016'] !== undefined ? Number(saved['violencia_infancia_sexual_2016']) : 7.3;
                const sex2021 = saved['violencia_infancia_sexual_2021'] !== undefined ? Number(saved['violencia_infancia_sexual_2021']) : 9.8;

                const kpiInf = document.getElementById('kpiViolenciaInfancia');
                if (kpiInf) kpiInf.textContent = tot2021.toFixed(1) + '%';

                chartViolenciaInfancia = new Chart(ctxInf.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['Violencia Psicológica', 'Violencia Física', 'Violencia Sexual', 'Prevalencia Total en la Infancia'],
                        datasets: [
                            {
                                label: 'Año 2016',
                                data: [psi2016, fis2016, sex2016, tot2016],
                                backgroundColor: '#7b1fa2',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#ffffff',
                                minBarLength: 12,
                                barPercentage: 0.72,
                                categoryPercentage: 0.82
                            },
                            {
                                label: 'Año 2021',
                                data: [psi2021, fis2021, sex2021, tot2021],
                                backgroundColor: '#00897b',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: '#ffffff',
                                minBarLength: 12,
                                barPercentage: 0.72,
                                categoryPercentage: 0.82
                            }
                        ]
                    },
                    options: {
                        animation: false,
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: { top: 28, bottom: 5, left: 5, right: 10 }
                        },
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                                labels: {
                                    font: { size: 11, weight: 'bold' },
                                    boxWidth: 12,
                                    padding: 12
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(c) {
                                        return ' ' + c.dataset.label + ': ' + Number(c.raw).toFixed(1) + '%';
                                    }
                                }
                            },
                            datalabels: {
                                display: true,
                                anchor: 'end',
                                align: 'top',
                                offset: 3,
                                color: '#263238',
                                font: { weight: 'bold', size: 10 },
                                formatter: function(v) {
                                    return v != null ? Number(v).toFixed(1) + '%' : '';
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 60,
                                title: {
                                    display: true,
                                    text: 'Porcentaje (%)',
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
                                    font: { size: 10.5, weight: 'bold' },
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
            } catch (err) {
                console.error('Error al renderizar canvasViolenciaInfancia:', err);
            }
        }

        // 5. PREVALENCIA TOTAL DE VIOLENCIA A LO LARGO DE LA VIDA (ENDIREH 2006-2021)
        if (chartViolenciaVida) { chartViolenciaVida.destroy(); chartViolenciaVida = null; }

        const ctxVida = document.getElementById('canvasViolenciaVida');
        if (ctxVida) {
            try {
                if (typeof Chart !== 'undefined' && typeof Chart.getChart === 'function') {
                    const exVida = Chart.getChart(ctxVida);
                    if (exVida) exVida.destroy();
                }

                const v2006 = saved['violencia_vida_2006'] !== undefined ? Number(saved['violencia_vida_2006']) : 61.2;
                const v2011 = saved['violencia_vida_2011'] !== undefined ? Number(saved['violencia_vida_2011']) : 55.7;
                const v2016 = saved['violencia_vida_2016'] !== undefined ? Number(saved['violencia_vida_2016']) : 63.7;
                const v2021 = saved['violencia_vida_2021'] !== undefined ? Number(saved['violencia_vida_2021']) : 67.1;

                chartViolenciaVida = new Chart(ctxVida.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: ['Año 2006', 'Año 2011', 'Año 2016', 'Año 2021'],
                        datasets: [
                            {
                                label: 'Prevalencia Total en Oaxaca (%)',
                                data: [v2006, v2011, v2016, v2021],
                                backgroundColor: ['#8e24aa', '#ba68c8', '#7b1fa2', '#4a154b'],
                                borderRadius: 6,
                                borderWidth: 1,
                                borderColor: '#ffffff',
                                barPercentage: 0.55
                            }
                        ]
                    },
                    options: {
                        animation: false,
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: { top: 25, bottom: 5, left: 5, right: 10 }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(c) {
                                        return ' Prevalencia total en Oaxaca: ' + Number(c.raw).toFixed(1) + '%';
                                    }
                                }
                            },
                            datalabels: {
                                display: true,
                                anchor: 'end',
                                align: 'top',
                                offset: 3,
                                color: '#263238',
                                font: { weight: 'bold', size: 11 },
                                formatter: function(v) {
                                    return v != null ? Number(v).toFixed(1) + '%' : '';
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 80,
                                title: {
                                    display: true,
                                    text: 'Porcentaje (%)',
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
                                    font: { size: 11, weight: 'bold' },
                                    color: '#4a154b'
                                },
                                grid: { display: false }
                            }
                        }
                    }
                });
            } catch (err) {
                console.error('Error al renderizar canvasViolenciaVida:', err);
            }
        }
    }

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
        const layoutViolencia = document.getElementById("layoutTematicoViolencia");
        const layoutStd = document.getElementById("layoutTematicoEstandar");

        if (layoutSalud) layoutSalud.classList.add("d-none");
        if (layoutEducacion) layoutEducacion.classList.add("d-none");
        if (layoutVivienda) layoutVivienda.classList.add("d-none");
        if (layoutIngreso) layoutIngreso.classList.add("d-none");
        if (layoutLenguas) layoutLenguas.classList.add("d-none");
        if (layoutViolencia) layoutViolencia.classList.add("d-none");
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
        } else if (nombreTema === 'violencia') {
            if (layoutViolencia) {
                layoutViolencia.classList.remove("d-none");
                renderizarViolenciaINEGI();
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
        if (modalTematicoBootstrap) {
            modalTematicoBootstrap.show();
            setTimeout(function() {
                if (nombreTema === 'violencia' && typeof renderizarViolenciaINEGI === 'function') {
                    renderizarViolenciaINEGI();
                } else if (nombreTema === 'lenguas' && typeof renderizarLenguasINEGI === 'function') {
                    renderizarLenguasINEGI();
                } else if (nombreTema === 'ingreso' && typeof renderizarIngresoINEGI === 'function') {
                    renderizarIngresoINEGI();
                }
            }, 120);
        }
    }

    // MOSTRAR TEMA
    function mostrarTema(nombreTema, elemento) {
        window.temaActual = nombreTema;
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
    window.renderizarIngresoINEGI = renderizarIngresoINEGI;
    window.renderizarLenguasINEGI = renderizarLenguasINEGI;
    window.renderizarViolenciaINEGI = renderizarViolenciaINEGI;
})(window);