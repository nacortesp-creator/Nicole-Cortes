// data.js - Archivo de datos fijos de la aplicación de enfermería
// Contiene la información clínica estructurada de procedimientos, materiales, precauciones y fichas

const PROCEDIMIENTOS_DATA = {
  "cvp": {
    id: "cvp",
    codigo: "SOP-CVP-003-CL",
    categoria: "Accesos Vasculares",
    titulo: "Canalización de Vía Venosa Periférica (VVP)",
    descripcion: "Inserción de catéter biocompatible en el torrente venoso periférico con fines diagnósticos, transfusionales o terapéuticos de infusión continua o intermitente.",
    nivel: "Intermedio",
    duracion: "10-15 min",
    tipo: "Procedimiento Invasivo",
    tecnica: "Técnica Aséptica",
    precaucion: {
      titulo: "Precaución Clínica & Seguridad del Paciente",
      texto: "Lavado de manos clínico previo y uso estricto de guantes. Verificar antecedentes de alergia al látex o clorhexidina, presencia de fístula arteriovenosa (FAV), vaciamiento ganglionar o mastectomía previa ipsilateral (miembro superior contraindicado para punción)."
    },
    pasos: [
      // FASE 1: ANTES
      {
        id: "cvp-1",
        fase: 1,
        numero: 1,
        titulo: "Verificar indicación médica y orden en ficha clínica.",
        razon: "Razón biosegura: Corroborar tipo de solución, volumen, velocidad de perfusión y propósito terapéutico específico."
      },
      {
        id: "cvp-2",
        fase: 1,
        numero: 2,
        titulo: "Confirmar los 2 identificadores del paciente (Nombre completo y RUT/DNI) y explicar el procedimiento.",
        razon: "Protocolo de metas internacionales OMS. Validar brazalete de identificación y obtener consentimiento verbal informado."
      },
      {
        id: "cvp-3",
        fase: 1,
        numero: 3,
        titulo: "Realizar higiene de manos clínico (Momento 1 y 2 OMS) por 40-60 seg con agua y jabón o solución alcohólica.",
        razon: "Reducción de carga bacteriana transitoria previa a manipular insumos estériles y contacto inicial."
      },
      {
        id: "cvp-4",
        fase: 1,
        numero: 4,
        titulo: "Reunir y verificar caducidad e integridad de la bandeja de materiales.",
        razon: "Inspeccionar envoltorios indemnes: Catéteres seleccionados, llave de 3 pasos, apósito transparente, alcohol al 70%, gasas y contenedor de descarte cortopunzante."
      },
      {
        id: "cvp-5",
        fase: 1,
        numero: 5,
        titulo: "Posicionar confortablemente al paciente y evaluar red venosa (preferir extremidad no dominante, evitar pliegues).",
        razon: "Priorizar venas del antebrazo (cefálica, basílica o intermedia). Evitar flexión articular para minimizar riesgo de extravasación y flebitis mecánica."
      },
      // FASE 2: DURANTE
      {
        id: "cvp-6",
        fase: 2,
        numero: 6,
        titulo: "Colocar ligadura o torniquete a 10-15 cm sobre el sitio de punción seleccionado.",
        razon: "Generar ingurgitación venosa sin ocluir pulso arterial radial. No mantener ligada la extremidad por más de 1 minuto continuo."
      },
      {
        id: "cvp-7",
        fase: 2,
        numero: 7,
        titulo: "Ponerse guantes de procedimiento no estériles (o estériles según protocolo local).",
        razon: "Barrera primaria de protección contra exposición biológica a hemoderivados."
      },
      {
        id: "cvp-8",
        fase: 2,
        numero: 8,
        titulo: "Aplicar antiséptico (Clorhexidina al 2% o alcohol al 70%) en técnica concéntrica o zigzag durante 30 seg y dejar secar al aire libre (¡No soplar!).",
        razon: "El secado completo asegura la acción residual antimicrobiana y previene irritación dolorosa por quemadura química."
      },
      {
        id: "cvp-9",
        fase: 2,
        numero: 9,
        titulo: "Puncionar con el bisel hacia arriba en ángulo de 15° a 30°, observar retorno venoso en la recámara, descender ángulo a 5-10° y avanzar teflón retirando mandril metálico.",
        razon: "Traccionar suavemente la piel hacia abajo para estabilizar la vena. No forzar avance si hay resistencia ósea o valvular."
      },
      {
        id: "cvp-10",
        fase: 2,
        numero: 10,
        titulo: "Soltar ligadura, conectar llave de 3 pasos o alargador purgado, y comprobar permeabilidad aspirando suavemente o infundiendo solución salina.",
        razon: "Confirmar ausencia de dolor agudo, resistencia, edema local o extravasación periférica."
      },
      // FASE 3: DESPUÉS
      {
        id: "cvp-11",
        fase: 3,
        numero: 11,
        titulo: "Fijar con apósito transparente estéril tipo tegaderm cubriendo el punto de inserción (mantener visible).",
        razon: "Permite vigilancia activa del punto de inserción para detección precoz de flebitis, eritema o induración."
      },
      {
        id: "cvp-12",
        fase: 3,
        numero: 12,
        titulo: "Rotular fijación de forma legible: Fecha, Hora, Calibre del Catéter (G) y Nombre del Operador/Estudiante.",
        razon: "Esencial para auditoría clínica y control de recambio según protocolo institucional (habitual 72-96h)."
      },
      {
        id: "cvp-13",
        fase: 3,
        numero: 13,
        titulo: "Descartar de inmediato el mandril cortopunzante en el contenedor rígido de bioseguridad amarillo/rojo (¡NUNCA reencapuchar la aguja!).",
        razon: "Prevención crítica de accidentes cortopunzantes por virus hepatotropos y VIH."
      },
      {
        id: "cvp-14",
        fase: 3,
        numero: 14,
        titulo: "Realizar higiene de manos final y registrar en la hoja de enfermería el procedimiento, sitio anatómico, calibre, tolerancia del paciente e incidentes.",
        razon: "Documentación médico-legal estricta y cierre del ciclo de atención de enfermería."
      }
    ],
    // MATERIALES PARA FUNCIÓN 2
    bandeja: {
      zonaLimpia: [
        { nombre: "Catéter IV 20G (Rosa)", cantidad: "1 unidad", nota: "Calibre principal adulto" },
        { nombre: "Catéter IV 22G (Azul)", cantidad: "1 unidad", nota: "Respaldo por fragilidad capilar" },
        { nombre: "Llave de 3 vías con alargador", cantidad: "1 unidad", nota: "O conector libre de aguja" },
        { nombre: "Jeringa 10 ml + Ampolla SF 0.9%", cantidad: "1 set", nota: "Para purgar y comprobar permeabilidad" }
      ],
      zonaAntisepsia: [
        { nombre: "Clorhexidina alcohólica 2%", cantidad: "1 sachet o ampolla", nota: "O alcohol al 70%" },
        { nombre: "Gasas estériles (7.5 x 7.5 cm)", cantidad: "Pack de 3 u.", nota: "Para secado o hemostasia" },
        { nombre: "Apósito transparente (Tegaderm)", cantidad: "1 unidad", nota: "Con marco adhesivo y rótulo" }
      ],
      zonaSoporte: [
        { nombre: "Guantes de procedimiento limpios", cantidad: "2 pares", nota: "Talla adecuada del estudiante" },
        { nombre: "Torniquete / Ligadura elástica", cantidad: "1 unidad", nota: "Limpio y desinfectado" },
        { nombre: "Caja cortopunzante rígida", cantidad: "1 unidad", nota: "A menos de 50 cm del operador" },
        { nombre: "Almohadilla o paño protector", cantidad: "1 unidad", nota: "Protección de ropa de cama" }
      ]
    },
    checklistMateriales: [
      { id: "mat-cvp-1", nombre: "Catéteres IV (Calibre 20G + Respaldo 22G)", categoria: "Punción", detalle: "Verificar empaques indemnes y fecha de caducidad vigente" },
      { id: "mat-cvp-2", nombre: "Llave de 3 vías con alargador / bioconector", categoria: "Punción", detalle: "Sistema cerrado libre de aguja estéril" },
      { id: "mat-cvp-3", nombre: "Jeringa 10 ml con Solución Fisiológica 0.9%", categoria: "Punción", detalle: "Para purgado previo de la línea y prueba de reflujo" },
      { id: "mat-cvp-4", nombre: "Antiséptico: Clorhexidina al 2% o Alcohol 70%", categoria: "Antisepsia", detalle: "Acción bactericida con tiempo de secado de 30 segundos" },
      { id: "mat-cvp-5", nombre: "Gasas estériles (Pack de 3 unidades)", categoria: "Antisepsia", detalle: "Dimensiones estándar 7.5 x 7.5 cm" },
      { id: "mat-cvp-6", nombre: "Apósito transparente estéril tipo Tegaderm", categoria: "Antisepsia", detalle: "Permite inspección visual del punto de punción" },
      { id: "mat-cvp-7", nombre: "Guantes de procedimiento limpios (no estériles)", categoria: "Protección", detalle: "Barrera biológica según precauciones estándar" },
      { id: "mat-cvp-8", nombre: "Torniquete elástico y campo protector", categoria: "Protección", detalle: "Desinfectado entre pacientes con alcohol 70%" },
      { id: "mat-cvp-9", nombre: "Contenedor rígido para cortopunzantes", categoria: "Protección", detalle: "Nunca reencapuchar la aguja; descarte inmediato" }
    ]
  },
  "flebotomia": {
    id: "flebotomia",
    codigo: "SOP-FLEB-001-CL",
    categoria: "Toma de Muestras",
    titulo: "Toma de Muestras Sanguíneas (Venopunción)",
    descripcion: "Obtención de muestras de sangre venosa mediante sistema al vacío (Vacutainer) o jeringa para exámenes diagnósticos de laboratorio.",
    nivel: "Básico",
    duracion: "5-10 min",
    tipo: "Procedimiento Invasivo",
    tecnica: "Técnica Aséptica",
    precaucion: {
      titulo: "Precaución: Orden de Llenado de Tubos",
      texto: "Respetar estrictamente el orden de llenado de tubos (Hemocultivos -> Tapa Celeste Citrato -> Tapa Roja/Amarillo Suero -> Tapa Lila EDTA -> Tapa Gris Fluoruro) para evitar contaminación cruzada por aditivos."
    },
    pasos: [
      {
        id: "fleb-1",
        fase: 1,
        numero: 1,
        titulo: "Verificar orden de laboratorio y tubos requeridos según exámenes solicitados.",
        razon: "Evita tomas innecesarias o errores en el procesamiento de muestras."
      },
      {
        id: "fleb-2",
        fase: 1,
        numero: 2,
        titulo: "Confirmar los 2 identificadores del paciente y verificar ayuno u otras condiciones previas.",
        razon: "Garantiza la trazabilidad y validez de los resultados bioquímicos."
      },
      {
        id: "fleb-3",
        fase: 1,
        numero: 3,
        titulo: "Realizar higiene de manos clínico y preparar material (camisa, aguja/mariposa, tubos, algodón, torniquete).",
        razon: "Cumplimiento del Momento 2 de la OMS: antes de tarea limpia/aséptica."
      },
      {
        id: "fleb-4",
        fase: 2,
        numero: 4,
        titulo: "Colocar torniquete a 7-10 cm del sitio y palpar vena adecuada (mediana cubital o cefálica).",
        razon: "No mantener el torniquete más de 1 minuto para evitar hemoconcentración."
      },
      {
        id: "fleb-5",
        fase: 2,
        numero: 5,
        titulo: "Limpiar la zona con alcohol al 70% en círculos concéntricos y dejar secar por 30 segundos.",
        razon: "La antisepsia adecuada reduce el riesgo de contaminación y hemólisis."
      },
      {
        id: "fleb-6",
        fase: 2,
        numero: 6,
        titulo: "Puncionar con bisel hacia arriba en ángulo de 15° a 30° e insertar tubos en el orden correcto.",
        razon: "El vacío del tubo extraerá el volumen exacto de sangre requerido."
      },
      {
        id: "fleb-7",
        fase: 2,
        numero: 7,
        titulo: "Retirar torniquete en cuanto la sangre empiece a fluir al último tubo.",
        razon: "Restaura la circulación normal y reduce la presión venosa antes de retirar la aguja."
      },
      {
        id: "fleb-8",
        fase: 3,
        numero: 8,
        titulo: "Retirar aguja colocando torunda de algodón seco sin presionar mientras la aguja esté dentro de la vena.",
        razon: "Previene dolor y laceración de la íntima vascular."
      },
      {
        id: "fleb-9",
        fase: 3,
        numero: 9,
        titulo: "Activar de inmediato el mecanismo de seguridad de la aguja y descartar en contenedor cortopunzante.",
        razon: "Protección biológica inmediata contra pinchazos accidentales."
      },
      {
        id: "fleb-10",
        fase: 3,
        numero: 10,
        titulo: "Homogeneizar tubos por inversión suave (5 a 8 veces según aditivo) y rotular frente al paciente.",
        razon: "La rotulación a pie de cama previene confusiones graves de identidad de muestras."
      }
    ],
    bandeja: {
      zonaLimpia: [
        { nombre: "Camisa portatubos (Holder Vacutainer)", cantidad: "1 unidad", nota: "Dispositivo reutilizable o descartable" },
        { nombre: "Aguja de punción múltiple (21G verde)", cantidad: "1 o 2 u.", nota: "O aguja mariposa / scalp 21G-23G" },
        { nombre: "Tubos de toma de muestra requeridos", cantidad: "Según orden", nota: "Tapa celeste, roja, lila según examen" }
      ],
      zonaAntisepsia: [
        { nombre: "Torundas de algodón secas", cantidad: "4-5 unidades", nota: "Para hemostasia post-punción" },
        { nombre: "Alcohol al 70% (solución o toallitas)", cantidad: "1 frasco o sachet", nota: "Para desinfección dérmica" },
        { nombre: "Cinta adhesiva o parche curita", cantidad: "1 tira", nota: "Para fijar algodón tras hemostasia" }
      ],
      zonaSoporte: [
        { nombre: "Torniquete libre de látex", cantidad: "1 unidad", nota: "Aplicar máx 1 min" },
        { nombre: "Guantes de procedimiento", cantidad: "1 par", nota: "Obligatorio por bioseguridad" },
        { nombre: "Caja cortopunzante de mesa", cantidad: "1 unidad", nota: "Descarte inmediato sin desenroscar con la mano" }
      ]
    },
    checklistMateriales: [
      { id: "mat-fleb-1", nombre: "Agujas de punción múltiple (21G o Mariposa 23G)", categoria: "Punción", detalle: "Empaque estéril indemne con conector roscado" },
      { id: "mat-fleb-2", nombre: "Camisa o adaptador portatubos Vacutainer", categoria: "Punción", detalle: "Limpia y compatible con tubos estándar" },
      { id: "mat-fleb-3", nombre: "Tubos de recolección según orden médica", categoria: "Punción", detalle: "Verificar fecha de caducidad del vacío de cada tubo" },
      { id: "mat-fleb-4", nombre: "Alcohol al 70% y torundas de algodón", categoria: "Antisepsia", detalle: "Algodón estéril o limpio en riñonera" },
      { id: "mat-fleb-5", nombre: "Cinta adhesiva hipoalergénica o parches", categoria: "Antisepsia", detalle: "Para protección final post-hemostasia" },
      { id: "mat-fleb-6", nombre: "Torniquete de goma o tela libre de látex", categoria: "Protección", detalle: "Verificar buen estado de ajuste" },
      { id: "mat-fleb-7", nombre: "Guantes de procedimiento limpios", categoria: "Protección", detalle: "Barrera biológica obligatoria" },
      { id: "mat-fleb-8", nombre: "Contenedor rígido de cortopunzantes", categoria: "Protección", detalle: "Para descartar aguja con holder de seguridad" }
    ]
  },
  "foley": {
    id: "foley",
    codigo: "SOP-FOL-002-CL",
    categoria: "Sondajes",
    titulo: "Instalación de Sonda Foley (Técnica Estéril)",
    descripcion: "Inserción de una sonda vesical a través del meato urinario hasta la vejiga urinaria bajo técnica rigurosamente estéril con balón de fijación.",
    nivel: "Avanzado",
    duracion: "20-25 min",
    tipo: "Técnica Rigurosamente Estéril",
    tecnica: "Estéril Quirúrgica",
    precaucion: {
      titulo: "Precaución: Asepsia Estricta y Balón",
      texto: "Nunca inflar el balón de retención sin haber verificado retorno espontáneo de orina o sin haber introducido la sonda completamente hasta la bifurcación, para evitar rotura o lesión uretral."
    },
    pasos: [
      {
        id: "fol-1",
        fase: 1,
        numero: 1,
        titulo: "Verificar indicación clínica estricta (retención urinaria aguda, balance hídrico estricto o cirugía).",
        razon: "Limitar el uso de sondas urinarias es la principal medida para prevenir ITU-AC."
      },
      {
        id: "fol-2",
        fase: 1,
        numero: 2,
        titulo: "Identificar al paciente, explicar el procedimiento y asegurar privacidad del paciente.",
        razon: "Reduce la ansiedad y favorece la relajación del esfínter uretral externo."
      },
      {
        id: "fol-3",
        fase: 1,
        numero: 3,
        titulo: "Realizar aseo genital previo con agua y jabón antiséptico.",
        razon: "Disminuye la flora microbiana del periné antes de iniciar el procedimiento estéril."
      },
      {
        id: "fol-4",
        fase: 2,
        numero: 4,
        titulo: "Realizar lavado de manos quirúrgico o clínico riguroso y colocarse guantes estériles.",
        razon: "Mantenimiento estricto del campo y técnica estéril."
      },
      {
        id: "fol-5",
        fase: 2,
        numero: 5,
        titulo: "Verificar integridad del balón inflando con agua bidestilada estéril y desinflar completamente.",
        razon: "Asegura que el balón no presente fugas antes de la inserción."
      },
      {
        id: "fol-6",
        fase: 2,
        numero: 6,
        titulo: "Lubricar sonda con gel lubricante estéril e insertar suavemente hasta observar salida de orina.",
        razon: "Minimiza la fricción y el traumatismo de la mucosa uretral."
      },
      {
        id: "fol-7",
        fase: 2,
        numero: 7,
        titulo: "Inflar el balón con el volumen indicado de agua bidestilada estéril (NUNCA solución salina).",
        razon: "La solución salina puede cristalizarse e impedir el desinflado posterior del balón."
      },
      {
        id: "fol-8",
        fase: 3,
        numero: 8,
        titulo: "Traccionar con suavidad hasta sentir tope en el cuello vesical y conectar a bolsa recolectora en circuito cerrado.",
        razon: "El circuito cerrado continuo previene el ingreso de microorganismos intraluminales."
      },
      {
        id: "fol-9",
        fase: 3,
        numero: 9,
        titulo: "Fijar la sonda al muslo del paciente y asegurar la bolsa recolectora bajo el nivel de la vejiga.",
        razon: "Evita tracciones accidentales y previene reflujo urinario retrógrado."
      },
      {
        id: "fol-10",
        fase: 3,
        numero: 10,
        titulo: "Retirar equipo, desecho de material, higiene de manos y registro detallado con volumen de orina obtenido.",
        razon: "Documentación clínica completa y valoración de características de la orina."
      }
    ],
    bandeja: {
      zonaLimpia: [
        { nombre: "Sonda Foley 2 vías (Calibre 14 o 16 Fr)", cantidad: "1 o 2 u.", nota: "Látex siliconado o 100% silicona" },
        { nombre: "Bolsa recolectora en circuito cerrado", cantidad: "1 unidad", nota: "Con válvula antirreflujo y grifo de vaciado" },
        { nombre: "Jeringa 10 ml + Ampolla Agua Bidestilada 10 ml", cantidad: "1 set", nota: "Para insuflar balón (NUNCA suero fisiológico)" }
      ],
      zonaAntisepsia: [
        { nombre: "Campo fenestrado estéril", cantidad: "1 unidad", nota: "Delimita área genital estéril" },
        { nombre: "Gasas estériles y jabón / solución antiséptica", cantidad: "1 set", nota: "Clorhexidina jabonosa al 2%" },
        { nombre: "Gel lubricante urológico estéril / anestésico", cantidad: "1 sachet o jeringa", nota: "Lidocaína en gel al 2%" }
      ],
      zonaSoporte: [
        { nombre: "Guantes estériles quirúrgicos", cantidad: "2 pares", nota: "Talla precisa del operador" },
        { nombre: "Guantes de procedimiento no estériles", cantidad: "1 par", nota: "Para aseo genital previo" },
        { nombre: "Fijador adhesivo de muslo", cantidad: "1 unidad", nota: "Evita tracción uretral" }
      ]
    },
    checklistMateriales: [
      { id: "mat-fol-1", nombre: "Sonda Foley 2 vías (14 o 16 Fr) estéril", categoria: "Sondaje", detalle: "Verificar integridad del envoltorio y fecha vigente" },
      { id: "mat-fol-2", nombre: "Bolsa recolectora de orina en circuito cerrado", categoria: "Sondaje", detalle: "Con escala graduada y válvula antirreflujo" },
      { id: "mat-fol-3", nombre: "Ampolla de Agua Bidestilada estéril (10 ml)", categoria: "Sondaje", detalle: "Estrictamente agua bidestilada; no cristaliza" },
      { id: "mat-fol-4", nombre: "Jeringa estéril de 10 ml", categoria: "Sondaje", detalle: "Para probar balón e insuflar en vejiga" },
      { id: "mat-fol-5", nombre: "Lubricante estéril hidrosoluble (Lidocaína 2%)", categoria: "Antisepsia", detalle: "Minimiza dolor y traumatismo uretral" },
      { id: "mat-fol-6", nombre: "Campo fenestrado estéril y gasas", categoria: "Antisepsia", detalle: "Mantenimiento estricto de campo estéril" },
      { id: "mat-fol-7", nombre: "2 pares de Guantes Quirúrgicos Estériles", categoria: "Protección", detalle: "Técnica aséptica rigurosa" },
      { id: "mat-fol-8", nombre: "Fijación adhesiva para muslo y bolsa de desecho", categoria: "Protección", detalle: "Asegurar drenaje por gravedad bajo nivel de vejiga" }
    ]
  }
};

