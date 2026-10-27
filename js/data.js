// data.js - Archivo de datos fijos de la aplicación de enfermería
// Contiene la información clínica estructurada de los procedimientos básicos

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
    ]
  }
};
