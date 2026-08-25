
        // --- BASE DE DATOS COMPLETA DE TIPIFICACIONES (FIDELIZACIÓN + RETENCIÓN + BAJAS + DESISTIMIENTO) ---
        const tipificacionesDB = [
            // --- NUEVAS: FIDELIZACIÓN BAJAS (image_4be284.png, image_4be2bf.png, image_4be2fc.png) ---
            {
                id: "baja-clientes-no-gestionables",
                label: "Bajas - Clientes No Gestionables",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Clientes No Gestionables",
                motivos: ["Reclamos", "Fraude", "Usuarios", "Instalación no concretada / incompleta", "Convenio", "Cliente Suspendido"],
                descripcion: "Registro de baja que no se debe tipificar a menos que se tenga autorización expresa del supervisor.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-competencia",
                label: "Bajas - Competencia",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Competencia",
                motivos: ["CLARO", "MOVISTAR", "DIRECTV", "ENTEL", "WOW", "No menciona/Otra empresa", "Bantel", "Bitel", "MIFIBRA", "FiberPRO", "Nubyx", "WIN NEGOCIOS/EMPRESAS", "Negociación Interrumpida"],
                descripcion: "Registro de baja porque el cliente ha decidido migrar por oferta recibida de otro operador competidor.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-facturacion",
                label: "Bajas - Problemas de Facturación",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Facturación",
                motivos: ["Cobro de prorrateo / cuota instalación", "Demora en emisión recibo", "Ajuste/Descuento/Devolución no realizado", "No reconoce monto", "Error en el cargo fijo", "Se facturó estando suspendido el servicio", "No reconoce cargos por servicios solicitados", "No envío de recibo", "Negociación Interrumpida"],
                descripcion: "Registro de baja debido a inconformidad o problemas recurrentes con su recibo o facturación mensual.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-flipping",
                label: "Bajas - Flipping",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "FLIPPING",
                motivos: ["A NOMBRE DEL MISMO CLIENTE", "A NOMBRE DE UN FAMILIAR / AMIGO"],
                descripcion: "Registro de baja cuando el cliente intenta cancelar el servicio para dar un alta nueva con promociones a nombre propio o familiar.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-incumplimiento-win",
                label: "Bajas - Incumplimiento WIN",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Incumplimiento WIN",
                motivos: ["Gestión Visita Técnica", "Gestión Instalación", "Gestión Ventas", "Gestión ATC", "Gestión Fidelización", "Negociación Interrumpida"],
                descripcion: "Registro de baja porque alguna de las áreas operativas de WIN incumplió con los ofrecimientos u ofertas prometidas al cliente.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-motivos-economicos",
                label: "Bajas - Motivos Económicos",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Motivos Económicos",
                motivos: ["Solicita prórroga de pago", "No puede pagar el total de recibo", "Se quedó sin trabajo", "Renovación de beneficio", "Cliente en desacuerdo con costo del plan/SVA", "Negociación Interrumpida"],
                descripcion: "Registro de baja sustentado en inconvenientes financieros del usuario o imposibilidad de solventar el costo regular.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-mudanza-viaje",
                label: "Bajas - Mudanza / Viaje del Titular",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Mudanza/Viaje",
                motivos: ["Viaje al extranjero - Indefinido", "Viaje dentro del país - Sin cobertura", "Viaje dentro del país - Con cobertura", "Mudanza - Sin cobertura", "Mudanza - Con cobertura", "Mudanza - Sin facilidades técnicas", "Mudanza - Ya cuenta con Win", "Viaje dentro del país - No indica destino", "Mudanza - No indica destino", "Negociación Interrumpida"],
                descripcion: "Registro de baja justificado por el cambio de domicilio o viaje fuera de la zona de cobertura técnica de WIN.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-problemas-servicio",
                label: "Bajas - Problemas con el Servicio de Internet",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Problemas con el servicio",
                motivos: ["Intermitencia en la señal", "Insatisfecho con la velocidad", "Pérdida Total del Servicio", "Problemas de WIFI", "No llega ancho de banda", "Problemas con juegos/Latencia", "Sin acceso a páginas/Aplicaciones externas", "Reincidencia en problema técnico", "Lentitud de señal", "Negociación Interrumpida"],
                descripcion: "Registro de baja motivado por problemas técnicos no resueltos, lentitud, intermitencia o inconformidad del wifi.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-problemas-sva",
                label: "Bajas - Problemas con SVA (Valor Agregado)",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Problemas con SVA",
                motivos: [
                    "DGO- No llega credenciales", "DGO- Incompatibilidad TV", "DGO- Usuarios en simultáneo", "DGO- Inconvenientes con Uso/Contenido",
                    "Win TV - No llega credenciales", "Win TV - Incompatibilidad TV", "Win TV - Inconvenientes con Uso", "WIN TV - Usuarios en simultáneo",
                    "FONO WIN - Portabilidad no realizada", "FONO WIN - Problemas con el servicio/Consumo", "FONO WIN - No se entregó equipo", "FONO WIN - No se instaló equipo",
                    "MESH - No se entregó equipo", "MESH - No se instaló equipo", "MESH - Inconvenientes con Uso",
                    "WIN BOX - No se entregó equipo", "WIN BOX - No se instaló equipo", "WIN BOX - Inconvenientes con Uso", "Negociación Interrumpida"
                ],
                descripcion: "Registro de baja provocado por incidencias críticas con servicios de valor agregado contratados (DGO, Win TV, FonoWin, Mesh, Winbox).",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },
            {
                id: "baja-problemas-personales",
                label: "Bajas - Problemas Personales",
                categoria: "FIDELIZACION BAJAS",
                medio: "FIDELIZACION BAJAS",
                tipo: "Problemas Personales",
                motivos: ["Problemas de salud", "Problemas familiares", "Regreso Trabajo presencial", "Problemas Personales sin dar detalle", "Robo", "Incendio / Desastre Natural", "Fallecimiento del Titular", "Negociación Interrumpida"],
                descripcion: "Registro de baja motivado por causas externas, de fuerza mayor, cambio de modalidad de trabajo o fallecimiento del titular de la cuenta.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|",
                fidelizacion: false,
                baja: true
            },

            // --- NUEVO: FIDELIZACIÓN CAMCELACIÓN (DESISTIMIENTO) (image_4be31d.png) ---
            {
                id: "desiste-cancelar-suspension",
                label: "Desistimiento - Cancelar Suspensión Definitiva",
                categoria: "FIDELIZACION CAMCELACIÓN",
                medio: "FIDELIZACION CAMCELACIÓN",
                tipo: "Desiste",
                motivos: ["Cancelar Suspensión Definitiva"],
                descripcion: "Cuando el cliente ha solicitado la baja (o se encuentra dentro de los primeros 5 días hábiles o 30 días calendario de suspensión definitiva) y solicita desistir de la baja para continuar con su servicio WIN activo.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|OBS| CLIENTE SOLICITA CONTINUAR CON WIN",
                fidelizacion: true,
                desiste: true
            },

            // --- TIPIFICACIONES PREVIAS (FIDELIZACIÓN RETENIDOS / ATENCIÓN) ---
            {
                id: "win-tv-promo-fide",
                label: "WIN TV PROMO FIDE",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["WIN TV PROMO FIDE"],
                descripcion: "Cuando se aplica promoción de descuento por WINTV Básico (Costo regular S/15 a costo de S/1 permanente por fidelización).",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|OBS| ACTIVACION WIN TV BASICO A S/1",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "ajuste-fidelizacion",
                label: "Ajuste Fidelización",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Ajuste Fidelización"],
                descripcion: "Se fideliza al cliente aplicando un ajuste por fidelización. Requiere calculadora de porcentajes.",
                observaciones: "|ID: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |\n|CODIGO DE PEDIDO|\n|No. RECIBO|\n|MONTO A DEVOLVER S/|\n|MES INICIO A DEVOLVER|\n|CANTIDAD DE MESES|\n|TIPO|\n|MOTIVO DEVOLUCION|\n|SUB MOTIVO DEVOLUCION|\n|NOMBRE JEFE APROBADOR|\n|OBS|\n|AREA RESPONSABLE|",
                fidelizacion: true,
                retencion: true,
                requiresCalculator: true,
                excelLink: "https://opticaln-my.sharepoint.com/:x:/g/personal/jleoni_win_pe/IQB9snDUPMbFQqttE7a5oDUmAVRCh_8spb3UvBYnYQiWHaU?e=AvFopv&or=EXCEL-WEB.BODY.NT&ct=1783116790419"
            },
            {
                id: "ajuste-fundado",
                label: "Ajuste Fundado",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Ajuste Fundado"],
                descripcion: "Se fideliza al cliente aplicando un ajuste fundado. Requiere calculadora de porcentajes.",
                observaciones: "|ID: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |\n|CODIGO DE PEDIDO|\n|No. RECIBO|\n|MONTO A DEVOLVER S/|\n|MES INICIO A DEVOLVER|\n|CANTIDAD DE MESES|\n|TIPO|\n|MOTIVO DEVOLUCION|\n|SUB MOTIVO DEVOLUCION|\n|NOMBRE JEFE APROBADOR|\n|OBS|\n|AREA RESPONSABLE|",
                fidelizacion: true,
                retencion: true,
                requiresCalculator: true,
                excelLink: "https://opticaln-my.sharepoint.com/:x:/g/personal/jleoni_win_pe/IQB9snDUPMbFQqttE7a5oDUmAVRCh_8spb3UvBYnYQiWHaU?e=AvFopv&or=EXCEL-WEB.BODY.NT&ct=1783116790419"
            },
            {
                id: "descuento-fidelizacion",
                label: "Descuento Fidelización",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Descuento Fidelización"],
                descripcion: "Se fideliza al cliente aplicando un descuento por fidelización. Requiere calculadora de porcentajes.",
                observaciones: "|ID: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |\n|CODIGO DE PEDIDO|\n|No. RECIBO|\n|MONTO A DEVOLVER S/|\n|MES INICIO A DEVOLVER|\n|CANTIDAD DE MESES|\n|TIPO|\n|MOTIVO DEVOLUCION|\n|SUB MOTIVO DEVOLUCION|\n|NOMBRE JEFE APROBADOR|\n|OBS|\n|AREA RESPONSABLE|",
                fidelizacion: true,
                retencion: true,
                requiresCalculator: true,
                excelLink: "https://opticaln-my.sharepoint.com/:x:/g/personal/jleoni_win_pe/IQB9snDUPMbFQqttE7a5oDUmAVRCh_8spb3UvBYnYQiWHaU?e=AvFopv&or=EXCEL-WEB.BODY.NT&ct=1783116790419"
            },
            {
                id: "descuento-fundado",
                label: "Descuento Fundado",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Descuento Fundado"],
                descripcion: "Se fideliza al cliente aplicando un descuento fundado. Requiere calculadora de porcentajes.",
                observaciones: "|ID: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX |\n|CODIGO DE PEDIDO|\n|No. RECIBO|\n|MONTO A DEVOLVER S/|\n|MES INICIO A DEVOLVER|\n|CANTIDAD DE MESES|\n|TIPO|\n|MOTIVO DEVOLUCION|\n|SUB MOTIVO DEVOLUCION|\n|NOMBRE JEFE APROBADOR|\n|OBS|\n|AREA RESPONSABLE|",
                fidelizacion: true,
                retencion: true,
                requiresCalculator: true,
                excelLink: "https://opticaln-my.sharepoint.com/:x:/g/personal/jleoni_win_pe/IQB9snDUPMbFQqttE7a5oDUmAVRCh_8spb3UvBYnYQiWHaU?e=AvFopv&or=EXCEL-WEB.BODY.NT&ct=1783116790419"
            },
            {
                id: "baja-fono-win-retenido",
                label: "Baja Fono Win (Fidelizado)",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Baja Fono Win"],
                descripcion: "Se procede con la baja de la línea de telefonía fija FONOWIN, pero el cliente decide mantener activo el servicio de internet.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|TIPO|\n|NOMBRES COMPLETOS|\n|No. TELÉFONO|\n|LÍNEA WIN/PORTABILIDAD|\n|No. A PORTAR|\n|OPERADOR|\n|MODALIDAD| POSTPAGO/PREPAGO",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "informacion-beneficios",
                label: "Información de Beneficios",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Información de Beneficios"],
                descripcion: "Se logra fidelizar informando las bondades del plan. Recuerda que la bitácora es para errores de generación de ticket. No derivar si hay tickets pendientes.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|HHRR|",
                fidelizacion: true,
                retencion: true,
                formsLink: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=B1bL-kMKCUSswbHiafr3qBVjy62v5PNOlTcZW7V3MJVUQUIzVDNCTjhLTENJMjBDSVlWRFVRTVpaVS4u&route=shorturl&or=EXCEL-WEB.BODY.NT&ct=1783116872643"
            },
            {
                id: "no-se-gestiona-ticket",
                label: "No se gestiona ticket",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["No se gestiona ticket"],
                descripcion: "Fidelización lograda con éxito, pero la plataforma de CRM Exp. impide registrar el ticket ordinario. Requiere escalamiento.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|TIPO|\n|DNI CLIENTE|\n|NOMBRES COMPLETOS|\n|CELULAR|\n|DIRECCIÓN|\n|REFERENCIA|\n|DISTRITO|\n|PROVINCIA|\n|DEPARTAMENTO|\n|COORDENADAS|\n|TIPO DE OT|",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "ampliacion-suspension-temporal",
                label: "Ampliación de Suspensión Temporal",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Ampliación de Suspensión Temporal"],
                descripcion: "Fidelización para clientes con más de dos meses de suspensión temporal. Requiere aprobación explícita de un supervisor.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|TIPO|\n|FECHA INICIO|\n|FECHA FIN|\n|CANT DIAS|\n|MOTIVO DE SUSPENSION|\n|APROBADOR|\n|OBS|",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "cambio-velocidad-temporal",
                label: "Cambio de Velocidad Temporal",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Cambio de Velocidad Temporal"],
                descripcion: "Cambio de velocidad en promoción por un máximo de 6 meses o de carácter permanente bajo debida autorización.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|TIPO|\n|PLAN ACTUAL| WIN 100 MBPS\n|VELOCIDAD ACTUAL| 100, 200, 300 MBPS\n|VELOCIDAD OFRECIDA| 400, 600, 1000 MBPS\n|INICIO| PERMANENTE Ó FECHA\n|FIN| PERMANENTE Ó FECHA\n|OBS|",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "herramientas-automatizadas",
                label: "Herramientas Automatizadas",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Herramientas Automatizadas"],
                descripcion: "Fidelizas ingresando altas/cancelaciones de SVA o tickets mediante Winforce (Uso del botón Solicitud/Escalar).",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|HHRR|",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "alta-fono-win",
                label: "Alta Fono Win",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["Alta Fono Win"],
                descripcion: "Fidelización mediante portabilidad o alta nueva de FONOWIN. Requiere Winforce para emitir ticket de despacho.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|TIPO|\n|NOMBRES COMPLETOS|\n|No. TELÉFONO|\n|LÍNEA WIN/PORTABILIDAD|\n|No. A PORTAR|\n|OPERADOR|\n|MODALIDAD| POSTPAGO/PREPAGO",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "fono-win-cambio-costo",
                label: "FONO WIN CAMBIO DE COSTO",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "SEGÚN TIPO DE LLAMADA",
                motivos: ["FONO WIN CAMBIO DE COSTO"],
                descripcion: "Fidelización reduciendo costo de FONOWIN de S/10 regular a S/1 por tiempo permanente.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|NRO DE TELEFONO FIJO|\n|OBS| ACTIVACION FONO WIN A S/1",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "cambio-modalidad-mesh",
                label: "CAMBIO DE MODALIDAD MESH",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "CAMBIO DE MODALIDAD MESH",
                motivos: ["DE ALQUILER A COMODATO"],
                descripcion: "Fidelización mediante el traspaso permanente de contratos de MESH de la categoría Alquiler a Comodato.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|AUTORIZADO POR|\n|OBS| Ejemplo: Cliente tiene 2 mesh, solicitamos que ambos pasen a comodato",
                fidelizacion: true,
                retencion: true
            },
            {
                id: "cambio-modalidad-winbox",
                label: "CAMBIO DE MODALIDAD WINBOX",
                categoria: "FIDELIZACION RETENIDOS",
                medio: "FIDELIZACION RETENIDOS",
                tipo: "CAMBIO DE MODALIDAD WINBOX",
                motivos: ["DE ALQUILER A COMODATO"],
                descripcion: "Fidelización mediante el traspaso permanente de contratos de WINBOX de la categoría Alquiler a Comodato.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|COD PEDIDO|\n|AUTORIZADO POR|\n|OBS| Ejemplo: Cliente tiene 2 winbox, solicitamos que 1 pase a comodato",
                fidelizacion: true,
                retencion: true
            },

            // --- TIPIFICACIONES: FIDELIZACIÓN ATENCIÓN ---
            {
                id: "corte-comunicacion",
                label: "Corte de Llamada - Se Corta Comunicación",
                categoria: "FIDELIZACIÓN ATENCIÓN",
                medio: "FIDELIZACIÓN ATENCIÓN",
                tipo: "CORTE DE LLAMADA",
                motivos: ["SE CORTA COMUNICACIÓN"],
                descripcion: "Cliente corta la llamada o se sufre alguna desconexión del sistema ICC provocando la finalización de la comunicación con el cliente.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|CÓDIGO DE PEDIDO|\n|DETALLE DE LA INTERRUPCIÓN| SE INTERRUMPE COMUNICACIÓN, SE PIERDE COMUNICACIÓN",
                fidelizacion: true
            },
            {
                id: "devolucion-no-contesta",
                label: "Devolución de Llamada - No Contesta",
                categoria: "FIDELIZACIÓN ATENCIÓN",
                medio: "FIDELIZACIÓN ATENCIÓN",
                tipo: "Devolucion de Llamada",
                motivos: ["No Contesta"],
                descripcion: "Se devuelve comunicación pero, no hay contacto con el cliente, se debe dejar mensaje de voz si se permite.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|CÓDIGO DE PEDIDO|\n|OBSERVACIÓN| CL NO CONTESTA. EN CASO SE VUELVA A COMUNICAR POR FAVOR BRINDAR UN NÚMERO DE REFERENCIA ADICIONAL Y HORARIO DE COMUNICACIÓN.",
                fidelizacion: true
            },
            {
                id: "devolucion-conforme",
                label: "Devolución de Llamada - Conforme con el Servicio",
                categoria: "FIDELIZACIÓN ATENCIÓN",
                medio: "FIDELIZACIÓN ATENCIÓN",
                tipo: "Devolucion de Llamada",
                motivos: ["Conforme con el Servicio"],
                descripcion: "Registro se utiliza únicamente para las bases de recupero. Valida conformidad del usuario.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|CÓDIGO DE PEDIDO|\n|OBSERVACIÓN| CL INDICA TENER EL SERVICIO OPERATIVO Y ESTÁ CONFORME CON LA CALIDAD DE SU INTERNET.",
                fidelizacion: true
            },
            {
                id: "devolucion-agendado",
                label: "Devolución de Llamada - Desea Ser Agendado",
                categoria: "FIDELIZACIÓN ATENCIÓN",
                medio: "FIDELIZACIÓN ATENCIÓN",
                tipo: "Devolucion de Llamada",
                motivos: ["DESEA SER AGENDADO"],
                descripcion: "Registro se utiliza únicamente para las bases de recupero. Cliente solicita volver a ser contactado posteriormente.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|CÓDIGO DE PEDIDO|\n|OBSERVACIÓN| CL DESEA VOLVER A SER CONTACTADO. EN CASO SE VUELVA A COMUNICAR POR FAVOR BRINDAR UN NÚMERO DE REFERENCIA ADICIONAL Y HORARIO DE COMUNICACIÓN.",
                fidelizacion: true
            },
            {
                id: "negociacion-no-valida",
                label: "Negociación Interrumpida - Cliente No Valida Datos",
                categoria: "FIDELIZACIÓN ATENCIÓN",
                medio: "FIDELIZACIÓN ATENCIÓN",
                tipo: "Negociacion Interrumpida",
                motivos: ["Cliente no valida datos"],
                descripcion: "No responde correctamente los intentos de validación de titularidad de la línea / cuenta.",
                observaciones: "|Id: XXXXXXXXXXXXXXXXXXXXX |\n|CÓDIGO DE PEDIDO|\n|DETALLE DE LA INTERRUPCIÓN| CL NO PASA VALIDACIÓN DE IDENTIDAD",
                fidelizacion: true
            }
        ];

        // Variables de Estado
        let secretKey = '';
        let timerSeconds = 90;
        let timerInterval = null;
        let selectedTipification = null;

        // Elementos del DOM - Pestañas
        const elTabGenerator = document.getElementById('tab-generator');
        const elTabTipificaciones = document.getElementById('tab-tipificaciones');
        const elContentGenerator = document.getElementById('content-generator');
        const elContentTipificaciones = document.getElementById('content-tipificaciones');
        const elTabTickets = document.getElementById('tab-tickets');
        const elContentTickets = document.getElementById('content-tickets');

        // Elementos del DOM - Generador
        const elSecretKey = document.getElementById('secret-key');
        const elTimerText = document.getElementById('timer-text');
        const elTimerBar = document.getElementById('timer-bar');
        const elBtnGenerate = document.getElementById('btn-generate');
        const elClientName = document.getElementById('client-name');
        
        // Elementos del DOM - Previsualización de Correo
        const elMailSubject = document.getElementById('mail-subject');
        const elPreviewClientName = document.getElementById('preview-client-name');
        const elPreviewKey = document.getElementById('preview-key');
        
        // Botones de Copiado
        const elBtnCopySubject = document.getElementById('btn-copy-subject');
        const elBtnCopyBody = document.getElementById('btn-copy-body');
        const elBtnCopyAll = document.getElementById('btn-copy-all');
        const elBtnCopyKeyOnly = document.getElementById('btn-copy-key-only');
        const toastContainer = document.getElementById('toast-container');

        // Elementos del DOM - Simulador CRM
        const elSysDocType = document.getElementById('sys-doc-type');
        const elSysDocSearch = document.getElementById('sys-doc-search');
        const elSysBtnSearch = document.getElementById('sys-btn-search');
        const elSysBtnHistory = document.getElementById('sys-btn-history');
        const elSysContactPhone = document.getElementById('sys-contact-phone');
        const elSysCategoryBtn = document.getElementById('sys-category-btn');
        const elSysCategoryText = document.getElementById('sys-category-text');
        const elSysMedio = document.getElementById('sys-medio');
        const elSysTipo = document.getElementById('sys-tipo');
        const elSysMotivo = document.getElementById('sys-motivo');
        const elSysObservaciones = document.getElementById('sys-observaciones');
        
        // Elementos del DOM - Guía de Tipificaciones
        const elTipificationSearch = document.getElementById('tipification-search');
        const elTipificationsList = document.getElementById('tipifications-list');
        const elDetailPanel = document.getElementById('tipification-detail-panel');
        const elDetailCategory = document.getElementById('detail-category');
        const elDetailDescription = document.getElementById('detail-description');
        const elBtnInject = document.getElementById('btn-inject-to-simulator');
        const elBtnCopyTemplateDetail = document.getElementById('btn-copy-template-detail');

        // Elementos de Links Dinámicos
        const elDetailLinks = document.getElementById('detail-links');
        const elExcelLinkContainer = document.getElementById('excel-link-container');
        const elExcelSharepointLink = document.getElementById('excel-sharepoint-link');
        const elFormsLinkContainer = document.getElementById('forms-link-container');
        const elFormsMicrosoftLink = document.getElementById('forms-microsoft-link');

        // Elemento de Selección Específica de Submotivo en el Detalle
        const elSubmotivoContainer = document.getElementById('submotivo-selection-container');
        const elDetailSubmotivoDropdown = document.getElementById('detail-submotivo-dropdown');

        // Elementos de la Calculadora de Porcentajes
        const elCalculatorSection = document.getElementById('calculator-section');
        const elCalcPercent = document.getElementById('calc-percent');
        const elCalcInvoice = document.getElementById('calc-invoice');
        const elCalcResultRefund = document.getElementById('calc-result-refund');
        const elCalcResultPay = document.getElementById('calc-result-pay');

        // --- LÓGICA DE CONTROL DE PESTAÑAS ---
        function switchTab(target) {
            const header = document.getElementById('main-header');
            const headerTitle = document.getElementById('header-title');
            const headerSubtitle = document.getElementById('header-subtitle');
            const headerIconContainer = document.getElementById('header-icon-container');
            const headerIcon = document.getElementById('header-icon');
            const headerBadge = document.getElementById('header-badge');
            
            // Reset all tabs
            elTabGenerator.className = "flex items-center gap-2 bg-transparent hover:bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold shrink-0 transition-all cursor-pointer";
            elTabTipificaciones.className = "flex items-center gap-2 bg-transparent hover:bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold shrink-0 transition-all cursor-pointer";
            if (elTabTickets) elTabTickets.className = "flex items-center gap-2 bg-transparent hover:bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold shrink-0 transition-all cursor-pointer";
            
            // Hide all content
            elContentGenerator.classList.add('hidden');
            elContentGenerator.classList.remove('block');
            elContentTipificaciones.classList.add('hidden');
            elContentTipificaciones.classList.remove('block');
            if (elContentTickets) {
                elContentTickets.classList.add('hidden');
                elContentTickets.classList.remove('block');
            }

            if (target === 'generator') {
                elTabGenerator.className = "flex items-center gap-2 bg-win-orange text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm shrink-0 transition-all cursor-pointer";
                elContentGenerator.classList.remove('hidden');
                elContentGenerator.classList.add('block');
                
                header.className = "bg-win-orange text-white shadow-md border-b-4 border-win-orangeHover transition-all duration-300";
                headerIconContainer.className = "bg-white p-2 rounded-xl text-win-orange flex items-center justify-center shadow-inner transition-colors duration-300";
                headerIcon.className = "fa-solid fa-key text-2xl";
                headerTitle.textContent = "Generador de Clave Secreta - WIN";
                headerSubtitle.textContent = "Plataforma interna de seguridad y verificación";
                headerSubtitle.className = "text-xs text-orange-100 mt-1 font-medium transition-all duration-300";
                headerBadge.classList.remove('hidden');
            } else if (target === 'tipificaciones') {
                elTabTipificaciones.className = "flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm shrink-0 transition-all cursor-pointer";
                elContentTipificaciones.classList.remove('hidden');
                elContentTipificaciones.classList.add('block');
                
                header.className = "bg-slate-900 text-white shadow-md border-b-4 border-slate-700 transition-all duration-300";
                headerIconContainer.className = "bg-white p-2 rounded-xl text-slate-900 flex items-center justify-center shadow-inner transition-colors duration-300";
                headerIcon.className = "fa-solid fa-list-ul text-2xl";
                headerTitle.textContent = "REGISTROS Y TIPIFICACIONES";
                headerSubtitle.textContent = "Módulo de Retenciones, Bajas y Soporte Especializado";
                headerSubtitle.className = "text-xs text-slate-300 mt-1 font-medium transition-all duration-300";
                headerBadge.classList.add('hidden');
                
                if (typeof renderTipifications === 'function') {
                    renderTipifications(document.getElementById('tipification-search').value || '');
                }
            } else if (target === 'tickets') {
                if (elTabTickets) {
                    elTabTickets.className = "flex items-center gap-2 bg-[#2B78C5] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm shrink-0 transition-all cursor-pointer";
                }
                if (elContentTickets) {
                    elContentTickets.classList.remove('hidden');
                    elContentTickets.classList.add('block');
                }
                
                header.className = "bg-[#1E6091] text-white shadow-md border-b-4 border-blue-900 transition-all duration-300";
                headerIconContainer.className = "bg-white p-2 rounded-xl text-[#1E6091] flex items-center justify-center shadow-inner transition-colors duration-300";
                headerIcon.className = "fa-solid fa-ticket text-2xl";
                headerTitle.textContent = "MÓDULO DE TICKETS";
                headerSubtitle.textContent = "Soporte Tecnológico y Derivaciones";
                headerSubtitle.className = "text-xs text-blue-200 mt-1 font-medium transition-all duration-300";
                headerBadge.classList.add('hidden');
                
                if (typeof renderTicketsSearch === 'function') {
                    renderTicketsSearch(document.getElementById('ticket-search') ? document.getElementById('ticket-search').value : '');
                }
            }
        }

        elTabGenerator.addEventListener('click', () => switchTab('generator'));
        elTabTipificaciones.addEventListener('click', () => switchTab('tipificaciones'));
        if (elTabTickets) elTabTickets.addEventListener('click', () => switchTab('tickets'));

        // Atajo teclado Alt + T
        document.addEventListener('keydown', (e) => {
            if (e.altKey && (e.key === 't' || e.key === 'T')) {
                e.preventDefault();
                if (!elContentGenerator.classList.contains('hidden')) {
                    switchTab('tipificaciones');
                } else if (!document.getElementById('content-tipificaciones').classList.contains('hidden')) {
                    switchTab('tickets');
                } else {
                    switchTab('generator');
                }
            }
        });

        // Sincronizar inputs
        elClientName.addEventListener('input', () => { updateMailPreview(); });

        // --- LÓGICA DEL GENERADOR DE CLAVES ---
        function generateAlphanumericKey() {
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let key = '';
            for (let i = 0; i < 6; i++) {
                key += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return key;
        }

        function updateMailPreview() {
            const rawName = elClientName.value.trim();
            const clientNameValue = rawName ? rawName : '(NOMBRE DEL CLIENTE)';
            elPreviewClientName.textContent = clientNameValue;
            
            if (rawName) {
                elPreviewClientName.className = "text-slate-900 font-extrabold bg-transparent p-0 border-none";
            } else {
                elPreviewClientName.className = "text-win-orange bg-orange-50 px-1 rounded border border-orange-200 font-extrabold";
            }
            elPreviewKey.textContent = secretKey ? secretKey : '------';
        }

        function startCountdown() {
            clearInterval(timerInterval);
            timerSeconds = 90;
            updateTimerUI();

            timerInterval = setInterval(() => {
                timerSeconds--;
                updateTimerUI();

                if (timerSeconds <= 0) {
                    clearInterval(timerInterval);
                    elTimerText.textContent = "Expirado";
                    elTimerText.className = "font-mono font-bold text-red-500 animate-pulse";
                    elTimerBar.style.width = '0%';
                    elTimerBar.className = "bg-red-500 h-full transition-all duration-300";
                    showToast('¡Atención! La clave ha expirado.', 'warning');
                }
            }, 1000);
        }

        function updateTimerUI() {
            if (timerSeconds > 0) {
                elTimerText.textContent = `${timerSeconds}s`;
                if (timerSeconds <= 15) {
                    elTimerText.className = "font-mono font-bold text-red-500 animate-pulse";
                    elTimerBar.className = "bg-red-500 h-full transition-all duration-300";
                } else if (timerSeconds <= 45) {
                    elTimerText.className = "font-mono font-bold text-amber-500";
                    elTimerBar.className = "bg-amber-500 h-full transition-all duration-300";
                } else {
                    elTimerText.className = "font-mono font-bold text-win-orange";
                    elTimerBar.className = "bg-win-orange h-full transition-all duration-300";
                }
                const percentage = (timerSeconds / 90) * 100;
                elTimerBar.style.width = `${percentage}%`;
            }
        }

        function triggerNewKey() {
            secretKey = generateAlphanumericKey();
            elSecretKey.textContent = secretKey;
            
            elSecretKey.classList.remove('animate-pop');
            void elSecretKey.offsetWidth; // Reflow
            elSecretKey.classList.add('animate-pop');
            
            updateMailPreview();
            startCountdown();
            showToast('Nueva clave de 6 dígitos generada.', 'success');
        }

        // Copiar robusto
        function copyToClipboard(textToCopy, successMsg) {
            try {
                const textarea = document.createElement('textarea');
                textarea.value = textToCopy;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                const successful = document.execCommand('copy');
                document.body.removeChild(textarea);

                if (successful) {
                    showToast(successMsg, 'success');
                } else {
                    throw new Error('Copiado fallido');
                }
            } catch (err) {
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(textToCopy)
                        .then(() => showToast(successMsg, 'success'))
                        .catch(() => showToast('Error al copiar.', 'error'));
                } else {
                    showToast('Error de compatibilidad.', 'error');
                }
            }
        }

        function buildMailBodyText() {
            const rawName = elClientName.value.trim();
            const clientNameValue = rawName ? rawName : '(NOMBRE DEL CLIENTE)';
            const keyToUse = secretKey ? secretKey : '------';

            return `Hola, ${clientNameValue}

Gracias por comunicarte con nosotros.

Hemos generado una clave única para verificar tu identidad, la cual tiene una duración de 90 segundos:

Tu clave es: ${keyToUse}

Por favor, proporciona esta clave al asesor que te está atendiendo para que podamos continuar con la gestión. Este paso es una manera de asegurarnos de que tanto tú como tu información estén siempre protegidos.

¡Gracias por confiar en WIN!`;
        }

        // Toasts
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = "toast-enter p-4 rounded-xl shadow-lg border text-sm font-semibold flex items-center gap-3 bg-white text-slate-800 border-slate-200 pointer-events-auto max-w-sm";
            
            let icon = '<i class="fa-solid fa-circle-check text-emerald-500 text-lg"></i>';
            if (type === 'warning') {
                icon = '<i class="fa-solid fa-triangle-exclamation text-amber-500 text-lg"></i>';
                toast.classList.add('border-l-4', 'border-l-amber-500');
            } else if (type === 'error') {
                icon = '<i class="fa-solid fa-circle-exclamation text-red-500 text-lg"></i>';
                toast.classList.add('border-l-4', 'border-l-red-500');
            } else {
                toast.classList.add('border-l-4', 'border-l-emerald-500');
            }

            toast.innerHTML = `
                ${icon}
                <div class="flex-1">${message}</div>
                <button class="text-slate-400 hover:text-slate-600 transition ml-2">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;

            toastContainer.appendChild(toast);
            setTimeout(() => { toast.classList.add('toast-visible'); }, 50);

            toast.querySelector('button').addEventListener('click', () => { removeToast(toast); });
            setTimeout(() => { removeToast(toast); }, 4000);
        }

        function removeToast(toast) {
            if (toast && toast.parentNode) {
                toast.classList.remove('toast-visible');
                toast.classList.add('translate-y-2', 'opacity-0');
                setTimeout(() => {
                    if (toast.parentNode) toastContainer.removeChild(toast);
                }, 300);
            }
        }

        // --- LÓGICA DEL SIMULADOR DE TIPIFICACIONES ---

        // Helper para asegurar que una opción exista en un select, si no, agregarla dinámicamente
        function ensureOptionExists(selectElement, value) {
            if (!value) return;
            let exists = false;
            for (let i = 0; i < selectElement.options.length; i++) {
                if (selectElement.options[i].value === value) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                const opt = document.createElement('option');
                opt.value = value;
                opt.textContent = value;
                selectElement.appendChild(opt);
            }
        }

        // Función global para copiar sólo la plantilla desde la lista
        window.copyTemplateOnly = function(id) {
            const item = tipificacionesDB.find(t => t.id === id);
            if (item) {
                copyToClipboard(item.observaciones, '¡Plantilla de observación copiada con éxito!');
            }
        };

        // Renderizado del Directorio de Tipificaciones con búsqueda inteligente
        function renderTipifications(filterText) {
            elTipificationsList.innerHTML = '';
            const normalizedFilter = filterText.toLowerCase();

            const filtered = tipificacionesDB.filter(item => {
                const labelMatch = item.label.toLowerCase().includes(normalizedFilter);
                const descMatch = item.descripcion.toLowerCase().includes(normalizedFilter);
                const catMatch = item.categoria.toLowerCase().includes(normalizedFilter);
                const tipoMatch = item.tipo.toLowerCase().includes(normalizedFilter);
                const obsMatch = item.observaciones.toLowerCase().includes(normalizedFilter);
                
                // Buscar también en los submotivos específicos si existen
                const motivosMatch = item.motivos ? item.motivos.some(m => m.toLowerCase().includes(normalizedFilter)) : false;

                return labelMatch || descMatch || catMatch || tipoMatch || obsMatch || motivosMatch;
            });

            if (filtered.length === 0) {
                elTipificationsList.innerHTML = `
                    <div class="p-6 text-center text-slate-400 text-xs">
                        <i class="fa-solid fa-magnifying-glass text-xl mb-2 block"></i>
                        No se encontraron motivos de llamadas coincidentes.
                    </div>
                `;
                return;
            }

            filtered.forEach(item => {
                const itemCard = document.createElement('div');
                
                // Si está seleccionada, resaltar visualmente
                let activeClass = "bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-win-orange/40";
                if (selectedTipification && selectedTipification.id === item.id) {
                    activeClass = "bg-orange-50 border-2 border-win-orange shadow-inner";
                }

                itemCard.className = `p-3.5 border rounded-xl cursor-pointer transition-all flex flex-col gap-2 select-none relative group ${activeClass}`;
                
                // Badges adaptados
                let badgeColor = "bg-blue-100 text-blue-800";
                if (item.categoria === "FIDELIZACION RETENIDOS") {
                    badgeColor = "bg-orange-100 text-win-orange font-bold";
                } else if (item.categoria === "FIDELIZACIÓN ATENCIÓN") {
                    badgeColor = "bg-yellow-100 text-yellow-800";
                } else if (item.categoria === "FIDELIZACION BAJAS") {
                    badgeColor = "bg-red-100 text-red-800 font-bold";
                } else if (item.categoria === "FIDELIZACION CAMCELACIÓN") {
                    badgeColor = "bg-emerald-100 text-emerald-800 font-bold";
                }

                itemCard.innerHTML = `
                    <div class="flex items-start justify-between gap-2">
                        <div class="flex flex-col gap-0.5">
                            <span class="font-bold text-slate-800 text-sm group-hover:text-win-orange transition-colors">${item.label}</span>
                            <div class="flex flex-wrap items-center gap-1.5 mt-0.5">
                                <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider ${badgeColor}">${item.categoria}</span>
                                <span class="text-[9px] bg-slate-200 text-slate-600 font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">${item.tipo}</span>
                            </div>
                        </div>
                        
                        <!-- Botón Copiar Plantilla de un Solo Clic -->
                        <button onclick="event.stopPropagation(); copyTemplateOnly('${item.id}')" class="text-[10px] bg-win-orange hover:bg-win-orangeHover text-white px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition-all shrink-0 active:scale-95" title="Copiar Plantilla de Observación">
                            <i class="fa-regular fa-copy"></i>
                            <span>Copiar</span>
                        </button>
                    </div>
                    <p class="text-xs text-slate-500 line-clamp-2 italic">${item.descripcion}</p>
                    ${item.motivos ? `
                    <div class="flex flex-wrap gap-1 mt-1">
                        <span class="text-[9px] font-bold text-slate-400">Opciones:</span>
                        <span class="text-[9px] bg-slate-100 text-slate-500 px-1 py-0.5 rounded font-medium line-clamp-1 truncate max-w-full">
                            ${item.motivos.slice(0, 5).join(', ')}${item.motivos.length > 5 ? '...' : ''}
                        </span>
                    </div>` : ''}
                    <div class="text-[10px] text-slate-500 bg-white/70 p-2 rounded border border-slate-150 font-mono line-clamp-2">
                        ${item.observaciones.replace(/\n/g, ' ')}
                    </div>
                `;

                itemCard.addEventListener('click', () => {
                    selectTipification(item);
                });

                elTipificationsList.appendChild(itemCard);
            });
        }

        // Selección de un elemento del directorio y despliegue de calculadora si la requiere
        function selectTipification(item) {
            selectedTipification = item;
            
            // Re-render para actualizar estado visual activo
            renderTipifications(elTipificationSearch.value);

            // Mostrar Panel Detallado
            elDetailPanel.classList.remove('hidden');
            elDetailCategory.textContent = item.categoria;
            elDetailDescription.textContent = item.descripcion;

            // Procesar links específicos
            elDetailLinks.classList.add('hidden');
            elExcelLinkContainer.classList.add('hidden');
            elFormsLinkContainer.classList.add('hidden');

            if (item.excelLink) {
                elDetailLinks.classList.remove('hidden');
                elExcelLinkContainer.classList.remove('hidden');
                elExcelSharepointLink.href = item.excelLink;
            }
            if (item.formsLink) {
                elDetailLinks.classList.remove('hidden');
                elFormsLinkContainer.classList.remove('hidden');
                elFormsMicrosoftLink.href = item.formsLink;
            }

            // Validar si requiere Calculadora de Porcentajes
            if (item.requiresCalculator) {
                elCalculatorSection.classList.remove('hidden');
                calculateRefund(); // Calcular de una vez
            } else {
                elCalculatorSection.classList.add('hidden');
            }

            // Validar si es una tipificación estructurada con múltiples motivos (Bajas)
            if (item.motivos && item.motivos.length > 0) {
                elSubmotivoContainer.classList.remove('hidden');
                elDetailSubmotivoDropdown.innerHTML = '';
                item.motivos.forEach(mot => {
                    const opt = document.createElement('option');
                    opt.value = mot;
                    opt.textContent = mot;
                    elDetailSubmotivoDropdown.appendChild(opt);
                });
            } else {
                elSubmotivoContainer.classList.add('hidden');
            }

            elDetailPanel.classList.remove('animate-pop');
            void elDetailPanel.offsetWidth;
            elDetailPanel.classList.add('animate-pop');

            showToast(`Tipificación: ${item.label}`, 'success');
        }

        // --- LÓGICA DE LA CALCULADORA DE PORCENTAJES ---
        function calculateRefund() {
            const percent = parseFloat(elCalcPercent.value) || 0;
            const invoice = parseFloat(elCalcInvoice.value) || 0;
            
            const refundAmount = ((percent * invoice) / 100).toFixed(1);
            const totalPay = (invoice - parseFloat(refundAmount)).toFixed(1);
            
            elCalcResultRefund.textContent = refundAmount;
            elCalcResultPay.textContent = totalPay;
        }

        elCalcPercent.addEventListener('input', calculateRefund);
        elCalcInvoice.addEventListener('input', calculateRefund);

        function applyCalculatorToTemplate() {
            if (!selectedTipification) return;
            
            const refundVal = elCalcResultRefund.textContent;
            let currentObsValue = elSysObservaciones.value;

            if (!currentObsValue.includes('|MONTO A DEVOLVER S/|')) {
                injectSelectedToSimulator();
                currentObsValue = elSysObservaciones.value;
            }

            // Realizar reemplazo en el campo del observador
            if (currentObsValue.includes('|MONTO A DEVOLVER S/|')) {
                const regex = /\|MONTO A DEVOLVER S\/\|.*/;
                const updatedObsValue = currentObsValue.replace(regex, `|MONTO A DEVOLVER S/| S/ ${refundVal}`);
                elSysObservaciones.value = updatedObsValue;
                elSysObservaciones.focus();
                showToast(`Monto S/ ${refundVal} inyectado exitosamente.`, 'success');
            } else {
                elSysObservaciones.value += `\n|MONTO A DEVOLVER S/| S/ ${refundVal}`;
                elSysObservaciones.focus();
                showToast(`Monto S/ ${refundVal} agregado al final de observaciones.`, 'success');
            }
        }

        function copyCalculatedValues() {
            const refund = elCalcResultRefund.textContent;
            const pay = elCalcResultPay.textContent;
            const text = `Monto a Devolver: S/ ${refund} | Total a Pagar: S/ ${pay}`;
            copyToClipboard(text, 'Montos calculados copiados.');
        }

        // Inyectar datos sugeridos directamente al simulador de llamada
        function injectSelectedToSimulator() {
            if (!selectedTipification) {
                showToast('Por favor selecciona una tipificación del directorio primero.', 'warning');
                return;
            }

            // 1. Set Category text
            elSysCategoryText.textContent = selectedTipification.categoria || 'Gestión de reclamos';

            // 2. Set Medio & trigger change
            let medioToSelect = selectedTipification.medio;
            ensureOptionExists(elSysMedio, medioToSelect);
            elSysMedio.value = medioToSelect;
            elSysMedio.dispatchEvent(new Event('change'));

            // 3. Set Tipo & trigger change (resolving case sensitivity if needed)
            let tipoToSelect = selectedTipification.tipo;
            let upperTipo = tipoToSelect.toUpperCase();
            let foundTipo = false;
            for (let i = 0; i < elSysTipo.options.length; i++) {
                if (elSysTipo.options[i].value.toUpperCase() === upperTipo) {
                    tipoToSelect = elSysTipo.options[i].value;
                    foundTipo = true;
                    break;
                }
            }
            if(!foundTipo) { ensureOptionExists(elSysTipo, tipoToSelect); }
            elSysTipo.value = tipoToSelect;
            elSysTipo.dispatchEvent(new Event('change'));

            // 4. Determine Motivo
            let motivoToSelect = '';
            if (selectedTipification.motivos && selectedTipification.motivos.length > 0) {
                if (selectedTipification.motivos.length > 1 && elDetailSubmotivoDropdown.value) {
                    motivoToSelect = elDetailSubmotivoDropdown.value;
                } else {
                    motivoToSelect = selectedTipification.motivos[0];
                }
            } else if (selectedTipification.motivo) {
                motivoToSelect = selectedTipification.motivo;
            }
            
            // 5. Set Motivo & trigger change (resolving case sensitivity)
            if (motivoToSelect) {
                let upperMotivo = motivoToSelect.toUpperCase();
                let foundMotivo = false;
                for (let i = 0; i < elSysMotivo.options.length; i++) {
                    if (elSysMotivo.options[i].value.toUpperCase() === upperMotivo) {
                        motivoToSelect = elSysMotivo.options[i].value;
                        foundMotivo = true;
                        break;
                    }
                }
                if (!foundMotivo) { ensureOptionExists(elSysMotivo, motivoToSelect); }
                elSysMotivo.value = motivoToSelect;
                elSysMotivo.dispatchEvent(new Event('change'));
            }

            // 6. Force override observaciones if the tipification provides it specifically
            // Note: We don't override if the Ajustes module is shown instead of the textarea.
            const moduleAjustes = document.getElementById('module-ajustes');
            if (selectedTipification.observaciones) {
                if (!moduleAjustes || moduleAjustes.classList.contains('hidden')) {
                    elSysObservaciones.value = selectedTipification.observaciones;
                }
            }

            elSysObservaciones.focus();
            
            // Re-highlight the list item visually if needed
            renderTipifications(elTipificationSearch.value);
            
            showToast('Tipificación cargada correctamente', 'success');
        }

        // Sincronizar selección de submotivo del detalle con el simulador en tiempo real
        elDetailSubmotivoDropdown.addEventListener('change', () => {
            if (selectedTipification) {
                // Si el simulador ya tiene cargada la tipificación actual, actualizar su submotivo
                if (elSysTipo.value === selectedTipification.tipo) {
                    elSysMotivo.value = elDetailSubmotivoDropdown.value;
                    showToast(`Sub-motivo cambiado a: ${elDetailSubmotivoDropdown.value}`, 'success');
                }
            }
        });

        // Limpiar formulario
        function cleanSimulation() {
            elSysDocSearch.value = '';
            elSysContactPhone.value = '';
            elSysCategoryText.textContent = 'Gestión de reclamos';
            elSysMedio.value = '';
            elSysTipo.value = '';
            elSysMotivo.innerHTML = '<option value="">Selecciona opción...</option>';
            elSysObservaciones.value = '';
            selectedTipification = null;
            elDetailPanel.classList.add('hidden');
            elCalculatorSection.classList.add('hidden');
            renderTipifications('');
            showToast('Formulario limpio.', 'success');
        }

        // Copiar el registro del CRM completo
        function copyFullRegistration() {
            const docType = elSysDocType.value;
            const docNum = elSysDocSearch.value.trim() || 'No ingresado';
            const phone = elSysContactPhone.value.trim() || 'No ingresado';
            const category = elSysCategoryText.textContent;
            const medio = elSysMedio.value || 'No seleccionado';
            const tipo = elSysTipo.value || 'No seleccionado';
            const motivo = elSysMotivo.value || 'No seleccionado';
            const observaciones = elSysObservaciones.value.trim() || 'Sin observaciones';

            const summary = `--- REGISTRO DE LLAMADA RECIBIDA ---
