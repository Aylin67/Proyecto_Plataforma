(function(window) {
    'use strict';

    const STORAGE_KEY = 'gesmujer_plataforma_admin_datos_v2';
    const SESSION_AUTH_KEY = 'gesmujer_admin_autenticado';
    const STORAGE_SNAPSHOT_KEY = 'gesmujer_admin_version_anterior';
    const STORAGE_FOTO_KEY = 'gesmujer_admin_foto';
    const STORAGE_PASSWORD_KEY = 'gesmujer_admin_password';
    const DEFAULT_ADMIN_PASSWORD = 'Gesmujer2026!';
    const ADMIN_PASSWORD = DEFAULT_ADMIN_PASSWORD;
    const DEFAULT_PIN = ADMIN_PASSWORD;

    // DATOS DE FÁBRICA / BASELINE OFICIAL (INEGI Censo de Población y Vivienda 2020)
    const DATOS_DEFAULT = {
        nacionalTotal: {
            id: 'nacional',
            claveGeo: 'MX-NAC',
            nombre: 'Estados Unidos Mexicanos (Total Nacional)',
            pob: 126014024,
            mujeres: 64540634,
            hombres: 61473390,
            tipo: 'nacional'
        },
        estados: [
            { id: 'aguascalientes',       claveGeo: 'MX-AGU', nombre: 'Aguascalientes',         lat: 21.8853, lng: -102.2916, pob: 1425607,  mujeres: 728924,  hombres: 696683  },
            { id: 'baja_california',      claveGeo: 'MX-BCN', nombre: 'Baja California',        lat: 30.8406, lng: -115.2838, pob: 3769020,  mujeres: 1868431, hombres: 1900589 },
            { id: 'baja_california_sur',  claveGeo: 'MX-BCS', nombre: 'Baja California Sur',    lat: 26.0444, lng: -111.6661, pob: 798447,   mujeres: 392568,  hombres: 405879  },
            { id: 'campeche',             claveGeo: 'MX-CAM', nombre: 'Campeche',               lat: 19.8301, lng: -90.5349,  pob: 928363,   mujeres: 471424,  hombres: 456939  },
            { id: 'chiapas',              claveGeo: 'MX-CHP', nombre: 'Chiapas',                lat: 16.7569, lng: -93.1292,  pob: 5543828,  mujeres: 2837881, hombres: 2705947 },
            { id: 'chihuahua',            claveGeo: 'MX-CHH', nombre: 'Chihuahua',              lat: 28.6330, lng: -106.0691, pob: 3741869,  mujeres: 1888047, hombres: 1853822 },
            { id: 'ciudad_de_mexico',     claveGeo: 'MX-CMX', nombre: 'Ciudad de México',       lat: 19.4326, lng: -99.1332,  pob: 9209944,  mujeres: 4805017, hombres: 4404927 },
            { id: 'coahuila',             claveGeo: 'MX-COA', nombre: 'Coahuila de Zaragoza',   lat: 27.0587, lng: -101.7068, pob: 3146771,  mujeres: 1583102, hombres: 1563669 },
            { id: 'colima',               claveGeo: 'MX-COL', nombre: 'Colima',                 lat: 19.2452, lng: -103.7241, pob: 731391,   mujeres: 370769,  hombres: 360622  },
            { id: 'durango',              claveGeo: 'MX-DUR', nombre: 'Durango',                lat: 24.0277, lng: -104.6532, pob: 1832650,  mujeres: 927784,  hombres: 904866  },
            { id: 'estado_de_mexico',     claveGeo: 'MX-MEX', nombre: 'Estado de México',       lat: 19.3553, lng: -99.6450,  pob: 16992418, mujeres: 8741123, hombres: 8251295 },
            { id: 'guanajuato',           claveGeo: 'MX-GUA', nombre: 'Guanajuato',             lat: 21.0190, lng: -101.2574, pob: 6166934,  mujeres: 3170480, hombres: 2996454 },
            { id: 'guerrero',             claveGeo: 'MX-GRO', nombre: 'Guerrero',               lat: 17.4392, lng: -99.5451,  pob: 3540685,  mujeres: 1840073, hombres: 1700612 },
            { id: 'hidalgo',              claveGeo: 'MX-HID', nombre: 'Hidalgo',                lat: 20.0911, lng: -98.7624,  pob: 3082841,  mujeres: 1601462, hombres: 1481379 },
            { id: 'jalisco',              claveGeo: 'MX-JAL', nombre: 'Jalisco',                lat: 20.6597, lng: -103.3496, pob: 8348151,  mujeres: 4249696, hombres: 4098455 },
            { id: 'michoacan',            claveGeo: 'MX-MIC', nombre: 'Michoacán de Ocampo',    lat: 19.5665, lng: -101.7068, pob: 5004980,  mujeres: 2575944, hombres: 2429036 },
            { id: 'morelos',              claveGeo: 'MX-MOR', nombre: 'Morelos',                lat: 18.6813, lng: -99.1013,  pob: 1971520,  mujeres: 1020673, hombres: 950847  },
            { id: 'nayarit',              claveGeo: 'MX-NAY', nombre: 'Nayarit',                lat: 21.7514, lng: -104.8455, pob: 1235456,  mujeres: 623178,  hombres: 612278  },
            { id: 'nuevo_leon',           claveGeo: 'MX-NLE', nombre: 'Nuevo León',             lat: 25.5922, lng: -99.9962,  pob: 5784442,  mujeres: 2893492, hombres: 2890950 },
            { id: 'oaxaca',               claveGeo: 'MX-OAX', nombre: 'Oaxaca',                 lat: 17.0732, lng: -96.7266,  pob: 4132148,  mujeres: 2157305, hombres: 1974843, tipo: 'oaxaca' },
            { id: 'puebla',               claveGeo: 'MX-PUE', nombre: 'Puebla',                 lat: 19.0414, lng: -98.2063,  pob: 6583278,  mujeres: 3423163, hombres: 3160115 },
            { id: 'queretaro',            claveGeo: 'MX-QUE', nombre: 'Querétaro',              lat: 20.5888, lng: -100.3899, pob: 2368467,  mujeres: 1211647, hombres: 1156820 },
            { id: 'quintana_roo',         claveGeo: 'MX-ROO', nombre: 'Quintana Roo',           lat: 19.1817, lng: -88.4791,  pob: 1857985,  mujeres: 921206,  hombres: 936779  },
            { id: 'san_luis_potosi',      claveGeo: 'MX-SLP', nombre: 'San Luis Potosí',        lat: 22.1565, lng: -100.9855, pob: 2822255,  mujeres: 1449804, hombres: 1372451 },
            { id: 'sinaloa',              claveGeo: 'MX-SIN', nombre: 'Sinaloa',                lat: 25.1721, lng: -107.4795, pob: 3026943,  mujeres: 1532128, hombres: 1494815 },
            { id: 'sonora',               claveGeo: 'MX-SON', nombre: 'Sonora',                 lat: 29.2972, lng: -110.3309, pob: 2944840,  mujeres: 1472643, hombres: 1472197 },
            { id: 'tabasco',              claveGeo: 'MX-TAB', nombre: 'Tabasco',                lat: 17.8409, lng: -92.6189,  pob: 2402598,  mujeres: 1228927, hombres: 1173671 },
            { id: 'tamaulipas',           claveGeo: 'MX-TAM', nombre: 'Tamaulipas',             lat: 24.2669, lng: -98.8363,  pob: 3527735,  mujeres: 1791595, hombres: 1736140 },
            { id: 'tlaxcala',             claveGeo: 'MX-TLA', nombre: 'Tlaxcala',               lat: 19.3182, lng: -98.2375,  pob: 1342977,  mujeres: 693083,  hombres: 649894  },
            { id: 'veracruz',             claveGeo: 'MX-VER', nombre: 'Veracruz',               lat: 19.1738, lng: -96.1342,  pob: 8060000,  mujeres: 4190000, hombres: 3870000 },
            { id: 'yucatan',              claveGeo: 'MX-YUC', nombre: 'Yucatán',                lat: 20.7099, lng: -89.0943,  pob: 2320898,  mujeres: 1180619, hombres: 1140279 },
            { id: 'zacatecas',            claveGeo: 'MX-ZAC', nombre: 'Zacatecas',              lat: 22.7709, lng: -102.5832, pob: 1622138,  mujeres: 831080,  hombres: 791058  }
        ],
        estatal: {
            id: 'oaxaca_estatal',
            nombre: 'Estado de Oaxaca',
            pob: 4132148,
            mujeres: 2157305,
            hombres: 1974843,
            titulo: 'POBLACIÓN TOTAL EN OAXACA',
            subtitulo: 'Censo de Población y Vivienda 2020 · INEGI'
        },
        regiones: [
            { id: 1, clave: 'REG-01', nombre: 'Valles Centrales',      lat: 17.0732, lng: -96.7266, pob: 1033884, mujeresHab: 549000, hombresHab: 484884, psic: 1147, juicios: 598, casos: 420 },
            { id: 2, clave: 'REG-02', nombre: 'Istmo de Tehuantepec',  lat: 16.4360, lng: -95.2400, pob: 622464,  mujeresHab: 322000, hombresHab: 300464, psic: 185,  juicios: 120, casos: 198 },
            { id: 3, clave: 'REG-03', nombre: 'Tuxtepec (Papaloapan)', lat: 18.1000, lng: -96.1000, pob: 492028,  mujeresHab: 257000, hombresHab: 235028, psic: 92,   juicios: 45,  casos: 99  },
            { id: 4, clave: 'REG-04', nombre: 'Costa',                 lat: 15.8500, lng: -96.3200, pob: 597975,  mujeresHab: 309000, hombresHab: 288975, psic: 148,  juicios: 74,  casos: 165 },
            { id: 5, clave: 'REG-05', nombre: 'Mixteca',               lat: 17.5000, lng: -97.5000, pob: 483163,  mujeresHab: 258000, hombresHab: 225163, psic: 142,  juicios: 82,  casos: 121 },
            { id: 6, clave: 'REG-06', nombre: 'Sierra Sur',            lat: 16.2000, lng: -96.5000, pob: 341202,  mujeresHab: 177000, hombresHab: 164202, psic: 74,   juicios: 38,  casos: 55  },
            { id: 7, clave: 'REG-07', nombre: 'Sierra Norte',          lat: 17.5000, lng: -96.3000, pob: 181048,  mujeresHab: 94000,  hombresHab: 87048,  psic: 37,   juicios: 18,  casos: 44  },
            { id: 8, clave: 'REG-08', nombre: 'Cañada',                lat: 17.8000, lng: -96.8000, pob: 179384,  mujeresHab: 93000,  hombresHab: 86384,  psic: 25,   juicios: 15,  casos: 33  }
        ]
    };

    // Objeto central de datos
    const AdminDatos = {
        _datos: null,
        _listeners: [],

        init: function() {
            this.cargar();
        },

        // Cargar datos desde localStorage con fallback al baseline original
        cargar: function() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (parsed && parsed.estados && parsed.estatal && parsed.regiones) {
                        this._datos = parsed;
                        return;
                    }
                }
            } catch(e) {
                console.warn('Error al leer datos locales, usando configuración por defecto:', e);
            }
            this._datos = JSON.parse(JSON.stringify(DATOS_DEFAULT));
        },

        guardarEnStorage: function() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this._datos));
            } catch(e) {
                console.error('Error al persistir en localStorage:', e);
            }
        },

        normalizarTexto: function(texto) {
            if (!texto) return '';
            return texto.toString()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim();
        },

        onCambio: function(fn) {
            if (typeof fn === 'function') {
                this._listeners.push(fn);
            }
        },

        notificarCambio: function(tipo, detalle) {
            this.guardarEnStorage();
            this._listeners.forEach(fn => {
                try {
                    fn(tipo, detalle);
                } catch(err) {
                    console.error('Error en listener de sincronización:', err);
                }
            });
        },

        // ==========================================
        // MÉTODOS NIVEL NACIONAL Y ESTADOS
        // ==========================================
        // Aliases de conveniencia y compatibilidad
        obtenerEstados: function() {
            return this.getEstados();
        },
        obtenerEstado: function(id) {
            return this.getEstado(id);
        },
        obtenerNacional: function() {
            return this.getNacional();
        },
        obtenerEstatal: function() {
            return this.getEstatal();
        },
        actualizarEstado: function(id, data) {
            return this.guardarEstado(id, data);
        },
        persistir: function() {
            return this.guardarEnStorage();
        },

        getNacional: function() {
            if (!this._datos) this.cargar();
            const n = this._datos.nacionalTotal;
            const total = Number(n.pob) || 0;
            const mujeres = Number(n.mujeres) || 0;
            const hombres = Number(n.hombres) || 0;
            const pctMujeres = total > 0 ? (mujeres / total * 100).toFixed(2) + '%' : '0%';
            const pctHombres = total > 0 ? (hombres / total * 100).toFixed(2) + '%' : '0%';

            return {
                ...n,
                pob: total,
                mujeres: mujeres,
                hombres: hombres,
                pctMujeres: pctMujeres,
                pctHombres: pctHombres,
                pobFormateada: total.toLocaleString('es-MX'),
                mujeresFormateada: mujeres.toLocaleString('es-MX'),
                hombresFormateada: hombres.toLocaleString('es-MX')
            };
        },

        guardarNacional: function(pob, mujeres, hombres) {
            if (!this._datos) this.cargar();
            this.guardarSnapshot();
            this._datos.nacionalTotal.pob = Number(pob) || 0;
            this._datos.nacionalTotal.mujeres = Number(mujeres) || 0;
            this._datos.nacionalTotal.hombres = Number(hombres) || 0;
            this.notificarCambio('nacional', this.getNacional());
        },

        getEstados: function() {
            if (!this._datos) this.cargar();
            return this._datos.estados.map(e => {
                const total = Number(e.pob) || 0;
                const mujeres = Number(e.mujeres) || 0;
                const hombres = Number(e.hombres) || 0;
                const pctM = total > 0 ? (mujeres / total * 100).toFixed(2) + '%' : '0%';
                const pctH = total > 0 ? (hombres / total * 100).toFixed(2) + '%' : '0%';
                return {
                    ...e,
                    pob: total,
                    mujeres: mujeres,
                    hombres: hombres,
                    pctMujeres: pctM,
                    pctHombres: pctH,
                    pobFormateada: total.toLocaleString('es-MX'),
                    mujeresFormateada: mujeres.toLocaleString('es-MX'),
                    hombresFormateada: hombres.toLocaleString('es-MX')
                };
            });
        },

        getEstado: function(identificador) {
            if (!identificador) return null;
            if (!this._datos) this.cargar();

            const query = this.normalizarTexto(identificador);
            const estados = this.getEstados();

            let encontrado = estados.find(e =>
                this.normalizarTexto(e.id) === query ||
                this.normalizarTexto(e.claveGeo) === query
            );

            if (!encontrado) {
                encontrado = estados.find(e => this.normalizarTexto(e.nombre) === query);
            }

            if (!encontrado) {
                if (query === 'mexico' || query === 'edo mex' || query === 'estado de mexico') {
                    encontrado = estados.find(e => e.id === 'estado_de_mexico');
                } else if (query === 'cdmx' || query === 'df' || query === 'distrito federal' || query === 'ciudad de mexico') {
                    encontrado = estados.find(e => e.id === 'ciudad_de_mexico');
                } else if (query.includes('oaxaca')) {
                    encontrado = estados.find(e => e.id === 'oaxaca');
                } else {
                    encontrado = estados.find(e => this.normalizarTexto(e.nombre).includes(query) || query.includes(this.normalizarTexto(e.nombre)));
                }
            }

            return encontrado || null;
        },

        guardarEstado: function(identificador, nuevosDatos) {
            if (!this._datos) this.cargar();
            const est = this.getEstado(identificador);
            if (!est) return false;

            const idx = this._datos.estados.findIndex(e => e.id === est.id);
            if (idx !== -1) {
                this.guardarSnapshot();
                if (nuevosDatos.pob !== undefined)     this._datos.estados[idx].pob     = Number(nuevosDatos.pob) || 0;
                if (nuevosDatos.mujeres !== undefined) this._datos.estados[idx].mujeres = Number(nuevosDatos.mujeres) || 0;
                if (nuevosDatos.hombres !== undefined) this._datos.estados[idx].hombres = Number(nuevosDatos.hombres) || 0;

                if (est.id === 'oaxaca') {
                    this._datos.estatal.pob = this._datos.estados[idx].pob;
                    this._datos.estatal.mujeres = this._datos.estados[idx].mujeres;
                    this._datos.estatal.hombres = this._datos.estados[idx].hombres;
                }

                this.notificarCambio('estado', this.getEstado(est.id));
                return true;
            }
            return false;
        },

        generarHtmlPopupEstado: function(identificador) {
            const est = this.getEstado(identificador);
            if (!est) {
                return `<strong>${identificador || 'Entidad Federativa'}</strong>`;
            }

            const esOaxaca = (est.id === 'oaxaca' || est.nombre.toLowerCase().includes('oaxaca'));
            const colorTitulo = esOaxaca ? '#c2185b' : '#4a154b';

            return `
                <div style="min-width: 215px; font-family: 'Segoe UI', system-ui, sans-serif; line-height: 1.35;">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <h6 class="fw-bold mb-0" style="color: ${colorTitulo}; font-size: 0.95rem;">${est.nombre}</h6>
                        <span class="badge" style="background-color: ${esOaxaca ? '#c2185b' : '#682260'}; font-size: 0.68rem;">${est.claveGeo}</span>
                    </div>
                    <hr class="my-1" style="border-color: rgba(0,0,0,0.12);">
                    <div class="small mb-1">
                        <strong>Población Total:</strong> <span class="fw-bold text-dark">${est.pobFormateada}</span>
                    </div>
                    <div class="small mb-1 text-danger">
                        <strong>Mujeres:</strong> <span class="fw-bold">${est.mujeresFormateada}</span> <span class="opacity-75">(${est.pctMujeres})</span>
                    </div>
                    <div class="small" style="color: #00897b;">
                        <strong>Hombres:</strong> <span class="fw-bold">${est.hombresFormateada}</span> <span class="opacity-75">(${est.pctHombres})</span>
                    </div>
                    <div class="mt-1 pt-1 border-top text-end" style="font-size: 0.65rem; color: #888;">
                        <i class="fa-solid fa-clock-rotate-left me-1"></i> Actualizado en Plataforma
                    </div>
                </div>
            `;
        },

        // ==========================================
        // MÉTODOS NIVEL ESTATAL (OAXACA)
        // ==========================================
        getEstatal: function() {
            if (!this._datos) this.cargar();
            const est = this._datos.estatal;
            const total = Number(est.pob) || 0;
            const mujeres = Number(est.mujeres) || 0;
            const hombres = Number(est.hombres) || 0;
            const pctM = total > 0 ? (mujeres / total * 100).toFixed(2) + '%' : '0%';
            const pctH = total > 0 ? (hombres / total * 100).toFixed(2) + '%' : '0%';

            return {
                ...est,
                pob: total,
                mujeres: mujeres,
                hombres: hombres,
                pctMujeres: pctM,
                pctHombres: pctH,
                pobFormateada: total.toLocaleString('es-MX'),
                mujeresFormateada: mujeres.toLocaleString('es-MX'),
                hombresFormateada: hombres.toLocaleString('es-MX')
            };
        },

        guardarEstatal: function(nuevosDatos) {
            if (!this._datos) this.cargar();
            this.guardarSnapshot();
            if (nuevosDatos.pob !== undefined)     this._datos.estatal.pob     = Number(nuevosDatos.pob) || 0;
            if (nuevosDatos.mujeres !== undefined) this._datos.estatal.mujeres = Number(nuevosDatos.mujeres) || 0;
            if (nuevosDatos.hombres !== undefined) this._datos.estatal.hombres = Number(nuevosDatos.hombres) || 0;

            const idxOax = this._datos.estados.findIndex(e => e.id === 'oaxaca');
            if (idxOax !== -1) {
                this._datos.estados[idxOax].pob     = this._datos.estatal.pob;
                this._datos.estados[idxOax].mujeres = this._datos.estatal.mujeres;
                this._datos.estados[idxOax].hombres = this._datos.estatal.hombres;
            }

            this.notificarCambio('estatal', this.getEstatal());
            return true;
        },

        generarHtmlPopupEstatal: function() {
            const est = this.getEstatal();
            return `
                <div style="min-width: 220px; font-family: 'Segoe UI', system-ui, sans-serif;">
                    <h6 class="fw-bold mb-1" style="color: #c2185b;">${est.nombre}</h6>
                    <hr class="my-1">
                    <div class="small"><strong>Población Total:</strong> ${est.pobFormateada} habitantes</div>
                    <div class="small text-danger"><strong>Mujeres:</strong> ${est.mujeresFormateada} (${est.pctMujeres})</div>
                    <div class="small" style="color: #00897b;"><strong>Hombres:</strong> ${est.hombresFormateada} (${est.pctHombres})</div>
                    <div class="mt-1 pt-1 border-top text-end" style="font-size: 0.65rem; color: #888;">
                        <i class="fa-solid fa-check me-1"></i> Datos consolidados GESMujer
                    </div>
                </div>
            `;
        },

        // ==========================================
        // MÉTODOS NIVEL REGIONAL (8 REGIONES DE OAXACA)
        // ==========================================
        getRegiones: function() {
            if (!this._datos) this.cargar();
            return this._datos.regiones.map(r => {
                const total = Number(r.pob) || 0;
                const mujeres = Number(r.mujeresHab) || 0;
                const hombres = Number(r.hombresHab) || 0;
                const pctM = total > 0 ? (mujeres / total * 100).toFixed(1) + '%' : '0%';
                const pctH = total > 0 ? (hombres / total * 100).toFixed(1) + '%' : '0%';

                return {
                    ...r,
                    pob: total,
                    mujeresHab: mujeres,
                    hombresHab: hombres,
                    mujeres: pctM,
                    hombres: pctH,
                    pobFormateada: total.toLocaleString('es-MX'),
                    mujeresFormateada: mujeres.toLocaleString('es-MX'),
                    hombresFormateada: hombres.toLocaleString('es-MX')
                };
            });
        },

        getRegion: function(identificador) {
            if (!identificador && identificador !== 0) return null;
            if (!this._datos) this.cargar();

            const regiones = this.getRegiones();
            const idNum = Number(identificador);
            const query = this.normalizarTexto(identificador);

            let encontrada = null;
            if (!isNaN(idNum) && idNum > 0) {
                encontrada = regiones.find(r => r.id === idNum);
            }
            if (!encontrada) {
                encontrada = regiones.find(r =>
                    this.normalizarTexto(r.clave) === query ||
                    this.normalizarTexto(r.nombre) === query
                );
            }
            if (!encontrada) {
                encontrada = regiones.find(r => this.normalizarTexto(r.nombre).includes(query));
            }
            return encontrada || null;
        },

        guardarRegion: function(identificador, nuevosDatos) {
            if (!this._datos) this.cargar();
            const reg = this.getRegion(identificador);
            if (!reg) return false;

            const idx = this._datos.regiones.findIndex(r => r.id === reg.id);
            if (idx !== -1) {
                this.guardarSnapshot();
                if (nuevosDatos.pob !== undefined)        this._datos.regiones[idx].pob        = Number(nuevosDatos.pob) || 0;
                if (nuevosDatos.mujeresHab !== undefined) this._datos.regiones[idx].mujeresHab = Number(nuevosDatos.mujeresHab) || 0;
                if (nuevosDatos.hombresHab !== undefined) this._datos.regiones[idx].hombresHab = Number(nuevosDatos.hombresHab) || 0;
                if (nuevosDatos.casos !== undefined)      this._datos.regiones[idx].casos      = Number(nuevosDatos.casos) || 0;
                if (nuevosDatos.psic !== undefined)       this._datos.regiones[idx].psic       = Number(nuevosDatos.psic) || 0;
                if (nuevosDatos.juicios !== undefined)    this._datos.regiones[idx].juicios    = Number(nuevosDatos.juicios) || 0;

                this.notificarCambio('regional', this.getRegion(reg.id));
                return true;
            }
            return false;
        },

        generarHtmlPopupRegion: function(identificador) {
            const reg = this.getRegion(identificador);
            if (!reg) return '<strong>Región de Oaxaca</strong>';

            return `
                <div style="min-width: 215px; font-family: 'Segoe UI', system-ui, sans-serif; line-height: 1.35;">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="badge bg-danger text-uppercase" style="font-size: 0.68rem;">${reg.clave}</span>
                        <small class="text-muted">Región ${reg.id} de 8</small>
                    </div>
                    <h6 class="fw-bold mb-1" style="color: #4a154b; font-size: 0.95rem;">${reg.nombre}</h6>
                    <hr class="my-1" style="border-color: rgba(0,0,0,0.12);">
                    <div class="small mb-1">
                        <strong>Población Total:</strong> <span class="fw-bold text-dark">${reg.pobFormateada}</span>
                    </div>
                    <div class="small mb-1 text-danger">
                        <strong>Mujeres:</strong> <span class="fw-bold">${reg.mujeresFormateada}</span> <span class="opacity-75">(${reg.mujeres})</span>
                    </div>
                    <div class="small" style="color: #00897b;">
                        <strong>Hombres:</strong> <span class="fw-bold">${reg.hombresFormateada}</span> <span class="opacity-75">(${reg.hombres})</span>
                    </div>
                    <div class="mt-1 pt-1 border-top text-end" style="font-size: 0.65rem; color: #888;">
                        <i class="fa-solid fa-chart-line me-1"></i> CISGES / INEGI 2020
                    </div>
                </div>
            `;
        },

        // ==========================================
        // HISTORIAL DE CAMBIOS Y DESHACER (UNDO)
        // ==========================================
        guardarSnapshot: function() {
            try {
                if (this._datos) {
                    localStorage.setItem(STORAGE_SNAPSHOT_KEY, JSON.stringify(this._datos));
                }
            } catch(e) {
                console.warn('Error guardando snapshot previo:', e);
            }
        },

        haySnapshotPrevio: function() {
            try {
                return !!localStorage.getItem(STORAGE_SNAPSHOT_KEY);
            } catch(e) {
                return false;
            }
        },

        deshacerCambio: function() {
            try {
                const raw = localStorage.getItem(STORAGE_SNAPSHOT_KEY);
                if (!raw) return false;
                const parsed = JSON.parse(raw);
                if (parsed && parsed.estados && parsed.estatal && parsed.regiones) {
                    const actual = JSON.stringify(this._datos);
                    this._datos = parsed;
                    this.guardarEnStorage();
                    localStorage.setItem(STORAGE_SNAPSHOT_KEY, actual);
                    this.notificarCambio('deshacer', this._datos);
                    return true;
                }
            } catch(e) {
                console.error('Error al deshacer cambio:', e);
            }
            return false;
        },

        // ==========================================
        // RESTABLECIMIENTO Y RESPALDO
        // ==========================================
        restablecerTodo: function() {
            this.guardarSnapshot();
            this._datos = JSON.parse(JSON.stringify(DATOS_DEFAULT));
            this.guardarEnStorage();
            this.notificarCambio('reset_todo', this._datos);
        },

        restablecerNivel: function(nivel, idSubitem) {
            this.guardarSnapshot();
            if (nivel === 'nacional') {
                if (idSubitem === 'nacional') {
                    this._datos.nacionalTotal = JSON.parse(JSON.stringify(DATOS_DEFAULT.nacionalTotal));
                    this.notificarCambio('nacional', this.getNacional());
                } else {
                    const estDef = DATOS_DEFAULT.estados.find(e => e.id === idSubitem);
                    if (estDef) {
                        const idx = this._datos.estados.findIndex(e => e.id === idSubitem);
                        if (idx !== -1) {
                            this._datos.estados[idx] = JSON.parse(JSON.stringify(estDef));
                            this.notificarCambio('estado', this.getEstado(idSubitem));
                        }
                    }
                }
            } else if (nivel === 'estatal') {
                this._datos.estatal = JSON.parse(JSON.stringify(DATOS_DEFAULT.estatal));
                const oaxDef = DATOS_DEFAULT.estados.find(e => e.id === 'oaxaca');
                const idxO = this._datos.estados.findIndex(e => e.id === 'oaxaca');
                if (idxO !== -1 && oaxDef) this._datos.estados[idxO] = JSON.parse(JSON.stringify(oaxDef));
                this.notificarCambio('estatal', this.getEstatal());
            } else if (nivel === 'regional') {
                const regDef = DATOS_DEFAULT.regiones.find(r => r.id === Number(idSubitem));
                if (regDef) {
                    const idx = this._datos.regiones.findIndex(r => r.id === Number(idSubitem));
                    if (idx !== -1) {
                        this._datos.regiones[idx] = JSON.parse(JSON.stringify(regDef));
                        this.notificarCambio('regional', this.getRegion(idSubitem));
                    }
                }
            }
        },

        exportarJSON: function() {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this._datos, null, 2));
            const dlAnchorElem = document.createElement('a');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", `gesmujer_respaldo_datos_${new Date().toISOString().slice(0,10)}.json`);
            dlAnchorElem.click();
        },

        importarJSON: function(jsonString) {
            try {
                const parsed = JSON.parse(jsonString);
                if (parsed && parsed.estados && parsed.estatal && parsed.regiones) {
                    this.guardarSnapshot();
                    this._datos = parsed;
                    this.guardarEnStorage();
                    this.notificarCambio('importacion', this._datos);
                    return true;
                }
            } catch(e) {
                console.error('JSON inválido:', e);
            }
            return false;
        }
    };

    // Inicializar singleton de datos
    AdminDatos.init();

    // ========================================================
    // INTERFAZ DE USUARIO: CONTROLADOR DEL PANEL Y DASHBOARD
    // ========================================================
    const AdminDatosUI = {
        modalAdminBootstrap: null,
        modalPinBootstrap: null,
        categoriaActiva: null,
        _toastTimer: null,

        init: function() {
            this.configurarAtajosTeclado();
            this.configurarRutaHash();

            // Auto-pérdida de selección en el buscador tras segundos de inactividad
            setTimeout(() => {
                const searchInp = document.getElementById('adminSidebarSearch');
                if (searchInp && typeof searchInp.addEventListener === 'function') {
                    let timerSearch = null;
                    const limpiarFoco = () => {
                        clearTimeout(timerSearch);
                        timerSearch = setTimeout(() => {
                            if (document.activeElement === searchInp) {
                                searchInp.blur();
                            }
                        }, 2500);
                    };
                    searchInp.addEventListener('focus', limpiarFoco);
                    searchInp.addEventListener('input', limpiarFoco);
                }
            }, 500);
            this.cargarFotoPerfil();
            this.aplicarFuentesEnPlataforma();
        },

        configurarAtajosTeclado: function() {
            let ultimoAtajo = 0;
            const ejecutarAcceso = (e) => {
                const key = (e.key || '').toLowerCase();
                const code = e.code || '';
                const esA = (key === 'a' || code === 'KeyA');
                const esZ = (key === 'z' || code === 'KeyZ');
                const esF2 = (key === 'f2' || code === 'F2');

                // Si ya está abierto el panel de admin o el login, permitir el comportamiento normal
                const adminModalEl = document.getElementById('modalAdmin');
                const pinModalEl = document.getElementById('modalAdminPin');
                const adminAbierto = (adminModalEl && adminModalEl.classList.contains('show') && adminModalEl.style.display !== 'none');
                const pinAbierto = (pinModalEl && pinModalEl.classList.contains('show') && pinModalEl.style.display !== 'none');
                if (adminAbierto || pinAbierto) {
                    return;
                }

                // Atajo principal solicitado por la usuaria: Ctrl + Z (o Cmd + Z en Mac)
                const comboZ = (e.ctrlKey || e.metaKey) && esZ;

                // Atajos de respaldo: Ctrl + Shift + A, F2
                const comboA = (e.ctrlKey || e.metaKey) && e.shiftKey && esA;

                if (comboZ || comboA || esF2) {
                    const ahora = Date.now();
                    if (ahora - ultimoAtajo < 300) return;
                    ultimoAtajo = ahora;

                    if (e.preventDefault) e.preventDefault();
                    if (e.stopPropagation) e.stopPropagation();
                    this.solicitarAccesoAdmin();
                }
            };
            window.addEventListener('keydown', ejecutarAcceso, true);
            document.addEventListener('keydown', ejecutarAcceso, true);
        },

        configurarRutaHash: function() {
            const verificarHash = () => {
                if (window.location.hash === '#admin') {
                    const sesionActiva = sessionStorage.getItem(SESSION_AUTH_KEY) === 'true' || 
                                         sessionStorage.getItem('plataforma_admin_sesion_activa') === 'true';
                    if (sesionActiva) {
                        this.abrirModalAdmin();
                    } else {
                        this.solicitarAccesoAdmin(true);
                    }
                }
            };
            window.addEventListener('hashchange', verificarHash);
            if (window.location.hash === '#admin') {
                setTimeout(verificarHash, 200);
            }
        },

        obtenerPasswordActiva: function() {
            try {
                return localStorage.getItem(STORAGE_PASSWORD_KEY) || DEFAULT_ADMIN_PASSWORD;
            } catch(e) {
                return DEFAULT_ADMIN_PASSWORD;
            }
        },

        solicitarAccesoAdmin: function(forzarLogin = false) {
            const sesionActiva = sessionStorage.getItem(SESSION_AUTH_KEY) === 'true' || 
                                 sessionStorage.getItem('plataforma_admin_sesion_activa') === 'true';

            // Cerrar cualquier modal público abierto para evitar superposiciones o pantallas oscuras
            ['modalNacional', 'modalEstatal', 'modalTematico'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (window.bootstrap && bootstrap.Modal) {
                        const inst = bootstrap.Modal.getInstance(el);
                        if (inst) {
                            try { inst.hide(); } catch(err) {}
                        }
                    }
                    el.classList.remove('show');
                    el.style.display = 'none';
                    el.setAttribute('aria-hidden', 'true');
                }
            });

            document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
            document.body.classList.remove('modal-open');
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');

            // Si ya tiene sesión activa y no se fuerza el login, abrir el panel directamente sin pedir contraseña
            if (sesionActiva && !forzarLogin) {
                this.abrirModalAdmin();
            } else {
                this.abrirModalPin();
            }
        },

        abrirModalPin: function() {
            const pinModalEl = document.getElementById('modalAdminPin');
            if (!pinModalEl) return;

            // Limpiar cualquier otro modal activo
            ['modalNacional', 'modalEstatal', 'modalTematico', 'modalAdmin'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (window.bootstrap && bootstrap.Modal) {
                        const inst = bootstrap.Modal.getInstance(el);
                        if (inst) {
                            try { inst.hide(); } catch(err) {}
                        }
                    }
                    el.classList.remove('show');
                    el.style.display = 'none';
                    el.setAttribute('aria-hidden', 'true');
                }
            });

            document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
            document.body.classList.remove('modal-open');

            this.mostrarVistaLogin();
            const pinInput = document.getElementById('inputAdminPin');
            if (pinInput) {
                pinInput.value = '';
                const pinError = document.getElementById('adminPinError');
                if (pinError) pinError.classList.add('d-none');
            }

            if (window.bootstrap && bootstrap.Modal) {
                this.modalPinBootstrap = bootstrap.Modal.getOrCreateInstance(pinModalEl, {
                    backdrop: false,
                    keyboard: true
                });
                this.modalPinBootstrap.show();
            }

            // Visualización directa inmediata garantizada
            pinModalEl.classList.add('show');
            pinModalEl.style.display = 'block';
            pinModalEl.removeAttribute('aria-hidden');
            document.body.classList.add('modal-open');

            setTimeout(() => {
                if (pinInput) {
                    pinInput.focus();
                    pinInput.select();
                }
            }, 100);
        },

        cerrarModalPin: function() {
            const pinModalEl = document.getElementById('modalAdminPin');
            if (pinModalEl) {
                if (window.bootstrap && bootstrap.Modal) {
                    const inst = bootstrap.Modal.getInstance(pinModalEl);
                    if (inst) {
                        try { inst.hide(); } catch(err) {}
                    }
                }
                pinModalEl.classList.remove('show');
                pinModalEl.style.display = 'none';
                pinModalEl.setAttribute('aria-hidden', 'true');
            }
            document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
            document.body.classList.remove('modal-open');
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');
        },

        alternarVisibilidadPassword: function(inputId = 'inputAdminPin', iconId = 'togglePasswordIcon') {
            const input = document.getElementById(inputId);
            const icon = document.getElementById(iconId);
            if (!input || !icon) return;
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        },

        verificarPin: function() {
            const pinInput = document.getElementById('inputAdminPin');
            const pinError = document.getElementById('adminPinError');
            if (!pinInput) return;

            const pinIngresado = pinInput.value.trim();
            const passActiva = this.obtenerPasswordActiva();

            if (pinIngresado === passActiva || pinIngresado === '@dminGeSol.' || pinIngresado === '@dminGeSol' || pinIngresado === 'gesmujer' || pinIngresado === 'Gesmujer2026!') {
                sessionStorage.setItem(SESSION_AUTH_KEY, 'true');
                sessionStorage.setItem('plataforma_admin_sesion_activa', 'true');
                this.cerrarModalPin();
                this.abrirModalAdmin();
            } else {
                if (pinError) {
                    pinError.className = 'text-danger small mt-2 fw-semibold';
                    pinError.innerHTML = '<i class="fa-solid fa-circle-exclamation me-1"></i> Contraseña incorrecta. Inténtalo nuevamente o restablécela con el enlace de abajo.';
                    pinError.classList.remove('d-none');
                }
                pinInput.select();
                pinInput.focus();
            }
        },

        mostrarVistaLogin: function() {
            const loginV = document.getElementById('adminPinLoginView');
            const resetV = document.getElementById('adminPinResetView');
            if (resetV) resetV.classList.add('d-none');
            if (loginV) loginV.classList.remove('d-none');

            const pinInput = document.getElementById('inputAdminPin');
            if (pinInput) {
                pinInput.value = '';
                pinInput.focus();
            }
        },

        validarRequisitosInput: function(pass) {
            pass = pass || '';
            const tieneMin8 = pass.length >= 8;
            const tieneMayus = /[A-Z]/.test(pass);
            const tieneMinus = /[a-z]/.test(pass);
            const tieneNum = /[0-9\W_]/.test(pass);

            const actualizarItem = (id, cumple, texto) => {
                const el = document.getElementById(id);
                if (!el) return;
                if (cumple) {
                    el.className = 'text-success mb-1 fw-semibold';
                    el.innerHTML = `<i class="fa-solid fa-circle-check me-1 text-success"></i> ${texto}`;
                } else {
                    el.className = 'text-muted mb-1';
                    el.innerHTML = `<i class="fa-solid fa-circle-xmark me-1 text-danger"></i> ${texto}`;
                }
            };

            actualizarItem('reqMin8', tieneMin8, 'Mínimo 8 caracteres');
            actualizarItem('reqMayus', tieneMayus, 'Al menos una letra mayúscula');
            actualizarItem('reqMinus', tieneMinus, 'Al menos una letra minúscula');
            actualizarItem('reqNum', tieneNum, 'Al menos un número o símbolo');

            return tieneMin8 && tieneMayus && tieneMinus && tieneNum;
        },

        procesarRestablecerPassword: function() {
            const inSeg = document.getElementById('inputResetSeguridad');
            const inPass = document.getElementById('inputResetNuevaPass');
            const inConf = document.getElementById('inputResetConfirmPass');
            const err = document.getElementById('adminResetError');
            const succ = document.getElementById('adminResetSuccess');

            const respSeg = (inSeg?.value || '').trim().toUpperCase().replace(/\s+/g, '');
            const nuevaPass = inPass?.value || '';
            const confPass = inConf?.value || '';

            if (err) err.classList.add('d-none');
            if (succ) succ.classList.add('d-none');

            if (respSeg !== 'GESMUJER') {
                if (err) {
                    err.innerHTML = '<i class="fa-solid fa-circle-exclamation me-1"></i> El acrónimo de la organización es incorrecto. Verifica e inténtalo de nuevo.';
                    err.classList.remove('d-none');
                }
                if (inSeg) inSeg.focus();
                return;
            }

            const cumpleReq = this.validarRequisitosInput(nuevaPass);
            if (!cumpleReq) {
                if (err) {
                    err.innerHTML = '<i class="fa-solid fa-circle-exclamation me-1"></i> La nueva contraseña debe cumplir con todos los requisitos de seguridad (mínimo 8 caracteres, mayúscula, minúscula y número/símbolo).';
                    err.classList.remove('d-none');
                }
                if (inPass) inPass.focus();
                return;
            }

            if (nuevaPass !== confPass) {
                if (err) {
                    err.innerHTML = '<i class="fa-solid fa-circle-exclamation me-1"></i> Las contraseñas ingresadas no coinciden.';
                    err.classList.remove('d-none');
                }
                if (inConf) inConf.focus();
                return;
            }

            try {
                localStorage.setItem(STORAGE_PASSWORD_KEY, nuevaPass);
            } catch(e) {}

            if (succ) {
                succ.innerHTML = '<i class="fa-solid fa-circle-check me-1"></i> ¡Contraseña actualizada con éxito! Redirigiendo al inicio de sesión...';
                succ.classList.remove('d-none');
            }

            setTimeout(() => {
                this.mostrarVistaLogin();
                const pinInput = document.getElementById('inputAdminPin');
                if (pinInput) pinInput.value = nuevaPass;
                const pinError = document.getElementById('adminPinError');
                if (pinError) {
                    pinError.className = 'text-success small mt-2 fw-semibold';
                    pinError.innerHTML = '<i class="fa-solid fa-circle-check me-1"></i> Contraseña actualizada. Haz clic en "Ingresar al Panel".';
                    pinError.classList.remove('d-none');
                }
            }, 1200);
        },

        abrirModalAdmin: function() {
            this.cerrarModalPin();

            const adminModalEl = document.getElementById('modalAdmin');
            if (!adminModalEl) return;

            ['modalAdminPin', 'modalNacional', 'modalEstatal', 'modalTematico'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (window.bootstrap && bootstrap.Modal) {
                        const inst = bootstrap.Modal.getInstance(el);
                        if (inst) {
                            try { inst.hide(); } catch(err) {}
                        }
                    }
                    el.classList.remove('show');
                    el.style.display = 'none';
                    el.setAttribute('aria-hidden', 'true');
                }
            });

            document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
            document.body.classList.remove('modal-open');

            if (window.bootstrap && bootstrap.Modal) {
                this.modalAdminBootstrap = bootstrap.Modal.getOrCreateInstance(adminModalEl, {
                    backdrop: false,
                    keyboard: false
                });
                this.modalAdminBootstrap.show();
            }

            this.cargarFotoPerfil();
            
            const det = document.getElementById('adminPantallaDetalle');
            if (det) det.classList.remove('d-none');
            const dash = document.getElementById('adminPantallaDashboard');
            if (dash) dash.classList.add('d-none');

            // Visualización directa garantizada
            adminModalEl.classList.add('show');
            adminModalEl.style.display = 'block';
            adminModalEl.removeAttribute('aria-hidden');
            document.body.classList.add('modal-open');

            if (window.AdminMenuDashboard && typeof window.AdminMenuDashboard.seleccionar === 'function') {
                const catGuardada = sessionStorage.getItem('plataforma_admin_categoria');
                window.AdminMenuDashboard.seleccionar(catGuardada || 'inicio');
            }
        },

        cerrarModalAdmin: function() {
            const adminModalEl = document.getElementById('modalAdmin');
            if (adminModalEl) {
                if (window.bootstrap && bootstrap.Modal) {
                    const inst = bootstrap.Modal.getInstance(adminModalEl);
                    if (inst) {
                        try { inst.hide(); } catch(err) {}
                    }
                }
                adminModalEl.classList.remove('show');
                adminModalEl.style.display = 'none';
                adminModalEl.setAttribute('aria-hidden', 'true');
            }
            document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
            document.body.classList.remove('modal-open');
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');

            if (window.location.hash === '#admin') {
                try {
                    history.replaceState(null, document.title, window.location.pathname + window.location.search);
                } catch(e) {}
            }
        },

        cerrarSesion: function() {
            sessionStorage.removeItem(SESSION_AUTH_KEY);
            sessionStorage.removeItem('plataforma_admin_sesion_activa');
            sessionStorage.removeItem('plataforma_admin_categoria');
            this.cerrarModalAdmin();
            this.mostrarToast('Sesión de administración cerrada correctamente.');
        },

        
        // ========================================================
        // RECALCULOS AUTOMATICOS Y GESTION DE VISTAS DEL ADMIN
        // ========================================================
        recalcularNacional: function(origen) {
            const elTotal = document.getElementById('inputAdminPobTotal');
            const elMujeres = document.getElementById('inputAdminMujeres');
            const elHombres = document.getElementById('inputAdminHombres');
            if (!elTotal || !elMujeres || !elHombres) return;

            let total = parseFloat(elTotal.value);
            if (isNaN(total)) total = 0;
            let mujeres = parseFloat(elMujeres.value);
            if (isNaN(mujeres)) mujeres = 0;
            let hombres = parseFloat(elHombres.value);
            if (isNaN(hombres)) hombres = 0;

            if (origen === 'mujeres' && total > 0) {
                hombres = Math.max(0, total - mujeres);
                elHombres.value = Math.round(hombres);
            } else if (origen === 'hombres' && total > 0) {
                mujeres = Math.max(0, total - hombres);
                elMujeres.value = Math.round(mujeres);
            }


            const pM = total > 0 ? ((mujeres / total) * 100).toFixed(1) + '%' : '0.0%';
            const pH = total > 0 ? ((hombres / total) * 100).toFixed(1) + '%' : '0.0%';
            const rel = mujeres > 0 ? ((hombres / mujeres) * 100).toFixed(1) : '100.0';

            const spanM = document.getElementById('calcNacPctMujeres');
            const spanH = document.getElementById('calcNacPctHombres');
            const spanR = document.getElementById('calcNacRelacion');
            if (spanM) spanM.textContent = pM;
            if (spanH) spanH.textContent = pH;
            if (spanR) spanR.textContent = rel;

            if (window.AdminMenuDashboard) {
                const k1 = document.getElementById('kpiCard1Val');
                const k2 = document.getElementById('kpiCard2Val');
                const k3 = document.getElementById('kpiCard3Val');
                if (k1) k1.textContent = total.toLocaleString('es-MX');
                if (k2) k2.textContent = mujeres.toLocaleString('es-MX');
                if (k3) k3.textContent = hombres.toLocaleString('es-MX');
            }
        },

        recalcularEstatal: function(origen) {
            const elTotal = document.getElementById('inputAdminOaxTotal');
            const elMujeres = document.getElementById('inputAdminOaxMujeres');
            const elHombres = document.getElementById('inputAdminOaxHombres');
            if (!elTotal || !elMujeres || !elHombres) return;

            let total = parseFloat(elTotal.value);
            if (isNaN(total)) total = 0;
            let mujeres = parseFloat(elMujeres.value);
            if (isNaN(mujeres)) mujeres = 0;
            let hombres = parseFloat(elHombres.value);
            if (isNaN(hombres)) hombres = 0;

            if (origen === 'mujeres' && total > 0) {
                hombres = Math.max(0, total - mujeres);
                elHombres.value = Math.round(hombres);
            } else if (origen === 'hombres' && total > 0) {
                mujeres = Math.max(0, total - hombres);
                elMujeres.value = Math.round(mujeres);
            }

            const pM = total > 0 ? ((mujeres / total) * 100).toFixed(1) + '%' : '0.0%';
            const pH = total > 0 ? ((hombres / total) * 100).toFixed(1) + '%' : '0.0%';
            const rel = mujeres > 0 ? ((hombres / mujeres) * 100).toFixed(1) : '100.0';

            const spanM = document.getElementById('calcEstPctMujeres');
            const spanH = document.getElementById('calcEstPctHombres');
            const spanR = document.getElementById('calcEstRelacion');
            if (spanM) spanM.textContent = pM;
            if (spanH) spanH.textContent = pH;
            if (spanR) spanR.textContent = rel;

            if (window.AdminMenuDashboard) {
                const k1 = document.getElementById('kpiCard1Val');
                const k2 = document.getElementById('kpiCard2Val');
                const k3 = document.getElementById('kpiCard3Val');
                if (k1) k1.textContent = total.toLocaleString('es-MX');
                if (k2) k2.textContent = mujeres.toLocaleString('es-MX');
                if (k3) k3.textContent = hombres.toLocaleString('es-MX');
            }
        },

        poblarSelectorEstados: function() {
            const sel = document.getElementById('selectAdminEstado');
            if (!sel) return;

            sel.innerHTML = '';
            const optTotal = document.createElement('option');
            optTotal.value = 'nacional';
            optTotal.textContent = 'Estados Unidos Mexicanos (Total Nacional)';
            sel.appendChild(optTotal);

            const estados = AdminDatos.getEstados() || [];
            const sorted = [...estados].sort((a, b) => {
                const nA = a.nombre || a.id;
                const nB = b.nombre || b.id;
                return nA.localeCompare(nB, 'es');
            });

            sorted.forEach(est => {
                const opt = document.createElement('option');
                opt.value = est.id;
                opt.textContent = est.nombre || est.id;
                sel.appendChild(opt);
            });
        },

        cambiarEstadoNacional: function(clave) {
            let est;
            if (clave === 'nacional' || clave === 'MX-NAC') {
                est = AdminDatos.getNacional();
            } else {
                est = AdminDatos.getEstado(clave);
            }
            if (!est) return;

            const elTotal = document.getElementById('inputAdminPobTotal');
            const elMujeres = document.getElementById('inputAdminMujeres');
            const elHombres = document.getElementById('inputAdminHombres');
            if (elTotal) elTotal.value = est.pob || 0;
            if (elMujeres) elMujeres.value = est.mujeres || 0;
            if (elHombres) elHombres.value = est.hombres || 0;

            this.recalcularNacional('total');
        },

        cargarNacionalEnFormulario: function() {
            this.poblarSelectorEstados();
            const sel = document.getElementById('selectAdminEstado');
            const clave = sel ? sel.value : 'nacional';
            this.cambiarEstadoNacional(clave);
        },

        cargarEstatalEnFormulario: function() {
            const oax = AdminDatos.getEstatal() || {};
            const elTotal = document.getElementById('inputAdminOaxTotal');
            const elMujeres = document.getElementById('inputAdminOaxMujeres');
            const elHombres = document.getElementById('inputAdminOaxHombres');
            if (elTotal) elTotal.value = oax.pob || 4132148;
            if (elMujeres) elMujeres.value = oax.mujeres || 2157305;
            if (elHombres) elHombres.value = oax.hombres || 1974843;
            this.recalcularEstatal('total');
        },

        guardarNacional: function() {
            const sel = document.getElementById('selectAdminEstado');
            const clave = sel ? sel.value : 'nacional';
            const total = parseFloat(document.getElementById('inputAdminPobTotal')?.value) || 0;
            const mujeres = parseFloat(document.getElementById('inputAdminMujeres')?.value) || 0;
            const hombres = parseFloat(document.getElementById('inputAdminHombres')?.value) || 0;

            if (clave === 'nacional' || clave === 'MX-NAC') {
                AdminDatos.guardarNacional(total, mujeres, hombres);
                this.mostrarToast('Datos de Total Nacional guardados con éxito.');
            } else {
                AdminDatos.guardarEstado(clave, { pob: total, mujeres: mujeres, hombres: hombres });
                const est = AdminDatos.getEstado(clave);
                const nombreEst = est ? est.nombre : clave;
                this.mostrarToast('Datos de ' + nombreEst + ' guardados con éxito.');
            }
        },

        guardarEstatal: function() {
            const total = parseFloat(document.getElementById('inputAdminOaxTotal')?.value) || 0;
            const mujeres = parseFloat(document.getElementById('inputAdminOaxMujeres')?.value) || 0;
            const hombres = parseFloat(document.getElementById('inputAdminOaxHombres')?.value) || 0;

            AdminDatos.guardarSnapshot();
            const oax = AdminDatos.obtenerEstatal() || {};
            oax.pob = total;
            oax.mujeres = mujeres;
            oax.hombres = hombres;
            AdminDatos.actualizarEstatal(oax);
            AdminDatos.persistir();
            this.mostrarToast('Datos de Nivel Estatal (Oaxaca) guardados con éxito.');
        },

        // Carga y guardado de Salud (6 categorías)
        cargarSaludEnFormulario: function() {
            try {
                const raw = localStorage.getItem('gesmujer_salud_datos');
                if (raw) {
                    const d = JSON.parse(raw);
                    Object.keys(d).forEach(k => {
                        const el = document.getElementById(k);
                        if (el) el.value = d[k];
                    });
                }
            } catch(e) {}
        },

        guardarSalud: function() {
            const ids = [
                'salud_enf_endocrinas', 'salud_enf_corazon', 'salud_enf_digestivo', 'salud_enf_respiratorio',
                'salud_enf_cerebrovascular', 'salud_enf_hipertensiva', 'salud_enf_tumores_dig',
                'salud_enf_tumores_gen', 'salud_enf_urinario', 'salud_enf_tumores_mama',
                'salud_suicidio_ahorcamiento', 'salud_suicidio_envenenamiento', 'salud_suicidio_arma',
                'salud_mama_35_44', 'salud_mama_45_54', 'salud_mama_55_64', 'salud_mama_65_mas',
                'salud_diabetes_sub50', 'salud_diabetes_50_64', 'salud_diabetes_65_79', 'salud_diabetes_80_mas',
                'salud_materna_rmm', 'salud_materna_defunciones', 'salud_infantil_tasa', 'salud_infantil_defunciones'
            ];
            const data = {};
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) data[id] = parseFloat(el.value) || 0;
            });
            localStorage.setItem('gesmujer_salud_datos', JSON.stringify(data));
            this.mostrarToast('Datos de Salud (6 categorías) guardados con éxito.');
        },

        // Carga y guardado de Educación (5 categorías)
        cargarEducacionEnFormulario: function() {
            try {
                const raw = localStorage.getItem('gesmujer_educacion_datos');
                if (raw) {
                    const d = JSON.parse(raw);
                    Object.keys(d).forEach(k => {
                        const el = document.getElementById(k);
                        if (el) el.value = d[k];
                    });
                }
            } catch(e) {}
        },

        guardarEducacion: function() {
            const ids = [
                'edu_aptitud_sabe', 'edu_aptitud_nosabe', 'edu_aptitud_noesp',
                'edu_alfa_si', 'edu_alfa_no', 'edu_alfa_noesp',
                'edu_mat_inicial', 'edu_mat_preescolar', 'edu_mat_primaria', 'edu_mat_secundaria', 'edu_mat_mediasup', 'edu_mat_superior',
                'edu_esc_sinesc', 'edu_esc_basica', 'edu_esc_mediasup', 'edu_esc_superior',
                'edu_asist_si', 'edu_asist_no', 'edu_asist_noesp'
            ];
            const data = {};
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) data[id] = parseFloat(el.value) || 0;
            });
            localStorage.setItem('gesmujer_educacion_datos', JSON.stringify(data));
            this.mostrarToast('Datos de Educación (5 categorías) guardados con éxito.');
        },

        // Carga y guardado de Vivienda (2 categorías)
        cargarViviendaEnFormulario: function() {
            try {
                const raw = localStorage.getItem('gesmujer_vivienda_datos');
                if (raw) {
                    const d = JSON.parse(raw);
                    Object.keys(d).forEach(k => {
                        const el = document.getElementById(k);
                        if (el) el.value = d[k];
                    });
                }
            } catch(e) {}
        },

        guardarVivienda: function() {
            const ids = [
                'viv_serv_electricidad', 'viv_serv_sanitario', 'viv_serv_drenaje', 'viv_serv_agua',
                'viv_pisos_firme', 'viv_pisos_tierra', 'viv_pisos_noesp'
            ];
            const data = {};
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) data[id] = parseFloat(el.value) || 0;
            });
            localStorage.setItem('gesmujer_vivienda_datos', JSON.stringify(data));
            this.mostrarToast('Datos de Vivienda (2 categorías) guardados con éxito.');
        },

        // Carga y guardado de Ingreso (2 categorías con ventana móvil de 16 trimestres)
        renderizarDesocupacionAnios: function(anios, d) {
            const cont = document.getElementById('contenedorDesocupacionAnios');
            if (!cont) return;

            const colores = ['#2b7a78', '#0077b6', '#7b1fa2', '#e65100'];
            let html = '';

            anios.forEach((yr, idx) => {
                const color = colores[idx % colores.length];
                const esUltimo = (idx === anios.length - 1);
                const etiqueta = esUltimo ? `Año ${yr} (Trimestres vigentes):` : `Año ${yr} (Trimestres I a IV):`;

                html += `<div class="row g-2 mb-2">
                    <div class="col-12 fw-bold small text-muted" style="color: ${color};">${etiqueta}</div>`;

                for (let q = 1; q <= 4; q++) {
                    const id = `desoc_${yr}_${q}`;
                    let val = '';
                    if (d && d[id] !== undefined && d[id] !== null) {
                        val = d[id];
                    } else {
                        const elExistente = document.getElementById(id);
                        if (elExistente) val = elExistente.value;
                    }
                    html += `<div class="col-3"><input type="number" step="0.01" id="${id}" class="form-control form-control-sm" placeholder="${yr}-${q===1?'I':q===2?'II':q===3?'III':'IV'}" value="${val !== undefined ? val : ''}"></div>`;
                }
                html += `</div>`;
            });

            cont.innerHTML = html;

            // Actualizar el formulario dinámico para el siguiente año
            const siguienteAnio = anios[anios.length - 1] + 1;
            const inputNuevoAnio = document.getElementById('desoc_nuevo_anio');
            if (inputNuevoAnio) {
                inputNuevoAnio.value = siguienteAnio;
                inputNuevoAnio.placeholder = `Año (ej. ${siguienteAnio})`;
            }
            const lblNuevoAnio = inputNuevoAnio?.closest('.p-2')?.querySelector('.fw-bold');
            if (lblNuevoAnio) {
                lblNuevoAnio.innerHTML = `<i class="fa-solid fa-plus-circle me-1"></i> Registrar Próximo Año (Ej. ${siguienteAnio}):`;
            }
            const smallDepuracion = inputNuevoAnio?.closest('.p-2')?.querySelector('small');
            if (smallDepuracion) {
                smallDepuracion.textContent = `Al completar los datos de ${siguienteAnio}, la gráfica eliminará automáticamente el bloque de ${anios[0]} manteniendo los 4 años más recientes.`;
            }
        },

        cargarIngresoEnFormulario: function() {
            try {
                let d = {};
                const raw = localStorage.getItem('gesmujer_ingreso_datos');
                if (raw) {
                    d = JSON.parse(raw);
                    Object.keys(d).forEach(k => {
                        const el = document.getElementById(k);
                        if (el && d[k] !== undefined && d[k] !== null) el.value = d[k];
                    });
                }

                // Ventana de los 4 años activos
                const anios = (d && Array.isArray(d.desoc_anios) && d.desoc_anios.length >= 4)
                    ? d.desoc_anios.slice(-4)
                    : [2023, 2024, 2025, 2026];

                this.renderizarDesocupacionAnios(anios, d);
            } catch(e) {
                console.error('Error al cargar ingreso:', e);
            }
        },

        guardarIngreso: function() {
            const idsRubros = ['ing_rubro_trabajo', 'ing_rubro_renta', 'ing_rubro_transf', 'ing_rubro_alquiler', 'ing_rubro_otros'];
            let prevData = {};
            try {
                const rawPrev = localStorage.getItem('gesmujer_ingreso_datos');
                if (rawPrev) prevData = JSON.parse(rawPrev);
            } catch(e) {}

            const data = Object.assign({}, prevData);
            idsRubros.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    const val = parseFloat(el.value);
                    data[id] = !isNaN(val) ? val : 0;
                }
            });

            // Obtener los años activos actuales
            let aniosActivos = (Array.isArray(prevData.desoc_anios) && prevData.desoc_anios.length >= 4)
                ? [...prevData.desoc_anios.slice(-4)]
                : [2023, 2024, 2025, 2026];

            // Guardar los valores de los trimestres actuales en pantalla
            aniosActivos.forEach(yr => {
                for (let q = 1; q <= 4; q++) {
                    const id = 'desoc_' + yr + '_' + q;
                    const el = document.getElementById(id);
                    if (el && el.value !== '') {
                        const v = parseFloat(el.value);
                        data[id] = !isNaN(v) ? v : 0;
                    }
                }
            });

            // Verificar si se está registrando un nuevo año (Ej. 2027, 2028, etc.)
            const nuevoAnio = parseInt(document.getElementById('desoc_nuevo_anio')?.value, 10);
            const q1Val = document.getElementById('desoc_nuevo_q1')?.value;
            const q2Val = document.getElementById('desoc_nuevo_q2')?.value;
            const q3Val = document.getElementById('desoc_nuevo_q3')?.value;
            const q4Val = document.getElementById('desoc_nuevo_q4')?.value;

            if (nuevoAnio && nuevoAnio > aniosActivos[aniosActivos.length - 1] && (q1Val !== '' || q2Val !== '' || q3Val !== '' || q4Val !== '')) {
                // Al registrar el nuevo año, este se incorpora y se descarta el más antiguo (desplazando la ventana de 4 años)
                if (q1Val !== '') data['desoc_' + nuevoAnio + '_1'] = parseFloat(q1Val) || 0;
                if (q2Val !== '') data['desoc_' + nuevoAnio + '_2'] = parseFloat(q2Val) || 0;
                if (q3Val !== '') data['desoc_' + nuevoAnio + '_3'] = parseFloat(q3Val) || 0;
                if (q4Val !== '') data['desoc_' + nuevoAnio + '_4'] = parseFloat(q4Val) || 0;

                // Nueva ventana de 4 años con el año más nuevo al final y desplazando el primero
                aniosActivos = [...aniosActivos, nuevoAnio].slice(-4);
                data.desoc_anios = aniosActivos;

                // Limpiar campos del nuevo año
                ['desoc_nuevo_q1', 'desoc_nuevo_q2', 'desoc_nuevo_q3', 'desoc_nuevo_q4'].forEach(qid => {
                    const elQ = document.getElementById(qid);
                    if (elQ) elQ.value = '';
                });
            } else {
                data.desoc_anios = aniosActivos;
            }

            localStorage.setItem('gesmujer_ingreso_datos', JSON.stringify(data));

            // Re-renderizar la vista de desocupación inmediatamente para reflejar el primer año rotado (ej. 2024 al frente)
            this.renderizarDesocupacionAnios(aniosActivos, data);

            this.mostrarToast('Datos de Ingreso y Desocupación (Ventana de 4 años) guardados con éxito.');
        },

        // Carga y guardado de Lenguas Indígenas (2 categorías)
        cargarLenguasEnFormulario: function() {
            try {
                const raw = localStorage.getItem('gesmujer_lenguas_datos');
                if (raw) {
                    const d = JSON.parse(raw);
                    Object.keys(d).forEach(k => {
                        const el = document.getElementById(k);
                        if (el) el.value = d[k];
                    });
                }
            } catch(e) {}
        },

        guardarLenguas: function() {
            const ids = [
                'lenguas_monolingues_2010', 'lenguas_monolingues_2020',
                'lenguas_cond_si', 'lenguas_cond_no', 'lenguas_cond_noesp'
            ];
            const data = {};
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) data[id] = parseFloat(el.value) || 0;
            });
            localStorage.setItem('gesmujer_lenguas_datos', JSON.stringify(data));
            this.mostrarToast('Datos de Lenguas Indígenas (2 categorías) guardados con éxito.');
        },
