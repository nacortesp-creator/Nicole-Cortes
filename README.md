# Enfermería Paso a Paso 🩺

Aplicación web educativa para estudiantes de enfermería que inician sus prácticas clínicas. Permite repasar el orden exacto de los procedimientos básicos, verificar los materiales necesarios en la bandeja y recordar las precauciones de bioseguridad antes de ingresar a los turnos hospitalarios.

---

## 🎯 Funciones Principales

1. **Listas de Verificación (Checklists de Procedimientos)** (`checklists.html`)
   - Organización secuencial en 3 fases clínicas reales: **Antes** (Preparación e identificación), **Durante** (Ejecución y técnica aséptica) y **Después** (Fijación, descarte seguro y registro).
   - Contador de avance, porcentaje en tiempo real y persistencia local del progreso.
   - Procedimientos incluidos: Canalización de Vía Venosa Periférica (VVP), Toma de Muestras Sanguíneas (Venopunción) e Instalación de Sonda Foley (Técnica Estéril).

2. **Consulta de Materiales y Bandeja Clínica** (`materiales.html`)
   - Mapa espacial de la riñonera/bandeja clínica de acero inoxidable delimitada por sectores: **Zona Limpia** (Punción y vías), **Zona Antisepsia** (Curación y apósitos) y **Zona de Soporte & Desecho**.
   - Checklist de alistamiento de insumos con medidor circular de preparación previa al ingreso al box del paciente.

3. **Precauciones Importantes y Bioseguridad** (`fichas-recordatorios.html`)
   - Los 10 Correctos en la Administración de Fármacos con justificaciones clínicas de seguridad.
   - Guía rápida de calibres intravenosos (14G a 24G) según norma internacional ISO 10555.
   - Protocolo de los 5 Momentos del Lavado de Manos según la OMS.
   - Topografía segura para inyecciones intramusculares (IM) y subcutáneas (SC).
   - Precauciones estándar y medidas de aislamiento hospitalario (Contacto, Gotitas y Aéreo).

4. **Recordatorios de Estudio y Repaso Pre-Práctica** (`fichas-recordatorios.html`)
   - Planificador interactivo para programar repasos espaciados antes de los turnos clínicos.
   - Guardado automático en el navegador del estudiante (`localStorage`).

---

## ⚠️ Lo que la aplicación NO hace

La aplicación **no reemplaza** la enseñanza de los docentes, la supervisión del personal de enfermería ni la valoración clínica del paciente. Tampoco permite diagnosticar enfermedades, prescribir medicamentos o modificar tratamientos. Su propósito es **estrictamente educativo y de apoyo al aprendizaje**. Los procedimientos deben realizarse siguiendo los protocolos institucionales de cada centro asistencial.

---

## 📱 Características Técnicas

- **100% Web Estática & Responsive**: Funciona tanto en navegadores de computador como en pantallas de teléfono móvil (con barra de navegación táctil inferior y menú retráctil).
- **Sin dependencias pesadas**: Construido con HTML5, Tailwind CSS y JavaScript Vanilla nativo.
- **Datos estructurados fijos**: Los procedimientos, pasos y fichas técnicas viven en `js/data.js`.
- **Persistencia**: Utiliza `localStorage` del navegador para recordar el avance de checklists y recordatorios sin necesidad de login ni base de datos obligatoria.
- **Preparado para Firebase / Firestore**: Estructura lista para sincronización remota opcional en etapas posteriores.