Tipo de Doc: ${docType}
Número de Doc: ${docNum}
Contacto: ${phone}
Flujo Categoría: ${category}
Medio: ${medio}
Tipo: ${tipo}
Motivo: ${motivo}
Observaciones CRM:
${observaciones}`;

            copyToClipboard(summary, '¡Registro de CRM completo copiado!');
        }

        // Buscador Inteligente
        elTipificationSearch.addEventListener('input', (e) => {
            renderTipifications(e.target.value);
        });

        // Simulación de búsqueda de cliente (DNI)
        elSysBtnSearch.addEventListener('click', () => {
            const dniInput = elSysDocSearch.value.trim();
            if(!dniInput) {
                showToast('Por favor ingrese un número de documento.', 'warning');
                return;
            }
            
            const mockNames = ['Carlos Mendoza', 'Sofía Ugarte', 'Mateo Alarcón', 'Rosa Quintana'];
            const mockPhones = ['987654321', '955432109', '944321098', '911223344'];
            const randomIndex = Math.abs(dniInput.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % mockNames.length;
            
            const selectedName = mockNames[randomIndex];
            const selectedPhone = mockPhones[randomIndex];

            elClientName.value = selectedName;
            elSysContactPhone.value = selectedPhone;
            
            updateMailPreview();
            showToast(`Cliente encontrado: ${selectedName} (${selectedPhone})`, 'success');
        });

        // Botón histórico
        elSysBtnHistory.addEventListener('click', () => {
            elSysDocSearch.value = '45893214';
            elClientName.value = 'María Alejandra del Solar';
            elSysContactPhone.value = '990342115';
            updateMailPreview();
            showToast('Datos de prueba cargados para simulación.', 'success');
        });

        // Copiar plantilla del detalle
        elBtnCopyTemplateDetail.addEventListener('click', () => {
            if (selectedTipification) {
                copyToClipboard(selectedTipification.observaciones, '¡Plantilla de observación copiada con éxito!');
            }
        });

        // Inyección directa
        elBtnInject.addEventListener('click', injectSelectedToSimulator);

        // --- EVENT LISTENERS GENERALES ---
        elBtnGenerate.addEventListener('click', triggerNewKey);

        document.addEventListener('keydown', (e) => {
            if (document.activeElement === elClientName || 
                document.activeElement === elSysDocSearch ||
                document.activeElement === elSysContactPhone ||
                document.activeElement === elSysObservaciones ||
                document.activeElement === elTipificationSearch ||
                document.activeElement === elCalcPercent ||
                document.activeElement === elCalcInvoice) {
                return; 
            }
            
            if (e.key === 'F9') {
                e.preventDefault();
                switchTab('generator');
                triggerNewKey();
            } else if (e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                switchTab('generator');
                triggerNewKey();
            }
        });

        // Eventos Copiar Correo
        elBtnCopySubject.addEventListener('click', () => {
            copyToClipboard(elMailSubject.textContent, '¡Asunto copiado!');
        });

        elBtnCopyBody.addEventListener('click', () => {
            const text = buildMailBodyText();
            copyToClipboard(text, '¡Mensaje de correo copiado!');
        });

        elBtnCopyAll.addEventListener('click', () => {
            const subject = elMailSubject.textContent;
            const body = buildMailBodyText();
            const combined = `Asunto: ${subject}\n\n${body}`;
            copyToClipboard(combined, '¡Asunto y cuerpo de correo copiados!');
        });

        elBtnCopyKeyOnly.addEventListener('click', () => {
            if (!secretKey) {
                showToast('Primero genera una clave secreta.', 'error');
                return;
            }
            copyToClipboard(secretKey, `¡Clave secreta "${secretKey}" copiada!`);
        });

        // Inicializar
        window.onload = function() {
            triggerNewKey();
            renderTipifications('');
            initDependentDropdowns();
            initTicketsModule();
        };

        function initDependentDropdowns() {
            const registroData = {
                "FIDELIZACIÓN ATENCIÓN": {
                    "CORTE DE LLAMADA": {
                        "SE CORTA COMUNICACIÓN": "|Id: XXXXXXXXXXXXXXXXXXXX||CÓDIGO DE PEDIDO||DETALLE DE LA INTERRUPCIÓN| SE INTERRUMPE COMUNICACIÓN, SE PIERDE COMUNICACIÓN"
                    },
                    "DEVOLUCIÓN DE LLAMADA": {
                        "NO CONTESTA": "|Id: XXXXXXXXXXXXXXXXXXXX||CÓDIGO DE PEDIDO||OBSERVACIÓN| CL NO CONTESTA. EN CASO SE VUELVA A COMUNICAR POR FAVOR BRINDAR UN NÚMERO DE REFERENCIA ADICIONAL Y HORARIO DE COMUNICACIÓN."
                    },
                    "NEGOCIACIÓN INTERRUPPIDA": {
                        "CLIENTE NO VALIDA DATOS": "|Id: XXXXXXXXXXXXXXXXXXXX||CÓDIGO DE PEDIDO||DETALLE DE LA INTERRUPCIÓN| CL NO PASA VALIDACIÓN DE IDENTIDAD"
                    }
                },
                "FIDELIZACION RETENIDOS": {
                    "SEGÚN TIPO DE LLAMADA": {
                        "WIN TV PROMO FIDE": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||OBS| ACTIVACION WIN TV BASICO A S/1",
                        "AJUSTE FIDELIZACIÓN": "PLANTILLA DE AJUSTES / DESCUENTOS",
                        "AJUSTE FUNDADO": "PLANTILLA DE AJUSTES / DESCUENTOS",
                        "BAJA FONO WIN": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||TIPO||NOMBRES COMPLETOS||No. TELÉFONO||LÍNEA WIN/PORTABILIDAD||No. A PORTAR||OPERADOR||MODALIDAD| POSTPAGO/PREPAGO",
                        "DESCUENTO FIDELIZACIÓN": "PLANTILLA DE AJUSTES / DESCUENTOS",
                        "DESCUENTO FUNDADO": "PLANTILLA DE AJUSTES / DESCUENTOS",
                        "INFORMACIÓN DE BENEFICIOS": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||HHRR|",
                        "NO SE GESTIONA TICKET": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||TIPO||DNI CLIENTE||NOMBRES COMPLETOS||CELULAR||DIRECCIÓN||REFERENCIA||DISTRITO||PROVINCIA||DEPARTAMENTO||COORDENADAS||TIPO DE OT|",
                        "AMPLIACIÓN DE SUSPENSIÓN TEMPORAL": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||TIPO||FECHA INICIO||FECHA FIN||CANT DIAS||MOTIVO DE SUSPENSION||APROBADOR||OBS|",
                        "CAMBIO DE VELOCIDAD TEMPORAL": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||TIPO||PLAN ACTUAL||VELOCIDAD ACTUAL||VELOCIDAD OFRECIDA||INICIO||FIN||OBS|",
                        "HERRAMIENTAS AUTOMATIZADAS": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||HHRR|",
                        "ALTA FONO WIN": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||TIPO||NOMBRES COMPLETOS||No. TELÉFONO||LÍNEA WIN/PORTABILIDAD||No. A PORTAR||OPERADOR||MODALIDAD| POSTPAGO/PREPAGO",
                        "FONO WIN CAMBIO DE COSTO": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||NRO DE TELEFONO FIJO||OBS| ACTIVACION FONO WIN A S/1"
                    },
                    "CAMBIO DE MODALIDAD MESH": {
                        "DE ALQUILER A COMODATO": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||AUTORIZADO POR||OBS|"
                    },
                    "CAMBIO DE MODALIDAD WINBOX": {
                        "DE ALQUILER A COMODATO": "|Id: XXXXXXXXXXXXXXXXXXXX||COD PEDIDO||AUTORIZADO POR||OBS|"
                    }
                },
                "FIDELIZACION BAJAS": {
                    "CLIENTES NO GESTIONABLES": {
                        "Reclamos": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Fraude": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Usuarios": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Instalación no concretada / incompleta": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Convenio": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Cliente Suspendido": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "COMPETENCIA": {
                        "CLARO": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "MOVISTAR": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "DIRECTV": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "ENTEL": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "WOW": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "No menciona/Otra empresa": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "BANTEL": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "BITEL": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "MIFIBRA": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "FIBERPRO": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "NUBYX": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "WIN NEGOCIOS/EMPRESAS": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Negociación Interrumpida": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "FACTURACIÓN": {
                        "Cobro de prorrateo / cuota instalación": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Demora en emisión recibo": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Ajuste/Descuento/Devolución no realizado": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "No reconoce monto": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Error en el cargo fijo": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Se facturó estando suspendido el servicio": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "No reconoce cargos por servicios solicitados": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "No envío de recibo": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Negociación Interrumpida": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "FLIPPING": {
                        "A NOMBRE DEL MISMO CLIENTE": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "A NOMBRE DE UN FAMILIAR / AMIGO": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "INCUMPLIMIENTO WIN": {
                        "Gestión Visita Técnica": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Gestión Instalación": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Gestión Ventas": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Gestión ATC": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Gestión Fidelización": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Negociación Interrumpida": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "MOTIVOS ECONÓMICOS": {
                        "Solicita prórroga de pago": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "No puede pagar el total de recibo": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Se quedó sin trabajo": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Renovación de beneficio": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Cliente en desacuerdo con costo del plan/SVA": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Negociación Interrumpida": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "MUDANZA/VIAJE": {
                        "Viaje al extranjero - Indefinido": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Viaje dentro del país - Sin cobertura": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Viaje dentro del país - Con cobertura": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Mudanza - Sin cobertura": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Mudanza - Con cobertura": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Mudanza - Sin facilidades técnicas": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Mudanza - Ya cuenta con Win": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Viaje dentro del país - No indica destino": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Mudanza - No indica destino": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Negociación Interrumpida": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "PROBLEMAS CON EL SERVICIO": {
                        "Intermitencia en la señal": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Insatisfecho con la velocidad": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Pérdida Total del Servicio": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Problemas de WIFI": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "No llega ancho de banda": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Problemas con juegos/Latencia": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Sin acceso a páginas/Aplicaciones externas": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Reincidencia en problema técnico": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Lentitud de señal": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Negociación Interrumpida": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "PROBLEMAS CON SVA": {
                        "Mantener todos los motivos del documento": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    },
                    "PROBLEMAS PERSONALES": {
                        "Problemas de salud": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Problemas familiares": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Regreso trabajo presencial": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Problemas personales sin dar detalle": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Robo": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Incendio / Desastre natural": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Fallecimiento del titular": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|",
                        "Negociación Interrumpida": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO|"
                    }
                },
                "FIDELIZACION CANCELACIÓN": {
                    "DESISTE": {
                        "CANCELAR SUSPENSIÓN DEFINITIVA": "|Id: XXXXXXXXXXXXXXXX||COD PEDIDO||OBS| CLIENTE SOLICITA CONTINUAR CON WIN"
                    }
                }
            };

            const selMedio = document.getElementById('sys-medio');
            const selTipo = document.getElementById('sys-tipo');
            const selMotivo = document.getElementById('sys-motivo');
            const txtObservaciones = document.getElementById('sys-observaciones');
            const containerObservaciones = document.getElementById('sys-observaciones-container');
            const btnCopyObs = document.getElementById('sys-btn-copy-obs');
            
            // Elementos de Módulos Dinámicos
            const moduleAjustes = document.getElementById('module-ajustes');
            const moduleBeneficios = document.getElementById('module-beneficios');

            // Calculadora de Ajustes
            const ajustePct = document.getElementById('ajuste-pct-devolucion');
            const ajusteImporte = document.getElementById('ajuste-importe');
            const ajusteLblDevolver = document.getElementById('ajuste-lbl-devolver');
            const ajusteLblPagar = document.getElementById('ajuste-lbl-pagar');
            
            function updateAjusteCalc() {
                const pct = parseFloat(ajustePct.value) || 0;
                const importe = parseFloat(ajusteImporte.value) || 0;
                const devolver = (importe * pct) / 100;
                const pagar = importe - devolver;
                
                ajusteLblDevolver.textContent = `S/ ${devolver.toFixed(2)}`;
                ajusteLblPagar.textContent = `S/ ${pagar.toFixed(2)}`;
                
                // AUTOFILL Monto a Devolver en la plantilla
                const montoDevField = document.getElementById('ajuste-monto-dev');
                if (montoDevField) {
                    montoDevField.value = devolver.toFixed(2);
                }
            }

            // Expose function globally if needed by inline handlers
            window.updateAjusteCalc = updateAjusteCalc;

            // Botón Copiar Plantilla de Ajuste (ahora lee del formulario Excel)
            window.copyAjusteTemplate = function() {
                // Remove trailing | if user left it in ID to avoid |||
                let rawId = document.getElementById('ajuste-id').value.trim();
                if (rawId.endsWith('|')) {
                    rawId = rawId.slice(0, -1);
                }
                
                const template = `|Id: ${rawId}|