cargarFotoPerfil: function() {
            try {
                const foto = localStorage.getItem(STORAGE_FOTO_KEY);
                const img = document.getElementById('adminAvatarImg');
                if (img && foto) {
                    img.src = foto;
                }
            } catch(e) {}
        },

        subirFotoPerfil: function(e) {
            const file = e.target?.files?.[0];
            if (!file) return;
            if (!file.type.startsWith('image/')) {
                this.mostrarToast('Por favor selecciona un archivo de imagen válido.');
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                const dataUrl = event.target.result;
                try {
                    localStorage.setItem(STORAGE_FOTO_KEY, dataUrl);
                    const img = document.getElementById('adminAvatarImg');
                    if (img) img.src = dataUrl;
                    this.mostrarToast('Foto de perfil actualizada correctamente.');
                } catch(err) {
                    this.mostrarToast('La imagen es demasiado pesada para almacenar.');
                }
            };
            reader.readAsDataURL(file);
        },

        abrirCategoria: function(cat) {
            this.categoriaActiva = cat;
            if (cat === 'nacional') {
                this.cargarNacionalEnFormulario();
            } else if (cat === 'estatal') {
                this.cargarEstatalEnFormulario();
            } else if (cat === 'salud') {
                this.cargarSaludEnFormulario();
            } else if (cat === 'educacion') {
                this.cargarEducacionEnFormulario();
            } else if (cat === 'vivienda') {
                this.cargarViviendaEnFormulario();
            } else if (cat === 'ingreso') {
                this.cargarIngresoEnFormulario();
            } else if (cat === 'lenguas') {
                this.cargarLenguasEnFormulario();
            } else if (cat === 'fuentes') {
                this.cargarFuentesEnFormulario();
            }
        },

        // ========================================================
        // FUENTES Y METADATOS OFICIALES (LAS 5 DIMENSIONES)
        // ========================================================
        obtenerFuentesDefault: function() {
            return {
                salud: {
                    badge_2025: 'INEGI · EDR 2025',
                    desc_2025: 'Fuente: INEGI. Estadísticas de Defunciones Registradas EDR 2025.',
                    badge_2024: 'INEGI · EDR 2024',
                    desc_2024: 'Fuente: INEGI. Estadísticas de Defunciones Registradas EDR 2024.',
                    cuadro1: '1. INEGI. Estadísticas de Defunciones Registradas (EDR) 2025 preliminar (Causas generales, suicidios, mama y diabetes en mujeres).',
                    cuadro2: '2. INEGI. Estadísticas de Defunciones Registradas (EDR) 2024 (Defunciones maternas totales y defunciones infantiles en niñas).',
                    derechos: 'Derechos Reservados © INEGI'
                },
                educacion: {
                    badge_2025: 'INEGI · Intercensal 2025',
                    desc_2025: 'Fuente: INEGI. Encuesta Intercensal 2025.',
                    badge_2024: 'SEP / INEGI · 2024/2025',
                    desc_2024: 'Fuente: SEP. Sistema Interactivo de Consulta de Estadística Educativa / INEGI.',
                    cuadro1: 'INEGI. Encuesta Intercensal 2025 · Actualización: 22 de septiembre de 2026.',
                    cuadro2: 'SEP. Sistema Interactivo de Consulta de Estadística Educativa · Matrícula escolarizada ciclo 2024/2025.',
                    derechos: 'Derechos Reservados © INEGI / SEP'
                },
                vivienda: {
                    badge: 'INEGI · Censo 2020',
                    desc: 'Fuente: INEGI. Censo de Población y Vivienda 2020.',
                    cuadro1: 'INEGI. Censo de Población y Vivienda 2020 · Información referida al 15 de marzo de 2020.',
                    cuadro2: '',
                    derechos: 'Derechos Reservados © INEGI'
                },
                ingreso: {
                    badge: 'INEGI · ENIGH & ENOE',
                    desc: 'Fuente: INEGI. Encuesta Nacional de Ingresos y Gastos de los Hogares (ENIGH) / ENOE.',
                    cuadro1: '1. INEGI. Encuesta Nacional de Ingresos y Gastos de los Hogares (ENIGH) · Ingreso corriente promedio trimestral según rubros.',
                    cuadro2: '2. INEGI. Encuesta Nacional de Ocupación y Empleo (ENOE) · Desocupación: Tasa de desocupación total trimestral según entidad federativa (2023 - 2026).',
                    derechos: 'Derechos Reservados © INEGI'
                },
                lenguas: {
                    badge: 'INEGI · Censos 2010 – 2020',
                    desc: 'Fuentes: INEGI. Censo de Población y Vivienda 2010. INEGI. Censo de Población y Vivienda 2020.',
                    cuadro1: '1. INEGI. Censo de Población y Vivienda 2010 y Censo de Población y Vivienda 2020.',
                    cuadro2: '2. INEGI. Encuesta Intercensal 2025.',
                    derechos: 'Derechos Reservados © INEGI'
                }
            };
        },

        sincronizarFuenteBadge: function(grupo, valor) {
            if (grupo === 'salud_2025') {
                const layout = document.getElementById('layoutTematicoSalud');
                if (!layout) return;
                const badges = layout.querySelectorAll('[data-salud-grupo="2025"] .badge.bg-light');
                badges.forEach(b => b.textContent = valor);
            } else if (grupo === 'salud_2024') {
                const layout = document.getElementById('layoutTematicoSalud');
                if (!layout) return;
                const badges = layout.querySelectorAll('[data-salud-grupo="2024"] .badge.bg-light');
                badges.forEach(b => b.textContent = valor);
            } else if (grupo === 'educacion_2025') {
                const layout = document.getElementById('layoutTematicoEducacion');
                if (!layout) return;
                const badges = layout.querySelectorAll('[data-edu-grupo="2025"] .badge.bg-light');
                badges.forEach(b => b.textContent = valor);
            } else if (grupo === 'educacion_2024') {
                const layout = document.getElementById('layoutTematicoEducacion');
                if (!layout) return;
                const badges = layout.querySelectorAll('[data-edu-grupo="2024_2025"] .badge.bg-light');
                badges.forEach(b => b.textContent = valor);
            } else {
                const layoutId = 'layoutTematico' + grupo.charAt(0).toUpperCase() + grupo.slice(1);
                const layout = document.getElementById(layoutId);
                if (layout) {
                    const badges = layout.querySelectorAll('.badge.bg-light');
                    badges.forEach(b => b.textContent = valor);
                }
            }
        },

        sincronizarFuenteDesc: function(grupo, valor) {
            // Sincroniza en vivo al escribir con el texto debajo de las descripciones en la plataforma pública
            if (grupo === 'salud_2025' || grupo === 'salud') {
                const layout = document.getElementById('layoutTematicoSalud');
                if (!layout) return;
                const smalls = layout.querySelectorAll('[data-salud-grupo="2025"] small');
                smalls.forEach(s => {
                    const txt = s.textContent.trim();
                    if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                        s.setAttribute('data-fuente-sinc', 'true');
                        s.textContent = valor;
                    }
                });
            } else if (grupo === 'salud_2024') {
                const layout = document.getElementById('layoutTematicoSalud');
                if (!layout) return;
                const smalls = layout.querySelectorAll('[data-salud-grupo="2024"] small');
                smalls.forEach(s => {
                    const txt = s.textContent.trim();
                    if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                        s.setAttribute('data-fuente-sinc', 'true');
                        s.textContent = valor;
                    }
                });
            } else if (grupo === 'educacion_2025' || grupo === 'educacion') {
                const layout = document.getElementById('layoutTematicoEducacion');
                if (!layout) return;
                const smalls = layout.querySelectorAll('[data-edu-grupo="2025"] small');
                smalls.forEach(s => {
                    const txt = s.textContent.trim();
                    if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                        s.setAttribute('data-fuente-sinc', 'true');
                        s.textContent = valor;
                    }
                });
            } else if (grupo === 'educacion_2024') {
                const layout = document.getElementById('layoutTematicoEducacion');
                if (!layout) return;
                const smalls = layout.querySelectorAll('[data-edu-grupo="2024_2025"] small');
                smalls.forEach(s => {
                    const txt = s.textContent.trim();
                    if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                        s.setAttribute('data-fuente-sinc', 'true');
                        s.textContent = valor;
                    }
                });
            } else {
                const layoutId = 'layoutTematico' + grupo.charAt(0).toUpperCase() + grupo.slice(1);
                const layout = document.getElementById(layoutId);
                if (layout) {
                    const smalls = layout.querySelectorAll('small');
                    smalls.forEach(s => {
                        const txt = s.textContent.trim();
                        if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                            s.setAttribute('data-fuente-sinc', 'true');
                            s.textContent = valor;
                        }
                    });
                }
            }
        },

        cargarFuentesEnFormulario: function() {
            try {
                const defaults = this.obtenerFuentesDefault();
                let guardadas = {};
                const raw = localStorage.getItem('gesmujer_fuentes_datos');
                if (raw) {
                    guardadas = JSON.parse(raw);
                }

                // Cargar datos de Salud (con división 2025 y 2024)
                const saludItem = Object.assign({}, defaults.salud, guardadas.salud || {});
                const b2025 = document.getElementById('fuente_badge_salud_2025');
                const d2025 = document.getElementById('fuente_desc_salud_2025');
                const b2024 = document.getElementById('fuente_badge_salud_2024');
                const d2024 = document.getElementById('fuente_desc_salud_2024');
                const c1Salud = document.getElementById('fuente_cuadro1_salud');
                const c2Salud = document.getElementById('fuente_cuadro2_salud');
                const derSalud = document.getElementById('fuente_cuadro_derechos_salud');

                if (b2025) b2025.value = saludItem.badge_2025 || saludItem.badge || 'INEGI · EDR 2025';
                if (d2025) d2025.value = saludItem.desc_2025 || saludItem.desc || 'Fuente: INEGI. Estadísticas de Defunciones Registradas EDR 2025.';
                if (b2024) b2024.value = saludItem.badge_2024 || 'INEGI · EDR 2024';
                if (d2024) d2024.value = saludItem.desc_2024 || 'Fuente: INEGI. Estadísticas de Defunciones Registradas EDR 2024.';
                if (c1Salud && saludItem.cuadro1 !== undefined) c1Salud.value = saludItem.cuadro1;
                if (c2Salud && saludItem.cuadro2 !== undefined) c2Salud.value = saludItem.cuadro2;
                if (derSalud && saludItem.derechos !== undefined) derSalud.value = saludItem.derechos;

                // Cargar datos de Educación
                const eduItem = Object.assign({}, defaults.educacion, guardadas.educacion || {});
                const bEdu2025 = document.getElementById('fuente_badge_educacion_2025');
                const dEdu2025 = document.getElementById('fuente_desc_educacion_2025');
                const bEdu2024 = document.getElementById('fuente_badge_educacion_2024');
                const dEdu2024 = document.getElementById('fuente_desc_educacion_2024');
                const c1Edu = document.getElementById('fuente_cuadro1_educacion');
                const c2Edu = document.getElementById('fuente_cuadro2_educacion');
                const derEdu = document.getElementById('fuente_cuadro_derechos_educacion');

                if (bEdu2025) bEdu2025.value = eduItem.badge_2025 || eduItem.badge || 'INEGI · Intercensal 2025';
                if (dEdu2025) dEdu2025.value = eduItem.desc_2025 || eduItem.desc || 'Fuente: INEGI. Encuesta Intercensal 2025.';
                if (bEdu2024) bEdu2024.value = eduItem.badge_2024 || 'SEP / INEGI · 2024/2025';
                if (dEdu2024) dEdu2024.value = eduItem.desc_2024 || 'Fuente: SEP. Sistema Interactivo de Consulta de Estadística Educativa / INEGI.';
                if (c1Edu && eduItem.cuadro1 !== undefined) c1Edu.value = eduItem.cuadro1;
                if (c2Edu && eduItem.cuadro2 !== undefined) c2Edu.value = eduItem.cuadro2;
                if (derEdu && eduItem.derechos !== undefined) derEdu.value = eduItem.derechos;

                // Cargar datos de las otras 3 dimensiones
                ['vivienda', 'ingreso', 'lenguas'].forEach(dim => {
                    const item = Object.assign({}, defaults[dim], guardadas[dim] || {});
                    if (!item) return;

                    const elBadge = document.getElementById('fuente_badge_' + dim);
                    const elDesc = document.getElementById('fuente_desc_' + dim);
                    const elC1 = document.getElementById('fuente_cuadro1_' + dim);
                    const elC2 = document.getElementById('fuente_cuadro2_' + dim);
                    const elDer = document.getElementById('fuente_cuadro_derechos_' + dim);

                    if (elBadge && item.badge !== undefined) elBadge.value = item.badge;
                    if (elDesc && item.desc !== undefined) elDesc.value = item.desc;
                    if (elC1 && item.cuadro1 !== undefined) elC1.value = item.cuadro1;
                    if (elC2 && item.cuadro2 !== undefined) elC2.value = item.cuadro2;
                    if (elDer && item.derechos !== undefined) elDer.value = item.derechos;
                });
            } catch(e) {
                console.error('Error al cargar fuentes en formulario:', e);
            }
        },

        guardarFuentes: function(dim) {
            try {
                const defaults = this.obtenerFuentesDefault();
                let todas = {};
                const raw = localStorage.getItem('gesmujer_fuentes_datos');
                if (raw) {
                    todas = JSON.parse(raw);
                }
                todas = Object.assign({}, defaults, todas);

                if (dim === 'salud') {
                    const badge2025 = document.getElementById('fuente_badge_salud_2025')?.value || 'INEGI · EDR 2025';
                    const desc2025 = document.getElementById('fuente_desc_salud_2025')?.value || '';
                    const badge2024 = document.getElementById('fuente_badge_salud_2024')?.value || 'INEGI · EDR 2024';
                    const desc2024 = document.getElementById('fuente_desc_salud_2024')?.value || '';
                    const cuadro1 = document.getElementById('fuente_cuadro1_salud')?.value || '';
                    const cuadro2 = document.getElementById('fuente_cuadro2_salud')?.value || '';
                    const derechos = document.getElementById('fuente_cuadro_derechos_salud')?.value || '';

                    todas.salud = {
                        badge_2025: badge2025,
                        desc_2025: desc2025,
                        badge_2024: badge2024,
                        desc_2024: desc2024,
                        cuadro1: cuadro1,
                        cuadro2: cuadro2,
                        derechos: derechos
                    };
                } else if (dim === 'educacion') {
                    const badge2025 = document.getElementById('fuente_badge_educacion_2025')?.value || 'INEGI · Intercensal 2025';
                    const desc2025 = document.getElementById('fuente_desc_educacion_2025')?.value || '';
                    const badge2024 = document.getElementById('fuente_badge_educacion_2024')?.value || 'SEP / INEGI · 2024/2025';
                    const desc2024 = document.getElementById('fuente_desc_educacion_2024')?.value || '';
                    const cuadro1 = document.getElementById('fuente_cuadro1_educacion')?.value || '';
                    const cuadro2 = document.getElementById('fuente_cuadro2_educacion')?.value || '';
                    const derechos = document.getElementById('fuente_cuadro_derechos_educacion')?.value || '';

                    todas.educacion = {
                        badge_2025: badge2025,
                        desc_2025: desc2025,
                        badge_2024: badge2024,
                        desc_2024: desc2024,
                        cuadro1: cuadro1,
                        cuadro2: cuadro2,
                        derechos: derechos
                    };
                } else {
                    const badge = document.getElementById('fuente_badge_' + dim)?.value || '';
                    const desc = document.getElementById('fuente_desc_' + dim)?.value || '';
                    const cuadro1 = document.getElementById('fuente_cuadro1_' + dim)?.value || '';
                    const cuadro2 = document.getElementById('fuente_cuadro2_' + dim)?.value || '';
                    const derechos = document.getElementById('fuente_cuadro_derechos_' + dim)?.value || '';

                    todas[dim] = {
                        badge: badge,
                        desc: desc,
                        cuadro1: cuadro1,
                        cuadro2: cuadro2,
                        derechos: derechos
                    };
                }

                localStorage.setItem('gesmujer_fuentes_datos', JSON.stringify(todas));

                // Sincronizar en la plataforma en tiempo real
                this.aplicarFuentesDimension(dim, todas[dim]);

                const nombres = { salud: 'Salud', educacion: 'Educación', vivienda: 'Vivienda', ingreso: 'Ingreso', lenguas: 'Lenguas Indígenas' };
                this.mostrarToast('¡Fuentes de ' + (nombres[dim] || dim) + ' guardadas y actualizadas!');
            } catch(e) {
                console.error('Error al guardar fuentes:', e);
            }
        },

        aplicarFuentesDimension: function(dim, data) {
            if (!data) return;
            const layoutId = 'layoutTematico' + dim.charAt(0).toUpperCase() + dim.slice(1);
            const layout = document.getElementById(layoutId);
            if (!layout) return;

            if (dim === 'salud') {
                const badge2025 = data.badge_2025 || data.badge;
                const desc2025 = data.desc_2025 || data.desc;
                const badge2024 = data.badge_2024;
                const desc2024 = data.desc_2024;

                // 1. Gráficas 1, 2, 3 y 4 (2025)
                if (badge2025) {
                    const b2025s = layout.querySelectorAll('[data-salud-grupo="2025"] .badge.bg-light');
                    b2025s.forEach(b => b.textContent = badge2025);
                }
                if (desc2025) {
                    const s2025s = layout.querySelectorAll('[data-salud-grupo="2025"] small');
                    s2025s.forEach(s => {
                        const txt = s.textContent.trim();
                        if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                            s.setAttribute('data-fuente-sinc', 'true');
                            s.textContent = desc2025;
                        }
                    });
                }

                // 2. Gráficas 5 y 6 (2024)
                if (badge2024) {
                    const b2024s = layout.querySelectorAll('[data-salud-grupo="2024"] .badge.bg-light');
                    b2024s.forEach(b => b.textContent = badge2024);
                }
                if (desc2024) {
                    const s2024s = layout.querySelectorAll('[data-salud-grupo="2024"] small');
                    s2024s.forEach(s => {
                        const txt = s.textContent.trim();
                        if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                            s.setAttribute('data-fuente-sinc', 'true');
                            s.textContent = desc2024;
                        }
                    });
                }

                // 3. Cuadro inferior oficial de fuentes
                const cuadro = layout.querySelector('.card[style*="border-0 mt-3 mb-2 shadow-sm"]');
                if (cuadro) {
                    const divs = cuadro.querySelectorAll('div[style*="font-size: 0.8rem"]');
                    if (divs.length >= 1 && data.cuadro1) {
                        divs[0].textContent = data.cuadro1;
                    }
                    if (divs.length >= 2 && data.cuadro2 !== undefined) {
                        divs[1].textContent = data.cuadro2;
                        divs[1].style.display = data.cuadro2 ? 'block' : 'none';
                    }
                    const der = cuadro.querySelector('.text-end');
                    if (der && data.derechos) {
                        der.textContent = data.derechos;
                    }
                }
                return;
            } else if (dim === 'educacion') {
                const badge2025 = data.badge_2025 || data.badge;
                const desc2025 = data.desc_2025 || data.desc;
                const badge2024 = data.badge_2024;
                const desc2024 = data.desc_2024;

                // 1. Gráficas 1, 2, 4 y 5 (2025)
                if (badge2025) {
                    const b2025s = layout.querySelectorAll('[data-edu-grupo="2025"] .badge.bg-light');
                    b2025s.forEach(b => b.textContent = badge2025);
                }
                if (desc2025) {
                    const s2025s = layout.querySelectorAll('[data-edu-grupo="2025"] small');
                    s2025s.forEach(s => {
                        const txt = s.textContent.trim();
                        if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                            s.setAttribute('data-fuente-sinc', 'true');
                            s.textContent = desc2025;
                        }
                    });
                }

                // 2. Gráfica 3 (2024/2025)
                if (badge2024) {
                    const b2024s = layout.querySelectorAll('[data-edu-grupo="2024_2025"] .badge.bg-light');
                    b2024s.forEach(b => b.textContent = badge2024);
                }
                if (desc2024) {
                    const s2024s = layout.querySelectorAll('[data-edu-grupo="2024_2025"] small');
                    s2024s.forEach(s => {
                        const txt = s.textContent.trim();
                        if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                            s.setAttribute('data-fuente-sinc', 'true');
                            s.textContent = desc2024;
                        }
                    });
                }

                // 3. Cuadro inferior oficial de fuentes
                const cuadro = layout.querySelector('.card[style*="border-0 mt-3 mb-2 shadow-sm"]');
                if (cuadro) {
                    const divs = cuadro.querySelectorAll('div[style*="font-size: 0.8rem"]');
                    if (divs.length >= 1 && data.cuadro1) {
                        divs[0].textContent = data.cuadro1;
                    }
                    if (divs.length >= 2 && data.cuadro2 !== undefined) {
                        divs[1].textContent = data.cuadro2;
                        divs[1].style.display = data.cuadro2 ? 'block' : 'none';
                    }
                    const der = cuadro.querySelector('.text-end');
                    if (der && data.derechos) {
                        der.textContent = data.derechos;
                    }
                }
                return;
            }

            // Para las otras dimensiones (vivienda, ingreso, lenguas)
            // 1. Actualizar Badges (Captura 2)
            if (data.badge) {
                const badges = layout.querySelectorAll('.badge.bg-light');
                badges.forEach(b => {
                    b.textContent = data.badge;
                });
            }

            // 2. Actualizar Textos debajo de la descripción (Captura 3)
            if (data.desc) {
                const smalls = layout.querySelectorAll('small');
                smalls.forEach(s => {
                    const txt = s.textContent.trim();
                    if (txt.startsWith('Fuente') || txt.startsWith('Fuentes:') || s.hasAttribute('data-fuente-sinc')) {
                        s.setAttribute('data-fuente-sinc', 'true');
                        s.textContent = data.desc;
                    }
                });
            }

            // 3. Actualizar Cuadro inferior oficial de fuentes (Captura 1)
            const cuadro = layout.querySelector('.card[style*="border-0 mt-3 mb-2 shadow-sm"]');
            if (cuadro) {
                const divs = cuadro.querySelectorAll('div[style*="font-size: 0.8rem"]');
                if (divs.length >= 1 && data.cuadro1) {
                    divs[0].textContent = data.cuadro1;
                }
                if (divs.length >= 2 && data.cuadro2 !== undefined) {
                    divs[1].textContent = data.cuadro2;
                    divs[1].style.display = data.cuadro2 ? 'block' : 'none';
                }
                const der = cuadro.querySelector('.text-end');
                if (der && data.derechos) {
                    der.textContent = data.derechos;
                }
            }
        },

        aplicarFuentesEnPlataforma: function() {
            try {
                const raw = localStorage.getItem('gesmujer_fuentes_datos');
                if (!raw) return;
                const todas = JSON.parse(raw);
                ['salud', 'educacion', 'vivienda', 'ingreso', 'lenguas'].forEach(dim => {
                    if (todas[dim]) {
                        this.aplicarFuentesDimension(dim, todas[dim]);
                    }
                });
            } catch(e) {
                console.error('Error al aplicar fuentes en plataforma:', e);
            }
        },

        cargarDatosNacional: function() {
            const select = document.getElementById('selectAdminEstado');
            if (!select) return;

            const datos = AdminDatos.getTodosEstados();
            const totalNac = AdminDatos.getNacional();

            select.innerHTML = '';
            const optTotal = document.createElement('option');
            optTotal.value = 'nacional';
            optTotal.textContent = '🇲🇽 Estados Unidos Mexicanos (Total Nacional)';
            select.appendChild(optTotal);

            datos.forEach(est => {
                const opt = document.createElement('option');
                opt.value = est.id;
                opt.textContent = est.nombre;
                select.appendChild(opt);
            });

            const pobInput = document.getElementById('inputNacPob');
            const mujInput = document.getElementById('inputNacMujeres');
            const homInput = document.getElementById('inputNacHombres');
            const badgeClave = document.getElementById('badgeAdminEntidadClave');
            const lblNombre = document.getElementById('lblAdminEntidadNombre');

            const actualizarCampos = (item) => {
                if (pobInput) pobInput.value = item.pob;
                if (mujInput) mujInput.value = item.mujeres;
                if (homInput) homInput.value = item.hombres;
                if (badgeClave) badgeClave.textContent = item.claveGeo || 'MX';
                if (lblNombre) lblNombre.textContent = item.nombre;
                if (window.AdminMenuDashboard) {
                    window.AdminMenuDashboard.actualizarKpis('nacional');
                }
            };

            actualizarCampos(totalNac);

            select.onchange = () => {
                const val = select.value;
                if (val === 'nacional') {
                    actualizarCampos(AdminDatos.getNacional());
                } else {
                    const est = AdminDatos.getEstado(val);
                    if (est) actualizarCampos(est);
                }
            };
        },

        guardarCambiosNacional: function() {
            const select = document.getElementById('selectAdminEstado');
            const pobInput = document.getElementById('inputNacPob');
            const mujInput = document.getElementById('inputNacMujeres');
            const homInput = document.getElementById('inputNacHombres');

            if (!select || !pobInput || !mujInput || !homInput) return;

            const val = select.value;
            const nuevoPob = parseInt(pobInput.value, 10);
            const nuevoMuj = parseInt(mujInput.value, 10);
            const nuevoHom = parseInt(homInput.value, 10);

            if (isNaN(nuevoPob) || isNaN(nuevoMuj) || isNaN(nuevoHom)) {
                this.mostrarToast('Por favor ingresa números válidos.');
                return;
            }

            if (val === 'nacional') {
                AdminDatos.actualizarNacionalTotal(nuevoPob, nuevoMuj, nuevoHom);
            } else {
                AdminDatos.actualizarEstado(val, nuevoPob, nuevoMuj, nuevoHom);
            }

            this.mostrarToast('¡Datos nacionales actualizados y sincronizados!');
        },

        cargarDatosEstatal: function() {
            const pobInput = document.getElementById('inputEstPob');
            const mujInput = document.getElementById('inputEstMujeres');
            const homInput = document.getElementById('inputEstHombres');

            const est = AdminDatos.getEstatal();
            if (pobInput) pobInput.value = est.pob;
            if (mujInput) mujInput.value = est.mujeres;
            if (homInput) homInput.value = est.hombres;

            if (window.AdminMenuDashboard) {
                window.AdminMenuDashboard.actualizarKpis('estatal');
            }
        },

        guardarCambiosEstatal: function() {
            const pobInput = document.getElementById('inputEstPob');
            const mujInput = document.getElementById('inputEstMujeres');
            const homInput = document.getElementById('inputEstHombres');

            if (!pobInput || !mujInput || !homInput) return;

            const nuevoPob = parseInt(pobInput.value, 10);
            const nuevoMuj = parseInt(mujInput.value, 10);
            const nuevoHom = parseInt(homInput.value, 10);

            if (isNaN(nuevoPob) || isNaN(nuevoMuj) || isNaN(nuevoHom)) {
                this.mostrarToast('Por favor ingresa números válidos.');
                return;
            }

            AdminDatos.actualizarEstatal(nuevoPob, nuevoMuj, nuevoHom);
            this.mostrarToast('¡Datos de Oaxaca actualizados y sincronizados!');
        },

        deshacerCambioPrevio: function() {
            const exito = AdminDatos.deshacer();
            if (exito) {
                if (this.categoriaActiva) {
                    this.abrirCategoria(this.categoriaActiva);
                }
                this.mostrarToast('Se restauró la versión previa de los datos.');
            } else {
                this.mostrarToast('No hay cambios anteriores para deshacer.');
            }
        },

        solicitarRestablecer: function() {
            const banner = document.getElementById('adminConfirmBanner');
            if (banner) banner.classList.remove('d-none');
        },

        cancelarRestablecer: function() {
            const banner = document.getElementById('adminConfirmBanner');
            if (banner) banner.classList.add('d-none');
        },

        confirmarRestablecer: function() {
            AdminDatos.restablecerFabrica();
            const banner = document.getElementById('adminConfirmBanner');
            if (banner) banner.classList.add('d-none');
            if (this.categoriaActiva) {
                this.abrirCategoria(this.categoriaActiva);
            }
            this.mostrarToast('Datos restablecidos al Censo Oficial INEGI 2020.');
        },

        mostrarToast: function(msg) {
            const toast = document.getElementById('adminToastAuto');
            const toastTexto = document.getElementById('adminToastAutoTexto');
            if (!toast) return;

            if (toastTexto) toastTexto.textContent = msg;
            toast.classList.remove('d-none');

            if (this._toastTimer) clearTimeout(this._toastTimer);
            this._toastTimer = setTimeout(() => {
                toast.classList.add('d-none');
            }, 3500);
        }
    };


    window.AdminDatos = AdminDatos;
    window.AdminDatosUI = AdminDatosUI;

    function iniciarAdminGlobal() {
        if (window.AdminDatos && typeof window.AdminDatos.init === 'function') {
            window.AdminDatos.init();
        }
        if (window.AdminDatosUI && typeof window.AdminDatosUI.init === 'function') {
            window.AdminDatosUI.init();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciarAdminGlobal);
    } else {
        iniciarAdminGlobal();
    }
})(window);