// DATOS PARA FUNCIÓN 3 Y 4: FICHAS TÉCNICAS Y RECORDATORIOS
const FICHAS_DATA = [
  {
    id: "ficha-10-correctos",
    categoria: "farmacologia",
    categoriaTexto: "Farmacología & Dosis",
    titulo: "Los 10 Correctos en la Administración de Fármacos",
    resumen: "Barrera crítica e innegociable de enfermería para prevenir eventos adversos por medicamentos (EAM).",
    badge: "Seguridad Paciente",
    icon: "vaccines",
    correctos: [
      { num: "01", nombre: "Paciente Correcto", detalle: "Verificar con 2 identificadores activos (Nombre completo y RUT/DNI) en brazalete y verbalmente. Nunca usar número de cama." },
      { num: "02", nombre: "Medicamento Correcto", detalle: "Verificación triple del etiquetado: al sacarlo del botiquín, al prepararlo y antes de administrarlo." },
      { num: "03", nombre: "Dosis Correcta", detalle: "Confirmar orden médica, realizar cálculo y doble chequeo en fármacos de alto riesgo (insulina, heparina, electrolitos concentrados)." },
      { num: "04", nombre: "Vía Correcta", detalle: "Verificar si es IV, IM, SC, VO, SL. Nunca administrar por una vía diferente a la prescrita." },
      { num: "05", nombre: "Hora / Frecuencia Correcta", detalle: "Respetar intervalos terapéuticos para mantener niveles plasmáticos estables (ej: antibióticos cada 8h)." },
      { num: "06", nombre: "Velocidad de Infusión Correcta", detalle: "Calcular goteo o programar bomba de infusión continua (BIC) en mL/h según indicación médica." },
      { num: "07", nombre: "Verificar Alergias e Interacciones", detalle: "Preguntar al paciente y revisar antecedentes de hipersensibilidad antes de cada administración." },
      { num: "08", nombre: "Educación al Paciente", detalle: "Informar qué medicamento recibe, para qué sirve y qué efectos colaterales comunes puede esperar." },
      { num: "09", nombre: "Registro Inmediato", detalle: "Registrar en la hoja de enfermería inmediatamente después de administrar, nunca antes de hacerlo." },
      { num: "10", nombre: "Respuesta / Monitorización", detalle: "Evaluar la respuesta terapéutica y vigilar aparición temprana de efectos adversos post-administración." }
    ]
  },
  {
    id: "ficha-calibres-iv",
    categoria: "calibres",
    categoriaTexto: "Calibres y Colores IV",
    titulo: "Guía Rápida de Calibres Intravenosos (G)",
    resumen: "Codificación cromática internacional (ISO 10555). A menor número de calibre (G), mayor diámetro de la luz del catéter.",
    badge: "Norma ISO 10555",
    icon: "colorize",
    calibres: [
      { g: "14G", color: "Naranja", flujo: "270 mL/min", dim: "2.1 x 45 mm", uso: "Politrauma masivo, reanimación de shock, quirófano urgencia", bg: "bg-orange-500", text: "text-white" },
      { g: "16G", color: "Gris", flujo: "180 mL/min", dim: "1.7 x 45 mm", uso: "Cirugía mayor, transfusión rápida de hemoderivados", bg: "bg-gray-400", text: "text-gray-900" },
      { g: "18G", color: "Verde", flujo: "90 mL/min", dim: "1.3 x 32 mm", uso: "Cirugía general, TAC con contraste, sangre y hemoderivados", bg: "bg-emerald-600", text: "text-white" },
      { g: "20G", color: "Rosa", flujo: "60 mL/min", dim: "1.1 x 32 mm", uso: "Hospitalización general, sueroterapia y antibióticos (Estándar Adultos)", bg: "bg-pink-600", text: "text-white" },
      { g: "22G", color: "Azul", flujo: "36 mL/min", dim: "0.9 x 25 mm", uso: "Adulto mayor con fragilidad capilar, pediatría, venas finas", bg: "bg-blue-500", text: "text-white" },
      { g: "24G", color: "Amarillo", flujo: "20 mL/min", dim: "0.7 x 19 mm", uso: "Neonatología, pediatría, venas de muy difícil acceso", bg: "bg-amber-300", text: "text-amber-900" }
    ]
  },
  {
    id: "ficha-5-momentos",
    categoria: "higiene",
    categoriaTexto: "Higiene de Manos",
    titulo: "Los 5 Momentos del Lavado de Manos OMS",
    resumen: "Protocolo de higiene para prevenir infecciones asociadas a la atención de salud (IAAS).",
    badge: "Obligatorio OMS",
    icon: "clean_hands",
    momentos: [
      { num: 1, titulo: "Antes de tocar al paciente", desc: "Al acercarse al paciente para protegerlo de gérmenes patógenos que llevas en tus manos." },
      { num: 2, titulo: "Antes de realizar una tarea limpia o aséptica", desc: "Inmediatamente antes de manipular vías, sondas, curaciones o medicación." },
      { num: 3, titulo: "Después del riesgo de exposición a líquidos corporales", desc: "Tras contacto con fluidos, drenajes o al retirar guantes." },
      { num: 4, titulo: "Después de tocar al paciente", desc: "Al finalizar la atención y antes de tocar objetos fuera de la unidad del paciente." },
      { num: 5, titulo: "Después del contacto con el entorno del paciente", desc: "Tras tocar barandales, velador, bombas de infusión o monitores." }
    ]
  },
  {
    id: "ficha-punciones-sitios",
    categoria: "punciones",
    categoriaTexto: "Punciones & Sitios IM/SC",
    titulo: "Sitios Anatómicos para Punción Intramuscular y Subcutánea",
    resumen: "Topografía segura para administración de inyectables sin lesionar estructuras nerviosas o vasculares.",
    badge: "Topografía Clínica",
    icon: "pin_drop",
    sitios: [
      { zona: "Cuadrante Superoexterno", tipo: "IM (Glúteo)", angulo: "90° estricto", maxVol: "Hasta 4-5 mL", desc: "Zona dorsoglútea. Trazar cruz imaginaria; previene traumatismo del nervio ciático." },
      { zona: "Músculo Deltoides", tipo: "IM (Brazo)", angulo: "90° rápido", maxVol: "Máximo 1-2 mL", desc: "2 a 3 traveses de dedo bajo el acromion. Ideal para vacunas y analgésicos." },
      { zona: "Vasto Lateral del Muslo", tipo: "IM Preferente", angulo: "90° firme", maxVol: "Hasta 3-4 mL", desc: "Tercio medio de la cara anterolateral. De elección en lactantes y pacientes postrados." },
      { zona: "Tejido Periumbilical", tipo: "Subcutánea (SC)", angulo: "45° a 90°", maxVol: "Máximo 1 mL", desc: "A 3-5 cm del ombligo. Insulinas y heparinas. Rotar cuadrantes para evitar lipodistrofia." }
    ]
  },
  {
    id: "ficha-bioseguridad-iaas",
    categoria: "bioseguridad",
    categoriaTexto: "Bioseguridad & IAAS",
    titulo: "Tipos de Precauciones y Aislamientos Hospitalarios",
    resumen: "Barreras de protección según mecanismo de transmisión para evitar brotes intrahospitalarios.",
    badge: "Prevención IAAS",
    icon: "masks",
    sitios: [
      { zona: "Precauciones Estándar", tipo: "Todo Paciente", angulo: "Siempre", maxVol: "Universal", desc: "Higiene de manos, uso de guantes si hay contacto con fluidos, descarte seguro de cortopunzantes." },
      { zona: "Aislamiento por Contacto", tipo: "Bacterias Multirresistentes", angulo: "Delantal + Guantes", maxVol: "S. aureus, C. difficile", desc: "Pechera manga larga y guantes antes de entrar. Equipo clínico exclusivo en la habitación." },
      { zona: "Aislamiento por Gotitas", tipo: "Partículas > 5 micras", angulo: "Mascarilla Quirúrgica", maxVol: "Influenza, Meningococo", desc: "Mascarilla quirúrgica a menos de 1 metro del paciente. Habitación individual o cohorte." },
      { zona: "Aislamiento Aéreo", tipo: "Núcleos < 5 micras", angulo: "Respirador N95 / FFP2", maxVol: "Tuberculosis, Sarampión", desc: "Presión negativa obligatoria y respirador N95 bien sellado antes de ingresar al box." }
    ]
  }
];