|CODIGO DE PEDIDO| ${document.getElementById('ajuste-cod-pedido').value.trim()}
|No. RECIBO| ${document.getElementById('ajuste-nro-recibo').value.trim()}
|MONTO A DEVOLVER S/| ${document.getElementById('ajuste-monto-dev').value.trim()}
|MES INICIO A DEVOLVER| ${document.getElementById('ajuste-mes-inicio').value}
|CANTIDAD DE MESES| ${document.getElementById('ajuste-cant-meses').value.trim()}
|TIPO| ${document.getElementById('ajuste-tipo').value}
|MOTIVO DEVOLUCION| ${document.getElementById('ajuste-motivo-dev').value.trim()}
|SUB MOTIVO DEVOLUCION| ${document.getElementById('ajuste-submotivo-dev').value.trim()}
|NOMBRE JEFE APROBADOR| ${document.getElementById('ajuste-aprobador').value}
|OBS| ${document.getElementById('ajuste-obs').value.trim()}
|AREA RESPONSABLE| ${document.getElementById('ajuste-area').value}`;

                copyToClipboard(template, '¡Plantilla de Ajustes copiada al portapapeles!');
            };
            
            // Si el listener previo existe, lo dejamos vacío porque usamos inline onclick="copyAjusteTemplate()"
            const btnCopyAjuste = document.getElementById('btn-copy-ajuste');
            if(btnCopyAjuste) {
                // btnCopyAjuste.addEventListener(...) -> It uses inline onclick now.
            }

            // Estructura de Datos para Motivos y Sub Motivos de Devolución
            const motivosDevolucionData = {
                "ACTIVACION_ACCESO": [
                    "APP - NO CARGA SERVICIO",
                    "APP - NO PERMITE ACCESO",
                    "CARGO - DIAS GRATUITOS FACTURADOS",
                    "CARGO - NO CONTRATO EL SERVICIO",
                    "CARGO - SERVICIO NO ACTIVO Y ESTA FACTURANDO",
                    "CREDENCIALES - NO LLEGA",
                    "CREDENCIALES - NO PERMITE ACCEDER",
                    "CREDENCIALES - NO PERMITE REGISTRARSE",
                    "EQUIPO - EN MAL ESTADO",
                    "EQUIPO - MAL CONFIGURADO",
                    "EQUIPO - NO LLEGA",
                    "EQUIPO - NO RECOGEN",
                    "TELEFONIA - NO PERMITE COMUNICACIÓN",
                    "TELEFONIA - PROBLEMAS CON LA PORTABILIDAD",
                    "TELEFONIA - SIN ASIGNACION DE NUMERO",
                    "USO - DIFICULTAD CON EL USO",
                    "USO - INCOMPATIBLE CON TV",
                    "USO - PREFIERE POR FIBRA NO STREAMING",
                    "USO - NO SE VISUALIZAN CANALES"
                ],
                "BAJA_CANCELACION": [
                    "CON SOLICITUD REGISTRADA - DEMORA EJECUCION",
                    "CON SOLICITUD REGISTRADA - DESCONOCE SUSPENSION APC",
                    "CON SOLICITUD REGISTRADA - EJECUCION INCOMPLETA",
                    "CON SOLICITUD REGISTRADA - NO SOLICITO ANULACION",
                    "SIN SOLICITUD REGISTRADA - REITERATIVO"
                ],
                "CAMBIO_DATOS_TITULARIDAD": [
                    "CON SOLICITUD REGISTRADA - DEMORA EJECUCION",
                    "CON SOLICITUD REGISTRADA - EJECUCION INCOMPLETA",
                    "CON SOLICITUD REGISTRADA - ERROR EN EL REGISTRO",
                    "CON SOLICITUD REGISTRADA - FALTO DOCUMENTACION",
                    "CON SOLICITUD REGISTRADA - NO SOLICITO",
                    "SIN SOLICITUD REGISTRADA - REITERATIVO"
                ],
                "CAMBIO_PLAN": [
                    "CON SOLICITUD REGISTRADA - DEMORA EJECUCION",
                    "CON SOLICITUD REGISTRADA - EJECUCION INCOMPLETA",
                    "CON SOLICITUD REGISTRADA - ERROR EN ASIGNACION",
                    "CON SOLICITUD REGISTRADA - NO SOLICITO",
                    "SIN SOLICITUD REGISTRADA - REITERATIVO"
                ],
                "COBRANZA": [
                    "RECONEXION - DEMORA",
                    "RECONEXION - NO RECONOCE CARGO RECONEXION",
                    "CLIENTE - PAGO DOBLE",
                    "CLIENTE - PAGO OTRO SERVICIO",
                    "RESCATE - DESCUENTO OFRECIDO NO APLICADO"
                ],
                "FALLA_SERVICIO": [
                    "DESMATRICULADO",
                    "ANCHO DE BANDA",
                    "INTERMITENCIA",
                    "LENTITUD",
                    "LOS ROJO",
                    "LOS VERDE",
                    "MASIVO",
                    "NO ALCANZA VELOCIDAD CONTRATADA",
                    "PROBLEMA CON WIFI",
                    "VT - DEMORA EN VISITA",
                    "VT - DAÑO EN PROPIEDAD DURANTE VISITA",
                    "VT - DESCONECTAN CTO",
                    "VT - UBICACIÓN DE ROUTER",
                    "VT - PROBLEMA ROUTER / ACCESORIOS"
                ],
                "FRAUDE": [
                    "CLIENTE DESCONOCE CONTRATACION"
                ],
                "INSTALACION": [
                    "INSTALACION - DAÑO EN LA PROPIEDAD DEL CLIENTE",
                    "CARGO - COSTO OFRECIDO DIFERENTE",
                    "CARGO - ERROR EN CUOTAS PIDIO AL CONTADO",
                    "CARGO - ERROR CONTADO PIDIO EN CUOTAS",
                    "CON SOLICITUD REGISTRADA - DEMORA EJECUCION",
                    "SIN SOLICITUD REGISTRADA - REITERATIVO",
                    "CARGO - SIN DISPONIBILIDAD TECNICA",
                    "INSTALACION - INCONVENIENTES CON ACCESORIOS Y CABLES"
                ],
                "PROBLEMAS_ECONOMICOS": [
                    "CLIENTE - NO PUEDE PAGAR SU SERVICIO",
                    "CLIENTE - NO HA USADO EL SERVICIO",
                    "CLIENTE - NO CUENTA CON TRABAJO",
                    "CLIENTE - INSATISFECHO CON EL SERVICIO",
                    "COMPETENCIA - MEJOR OFERTA"
                ],
                "PROMOCIONES": [
                    "CARGO - COSTO SERVICIO DIFERENTE OFRECIDO EN VENTA/CROSS",
                    "CARGO - DESCUENTO OFRECIDO EN VENTA/CROSS NO APLICADO",
                    "SERVICIO - VELOCIDAD DIFERENTE OFRECIDA EN VENTA/CROSS"
                ],
                "RECIBO": [
                    "RECIBO - CARGO DOBLE DE RENTA",
                    "RECIBO - CARGO DOBLE DE CUOTA INSTALACION",
                    "RECIBO - EMISION DOBLE",
                    "RECIBO - FACTURADO SIN SERVICIO",
                    "OFRECIMIENTO - AJUSTE NO APLICADO",
                    "OFRECIMIENTO - DESCUENTO NO APLICADO"
                ],
                "SERVICIOS_ADICIONALES": [
                    "CON SOLICITUD REGISTRADA - DEMORA EJECUCION",
                    "CON SOLICITUD REGISTRADA - EJECUCION INCOMPLETA",
                    "CON SOLICITUD REGISTRADA - ERROR EN EL REGISTRO",
                    "CON SOLICITUD REGISTRADA - NO SOLICITO",
                    "SIN SOLICITUD REGISTRADA - REITERATIVO",
                    "CARGO - COSTO SERVICIO DIFERENTE OFRECIDO",
                    "CARGO - NO DESEA REALIZAR PAGO",
                    "SERVICIO - PROBLEMA CONTINUA"
                ],
                "SUSPENSION_TEMPORAL_RECONEXION": [
                    "CON SOLICITUD REGISTRADA - DEMORA EJECUCION",
                    "SIN SOLICITUD REGISTRADA - REITERATIVO",
                    "CON SOLICITUD REGISTRADA - EJECUCION INCOMPLETA",
                    "CON SOLICITUD REGISTRADA - NO SOLICITO",
                    "CON SOLICITUD REGISTRADA - ERROR EN EL REGISTRO",
                    "CON SOLICITUD REGISTRADA - NO SOLICITO RECONEXION ANTICIPADA"
                ],
                "TRASLADO": [
                    "CON SOLICITUD REGISTRADA - DEMORA EJECUCION",
                    "CON SOLICITUD REGISTRADA - NO SOLICITO",
                    "CARGO - COSTO SERVICIO DIFERENTE OFRECIDO",
                    "VT - DAÑO EN PROPIEDAD DURANTE VISITA",
                    "CON SOLICITUD REGISTRADA - ERROR EN DIRECCION DE REGISTRO",
                    "CARGO - NO DESEA REALIZAR PAGO",
                    "SIN SOLICITUD REGISTRADA - REITERATIVO",
                    "CON SOLICITUD REGISTRADA - EJECUCION INCOMPLETA",
                    "CON SOLICITUD REGISTRADA - ERROR EN EL REGISTRO"
                ],
                "ERROR_DETECTABLE": [
                    "RECIBO MAL EMITIDO"
                ],
                "CAMBIO_PLAN_REPOSICIONAMIENTO": [
                    "CAMBIO_PLAN - REPOSICIONAMIENTO"
                ],
                "REPOSICIONAMIENTO_CAMBIO DE TARIFA": [
                    "REPOSICIONAMIENTO_CAMBIO DE TARIFA"
                ]
            };

            // Init Motivos de Devolución Dropdown
            const selAjusteMotivo = document.getElementById('ajuste-motivo-dev');
            const selAjusteSubMotivo = document.getElementById('ajuste-submotivo-dev');
            
            Object.keys(motivosDevolucionData).forEach(motivo => {
                const opt = document.createElement('option');
                opt.value = motivo;
                opt.textContent = motivo;
                selAjusteMotivo.appendChild(opt);
            });
            
            selAjusteMotivo.addEventListener('change', () => {
                const selectedMotivo = selAjusteMotivo.value;
                selAjusteSubMotivo.innerHTML = '<option value=""></option>';
                
                if (selectedMotivo && motivosDevolucionData[selectedMotivo]) {
                    motivosDevolucionData[selectedMotivo].forEach(sub => {
                        const opt = document.createElement('option');
                        opt.value = sub;
                        opt.textContent = sub;
                        selAjusteSubMotivo.appendChild(opt);
                    });
                }
            });

            // Populate Medio
            selMedio.innerHTML = '<option value="">Selecciona opción...</option>';
            Object.keys(registroData).forEach(medio => {
                const opt = document.createElement('option');
                opt.value = medio;
                opt.textContent = medio;
                selMedio.appendChild(opt);
            });

            // On Medio Change
            selMedio.addEventListener('change', () => {
                const medioValue = selMedio.value;
                selTipo.innerHTML = '<option value="">Selecciona opción...</option>';
                selMotivo.innerHTML = '<option value="">Selecciona opción...</option>';
                txtObservaciones.value = '';
                evaluateDynamicModules();

                if (medioValue && registroData[medioValue]) {
                    Object.keys(registroData[medioValue]).forEach(tipo => {
                        const opt = document.createElement('option');
                        opt.value = tipo;
                        opt.textContent = tipo;
                        selTipo.appendChild(opt);
                    });
                }
            });

            // On Tipo Change
            selTipo.addEventListener('change', () => {
                const medioValue = selMedio.value;
                const tipoValue = selTipo.value;
                selMotivo.innerHTML = '<option value="">Selecciona opción...</option>';
                txtObservaciones.value = '';
                evaluateDynamicModules();

                if (medioValue && tipoValue && registroData[medioValue][tipoValue]) {
                    Object.keys(registroData[medioValue][tipoValue]).forEach(motivo => {
                        const opt = document.createElement('option');
                        opt.value = motivo;
                        opt.textContent = motivo;
                        selMotivo.appendChild(opt);
                    });
                }
            });

            // On Motivo Change
            selMotivo.addEventListener('change', () => {
                const medioValue = selMedio.value;
                const tipoValue = selTipo.value;
                const motivoValue = selMotivo.value;
                txtObservaciones.value = '';

                if (medioValue && tipoValue && motivoValue && registroData[medioValue][tipoValue][motivoValue]) {
                    txtObservaciones.value = registroData[medioValue][tipoValue][motivoValue];
                }
                
                evaluateDynamicModules();
            });
            
            function evaluateDynamicModules() {
                const medio = selMedio.value;
                const tipo = selTipo.value;
                const motivo = selMotivo.value;
                
                // Hide all by default
                moduleAjustes.classList.add('hidden');
                moduleBeneficios.classList.add('hidden');
                containerObservaciones.classList.remove('hidden');
                
                if (medio === "FIDELIZACION RETENIDOS" && tipo === "SEGÚN TIPO DE LLAMADA") {
                    if (["AJUSTE FIDELIZACIÓN", "AJUSTE FUNDADO", "DESCUENTO FIDELIZACIÓN", "DESCUENTO FUNDADO"].includes(motivo)) {
                        // Show Ajustes Module, hide normal textarea
                        moduleAjustes.classList.remove('hidden');
                        containerObservaciones.classList.add('hidden');
                    } else if (motivo === "INFORMACIÓN DE BENEFICIOS") {
                        // Show normal textarea AND Beneficios module
                        moduleBeneficios.classList.remove('hidden');
                    }
                }
            }

            // Copy Observaciones Button
            btnCopyObs.addEventListener('click', () => {
                if(txtObservaciones.value.trim() === '') {
                    showToast('No hay plantilla para copiar', 'warning');
                    return;
                }
                copyToClipboard(txtObservaciones.value, '¡Plantilla copiada exitosamente!');
            });
        }

        // --- LÓGICA DEL MÓDULO TICKETS ---
        function initTicketsModule() {
            // DB para Buscador de Tickets
            const ticketsDB = [
                {
                    id: "t-alta-mesh",
                    canal: "ALTA NUEVA",
                    tipo: "MESH",
                    motivo: "PENDIENTE DE ENTREGA",
                    descripcion: "Entrega de MESH en comodato.",
                    plantilla: "|COD PEDIDO|\n|TELEFONOS DE REFERENCIA|\n|MODALIDAD| COMODATO\n|CANTIDAD|"
                },
                {
                    id: "t-del-1tel",
                    canal: "DELIVERY",
                    tipo: "EQUIPOS",
                    motivo: "1 APARATO TELEFÓNICO",
                    descripcion: "",
                    plantilla: "|COD PEDIDO|\n|TELEFONOS DE REFERENCIA|\n|AUTORIZADO POR|\n|MODALIDAD|\n|OBS|"
                },
                {
                    id: "t-del-1wb",
                    canal: "DELIVERY",
                    tipo: "EQUIPOS",
                    motivo: "1 WINBOX (EN COMODATO)",
                    descripcion: "",
                    plantilla: "|COD PEDIDO|\n|TELEFONOS DE REFERENCIA|\n|AUTORIZADO POR|\n|MODALIDAD|\n|OBS|"
                },
                {
                    id: "t-del-2wb",
                    canal: "DELIVERY",
                    tipo: "EQUIPOS",
                    motivo: "SI REQUIERE 2 WINBOX EN COMODATO SE DEBE INGRESAR POR LA BITÁCORA",
                    descripcion: "Requiere bitácora para procesar 2 Winbox en comodato.",
                    plantilla: ""
                },
                {
                    id: "t-del-utp",
                    canal: "DELIVERY",
                    tipo: "EQUIPOS",
                    motivo: "CABLEADO UTP AL CONTADO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-del-pro",
                    canal: "DELIVERY",
                    tipo: "EQUIPOS",
                    motivo: "KIT WIFI PRO (AL CONTADO)",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-del-proutp",
                    canal: "DELIVERY",
                    tipo: "EQUIPOS",
                    motivo: "KIT WIFI PRO + CABLEADO UTP (AL CONTADO)",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-inst-dano",
                    canal: "INSTALACIONES",
                    tipo: "PROBLEMAS DE INSTALACIÓN",
                    motivo: "DAÑO EN LA PROPIEDAD",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-inst-des",
                    canal: "INSTALACIONES",
                    tipo: "PROBLEMAS DE INSTALACIÓN",
                    motivo: "DESACUERDO CON LA INSTALACIÓN",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-inst-inc",
                    canal: "INSTALACIONES",
                    tipo: "PROBLEMAS DE INSTALACIÓN",
                    motivo: "INSTALACIÓN INCOMPLETA",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-inst-inv",
                    canal: "INSTALACIONES",
                    tipo: "PROBLEMAS DE INSTALACIÓN",
                    motivo: "INVASIÓN ESPACIO DE UN TERCERO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-inst-cab",
                    canal: "INSTALACIONES",
                    tipo: "PROBLEMAS DE INSTALACIÓN",
                    motivo: "PROBLEMAS CON EL CABLEADO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-inst-tec",
                    canal: "INSTALACIONES",
                    tipo: "PROBLEMAS DE INSTALACIÓN",
                    motivo: "PROBLEMAS CON EL TÉCNICO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-inst-est",
                    canal: "INSTALACIONES",
                    tipo: "PROBLEMAS DE INSTALACIÓN",
                    motivo: "PROBLEMAS ESTÉTICOS",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-inst-pro",
                    canal: "INSTALACIONES",
                    tipo: "PROBLEMAS DE INSTALACIÓN",
                    motivo: "PROTOCOLO DE SEGURIDAD",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-lv-ab",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "LOS VERDE",
                    motivo: "ANCHO DE BANDA",
                    descripcion: "Cuando el cliente indica que no le llega la velocidad mínima garantizada luego de realizar un test de velocidad.",
                    plantilla: "|DNI|\n|CLIENTE|\n|TELÉFONO|\n|DIRECCIÓN|\n|COD. PEDIDO|\n|DESCARTES REALIZADOS|\n|OBSERVACIONES|"
                },
                {
                    id: "t-sop-lv-int",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "LOS VERDE",
                    motivo: "INTERMITENCIA",
                    descripcion: "Cuando el cliente indica intermitencia o cortes constantes en su navegación.",
                    plantilla: "|DNI|\n|CLIENTE|\n|TELÉFONO|\n|DIRECCIÓN|\n|COD. PEDIDO|\n|DESCARTES REALIZADOS|\n|OBSERVACIONES|"
                },
                {
                    id: "t-sop-lv-len",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "LOS VERDE",
                    motivo: "LENTITUD",
                    descripcion: "",
                    plantilla: "|DNI|\n|CLIENTE|\n|TELÉFONO|\n|DIRECCIÓN|\n|COD. PEDIDO|\n|DESCARTES REALIZADOS|\n|OBSERVACIONES|"
                },
                {
                    id: "t-sop-lv-per",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "LOS VERDE",
                    motivo: "PÉRDIDA TOTAL",
                    descripcion: "",
                    plantilla: "|DNI|\n|CLIENTE|\n|TELÉFONO|\n|DIRECCIÓN|\n|COD. PEDIDO|\n|DESCARTES REALIZADOS|\n|OBSERVACIONES|"
                },
                {
                    id: "t-sop-mt-rou",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "MEJORA TECNOLÓGICA",
                    motivo: "CAMBIO DE ROUTER",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-se-app",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SERVICIOS ESPECIALES",
                    motivo: "APP",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-se-gam",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SERVICIOS ESPECIALES",
                    motivo: "GAMER",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-se-web",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SERVICIOS ESPECIALES",
                    motivo: "PAGINA WEB",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-cam",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "CAMARA",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-dir",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "DIRECTVGO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-fon",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "FONO WIN",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-lig",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "LIGA 1",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-mes",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "MESH",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-par",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "PARAMOUNT+",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-win",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "WIN BOX",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-gam",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "WIN GAMES",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-sv-wtv",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "SVA",
                    motivo: "WINTV",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-acc",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "ACCESO A SERVIDOR",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-act",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "ACTIVACIÓN EXITLAG",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-anc",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "ANCHO DE BANDA",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-cam",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "CAMBIO DE IP",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-des",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "DESACTIVAR EXITLAG",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-incm",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "INCONVENIENTES MESH",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-inco",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "INCONVENIENTES OTROS DISPOSITIVOS",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-inct",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "INCONVENIENTES TELEFONÍA",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-incw",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "INCONVENIENTES WIFI",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-lat",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "LATENCIA",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-len",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "LENTITUD",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-per",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "PÉRDIDA DE PAQUETES",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-pert",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "PÉRDIDA TOTAL",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-pron",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "PROBLEMAS CON NITRO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-pros",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "PROBLEMAS DE STREAMING",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-pg-tra",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "PLANES GAMERS",
                    motivo: "TRANSFERENCIA NO CONCRETADA",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-lr",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "LOS ROJO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-cm",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "CABLEADO DE MESH",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-cm1",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "CABLEADO MESH 1 SOL",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-cm5",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "CABLEADO MESH 50%",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-co",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "CAMBIO DE ONT",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-co1",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "CAMBIO DE ONT 1 SOL",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-co5",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "CAMBIO DE ONT 50%",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-cw",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "CAMBIO DE WINBOX",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-m15",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "MIGRA A XGSPON 1.5 GBPS + 2 MESH WIFI6",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-m20",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "MIGRA A XCSPON 2.0 GBPS + 2 MESH WIFI6",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-m25",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "MIGRA A XGSPON 2.5 GBPS + 2 MESH WIFI6",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-mg",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "MIGRA GAMER+",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-pat",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "PATCHCORD",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-pat1",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "PATCHCORD 1 SOL",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-rec",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "RECABLEADO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-rec1",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "RECABLEADO 1 SOL",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-rec5",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "RECABLEADO 50%",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-reu",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "REUBICACIÓN",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-reu1",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "REUBICACIÓN 1 SOL",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-reu5",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "REUBICACIÓN 50%",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-tra",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "TRASLADO",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-tco",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "TRASLADO + CAMBIO DE ONT",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-tra1",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "TRASLADO 1 SOL",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-tra5",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "TRASLADO 50%",
                    descripcion: "",
                    plantilla: ""
                },
                {
                    id: "t-sop-vt-we",
                    canal: "SOPORTE TECNOLÓGICO",
                    tipo: "VISITA TÉCNICA",
                    motivo: "WIN EXPERIENCIA 360",
                    descripcion: "",
                    plantilla: ""
                }
            ];

            const elCanal = document.getElementById('ticket-canal');
            const elTipo = document.getElementById('ticket-tipo');
            const elMotivo = document.getElementById('ticket-motivo');
            const elPlantilla = document.getElementById('ticket-plantilla');
            const elDescBox = document.getElementById('ticket-desc-box');
            const elBtnBitacora = document.getElementById('ticket-btn-bitacora');
            const elBtnCopy = document.getElementById('ticket-btn-copy');
            const elSearch = document.getElementById('ticket-search');
            const elResults = document.getElementById('ticket-results');

            // DB para estructura dependiente dinámica
            const ticketsData = {};
            ticketsDB.forEach(t => {
                if (!ticketsData[t.canal]) ticketsData[t.canal] = {};
                if (!ticketsData[t.canal][t.tipo]) ticketsData[t.canal][t.tipo] = [];
                ticketsData[t.canal][t.tipo].push(t);
            });

            // Handlers
            elCanal.addEventListener('change', () => {
                const canal = elCanal.value;
                elTipo.innerHTML = '<option value="">Selecciona opción...</option>';
                elMotivo.innerHTML = '<option value="">Selecciona opción...</option>';
                resetTicketInfo();

                if (canal && ticketsData[canal]) {
                    Object.keys(ticketsData[canal]).forEach(tipo => {
                        const opt = document.createElement('option');
                        opt.value = tipo;
                        opt.textContent = tipo;
                        elTipo.appendChild(opt);
                    });
                }
            });

            elTipo.addEventListener('change', () => {
                const canal = elCanal.value;
                const tipo = elTipo.value;
                elMotivo.innerHTML = '<option value="">Selecciona opción...</option>';
                resetTicketInfo();

                if (canal && tipo && ticketsData[canal][tipo]) {
                    ticketsData[canal][tipo].forEach(t => {
                        const opt = document.createElement('option');
                        opt.value = t.motivo;
                        opt.textContent = t.motivo;
                        elMotivo.appendChild(opt);
                    });
                }
            });

            elMotivo.addEventListener('change', () => {
                const canal = elCanal.value;
                const tipo = elTipo.value;
                const motivo = elMotivo.value;
                
                if (canal && tipo && motivo && ticketsData[canal][tipo]) {
                    const found = ticketsData[canal][tipo].find(t => t.motivo === motivo);
                    if (found) {
                        applyTicketInfo(found);
                    }
                } else {
                    resetTicketInfo();
                }
                highlightTicketCard(canal, tipo, motivo);
            });

            function highlightTicketCard(canal, tipo, motivo) {
                document.querySelectorAll('.ticket-card').forEach(card => {
                    if (card.dataset.canal === canal && card.dataset.tipo === tipo && card.dataset.motivo === motivo) {
                        card.classList.add('bg-blue-50', 'border-[#1E6091]');
                        card.classList.remove('bg-white', 'border-slate-200');
                    } else {
                        card.classList.remove('bg-blue-50', 'border-[#1E6091]');
                        card.classList.add('bg-white', 'border-slate-200');
                    }
                });
            }

            function resetTicketInfo() {
                elPlantilla.value = '';
                elPlantilla.classList.remove('hidden');
                elDescBox.textContent = '';
                elDescBox.classList.add('hidden');
                elBtnBitacora.classList.add('hidden');
                elBtnBitacora.classList.remove('flex');
                elBtnCopy.classList.remove('hidden');
                elBtnCopy.classList.add('flex');
            }

            function applyTicketInfo(t) {
                elPlantilla.value = t.plantilla || '';
                
                if (t.descripcion) {
                    elDescBox.textContent = t.descripcion;
                    elDescBox.classList.remove('hidden');
                } else {
                    elDescBox.textContent = '';
                    elDescBox.classList.add('hidden');
                }
                
                if (t.motivo === "SI REQUIERE 2 WINBOX EN COMODATO SE DEBE INGRESAR POR LA BITÁCORA") {
                    elBtnBitacora.classList.remove('hidden');
                    elBtnBitacora.classList.add('flex');
                    elPlantilla.classList.add('hidden');
                    elBtnCopy.classList.add('hidden');
                    elBtnCopy.classList.remove('flex');
                } else {
                    elBtnBitacora.classList.add('hidden');
                    elBtnBitacora.classList.remove('flex');
                    elPlantilla.classList.remove('hidden');
                    elBtnCopy.classList.remove('hidden');
                    elBtnCopy.classList.add('flex');
                }
            }

            elBtnCopy.addEventListener('click', () => {
                if (elPlantilla.value.trim() === '') {
                    showToast('No hay plantilla para copiar', 'warning');
                    return;
                }
                copyToClipboard(elPlantilla.value, '¡Plantilla copiada exitosamente!');
            });

            // Buscador Global de Tickets (Inyectado Globalmente)
            window.renderTicketsSearch = function(query) {
                if(!elResults) return;
                elResults.innerHTML = '';
                const q = query.toLowerCase();

                const filtered = ticketsDB.filter(t => {
                    return t.canal.toLowerCase().includes(q) ||
                           t.tipo.toLowerCase().includes(q) ||
                           t.motivo.toLowerCase().includes(q) ||
                           t.descripcion.toLowerCase().includes(q);
                });

                if (filtered.length === 0) {
                    elResults.innerHTML = `
                        <div class="p-4 text-center text-slate-400 text-xs">
                            <i class="fa-solid fa-magnifying-glass mb-2 block text-lg"></i>
                            No se encontraron tickets.
                        </div>
                    `;
                    return;
                }

                filtered.forEach(t => {
                    const card = document.createElement('div');
                    card.className = "ticket-card bg-white p-4 border border-slate-200 rounded-lg transition-all flex flex-col gap-2";
                    card.dataset.canal = t.canal;
                    card.dataset.tipo = t.tipo;
                    card.dataset.motivo = t.motivo;
                    
                    const isBitacoraCase = t.motivo === "SI REQUIERE 2 WINBOX EN COMODATO SE DEBE INGRESAR POR LA BITÁCORA";

                    card.innerHTML = `
                        <div class="flex flex-wrap gap-1 mb-1">
                            <span class="text-[9px] bg-slate-200 text-slate-600 font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">${t.canal}</span>
                            <span class="text-[9px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">${t.tipo}</span>
                        </div>
                        <span class="font-bold text-slate-800 text-sm leading-tight">${t.motivo}</span>
                        ${t.descripcion ? `<p class="text-xs text-slate-500 italic">${t.descripcion}</p>` : ''}
                        
                        ${!isBitacoraCase && t.plantilla ? `
                        <div class="bg-slate-50 border border-slate-200 rounded p-2 mt-1">
                            <pre class="text-[10px] text-slate-600 font-mono whitespace-pre-wrap">${t.plantilla}</pre>
                        </div>
                        ` : ''}

                        <div class="flex flex-row gap-2 mt-2 pt-2 border-t border-slate-100">
                            ${!isBitacoraCase ? `
                            <button class="btn-ticket-copy flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-1.5 px-2 rounded text-xs transition flex items-center justify-center gap-1.5 border border-slate-300">
                                <i class="fa-regular fa-copy"></i>
                                COPIAR
                            </button>
                            ` : ''}
                            <button class="btn-ticket-load flex-1 bg-[#1E6091] hover:bg-blue-800 text-white font-bold py-1.5 px-2 rounded text-xs transition flex items-center justify-center gap-1.5">
                                <i class="fa-solid fa-arrow-turn-down"></i>
                                CARGAR EN SIMULADOR
                            </button>
                        </div>
                    `;
                    
                    // Button logic
                    if (!isBitacoraCase) {
                        const copyBtn = card.querySelector('.btn-ticket-copy');
                        if (copyBtn) {
                            copyBtn.addEventListener('click', (e) => {
                                e.stopPropagation();
                                if (t.plantilla) {
                                    copyToClipboard(t.plantilla, '¡Plantilla copiada exitosamente!');
                                } else {
                                    showToast('No hay plantilla para copiar', 'warning');
                                }
                            });
                        }
                    }

                    const loadBtn = card.querySelector('.btn-ticket-load');
                    if (loadBtn) {
                        loadBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            
                            // Función auxiliar
                            const ensureOptionExists = (selectEl, value) => {
                                if(!Array.from(selectEl.options).some(o => o.value === value)) {
                                    const opt = document.createElement('option');
                                    opt.value = value;
                                    opt.textContent = value;
                                    selectEl.appendChild(opt);
                                }
                            };
                            
                            // Simulate manual selection
                            ensureOptionExists(elCanal, t.canal);
                            elCanal.value = t.canal;
                            elCanal.dispatchEvent(new Event('change'));

                            ensureOptionExists(elTipo, t.tipo);
                            elTipo.value = t.tipo;
                            elTipo.dispatchEvent(new Event('change'));

                            ensureOptionExists(elMotivo, t.motivo);
                            elMotivo.value = t.motivo;
                            elMotivo.dispatchEvent(new Event('change'));

                            showToast(`Ticket cargado en simulador: ${t.motivo}`, 'success');
                        });
                    }
                    
                    elResults.appendChild(card);
                });
                
                // Highlight initially
                highlightTicketCard(elCanal.value, elTipo.value, elMotivo.value);
            };

            if(elSearch) {
                elSearch.addEventListener('input', (e) => {
                    renderTicketsSearch(e.target.value);
                });
            }
        } // Cierre de initTicketsModule

    
