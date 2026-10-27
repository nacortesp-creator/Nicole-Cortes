// js/checklists.js - Lógica interactiva de las Listas de Verificación (Función 1)

document.addEventListener('DOMContentLoaded', function () {
  let currentProcedureId = 'cvp'; // Procedimiento por defecto

  const procedureSelect = document.getElementById('procedure-select');
  const procedureTitle = document.getElementById('proc-title');
  const procedureDesc = document.getElementById('proc-desc');
  const procedureCode = document.getElementById('proc-code');
  const procedureLevel = document.getElementById('proc-level');
  const procedureDuration = document.getElementById('proc-duration');
  const procedureType = document.getElementById('proc-type');
  const procedureTecnica = document.getElementById('proc-tecnica');
  const precautionTitle = document.getElementById('precaution-title');
  const precautionText = document.getElementById('precaution-text');

  const phase1Container = document.getElementById('phase-1-items');
  const phase2Container = document.getElementById('phase-2-items');
  const phase3Container = document.getElementById('phase-3-items');

  const phase1Badge = document.getElementById('phase-1-badge');
  const phase2Badge = document.getElementById('phase-2-badge');
  const phase3Badge = document.getElementById('phase-3-badge');

  const progressBar = document.getElementById('checklist-progress-bar');
  const progressSummary = document.getElementById('progress-text-summary');
  const circleSvg = document.getElementById('svg-progress-circle');
  const circleText = document.getElementById('circle-pct-text');
  const verifiedLabel = document.getElementById('verified-count-label');
  const btnReset = document.getElementById('btn-reset');

  // Recuperar estado de localStorage
  function getSavedState(procId) {
    try {
      const data = localStorage.getItem('enfermeria_checklist_' + procId);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  function saveState(procId, state) {
    try {
      localStorage.setItem('enfermeria_checklist_' + procId, JSON.stringify(state));
    } catch (e) {
      console.warn('No se pudo guardar en localStorage', e);
    }
  }

  // Cargar y renderizar un procedimiento
  function loadProcedure(procId) {
    const proc = PROCEDIMIENTOS_DATA[procId];
    if (!proc) return;
    currentProcedureId = procId;

    if (procedureTitle) procedureTitle.textContent = proc.titulo;
    if (procedureDesc) procedureDesc.textContent = proc.descripcion;
    if (procedureCode) procedureCode.textContent = proc.codigo;
    if (procedureLevel) procedureLevel.textContent = 'Nivel: ' + proc.nivel;
    if (procedureDuration) procedureDuration.textContent = 'Duración prom: ' + proc.duracion;
    if (procedureType) procedureType.textContent = proc.tipo;
    if (procedureTecnica) procedureTecnica.textContent = proc.tecnica;

    if (precautionTitle && proc.precaucion) precautionTitle.textContent = proc.precaucion.titulo;
    if (precautionText && proc.precaucion) precautionText.textContent = proc.precaucion.texto;

    const savedState = getSavedState(procId);

    // Limpiar contenedores
    if (phase1Container) phase1Container.innerHTML = '';
    if (phase2Container) phase2Container.innerHTML = '';
    if (phase3Container) phase3Container.innerHTML = '';

    proc.pasos.forEach(step => {
      const isChecked = !!savedState[step.id];
      const stepElement = createStepElement(step, isChecked);

      if (step.fase === 1 && phase1Container) {
        phase1Container.appendChild(stepElement);
      } else if (step.fase === 2 && phase2Container) {
        phase2Container.appendChild(stepElement);
      } else if (step.fase === 3 && phase3Container) {
        phase3Container.appendChild(stepElement);
      }
    });

    updateProgress();
  }

  // Generar HTML de un paso individual
  function createStepElement(step, isChecked) {
    const label = document.createElement('label');
    label.className = `group flex items-start gap-3 p-3.5 sm:p-4 rounded-xl transition-all cursor-pointer ${
      isChecked ? 'bg-surface-container-low' : 'bg-surface-container-lowest'
    } hover:bg-surface-container shadow-sm border border-outline-variant/30`;
    label.dataset.stepId = step.id;
    label.dataset.fase = step.fase;

    label.innerHTML = `
      <input type="checkbox" class="step-checkbox mt-1 w-5 h-5 rounded text-primary focus:ring-primary cursor-pointer accent-[#0369a1]" ${isChecked ? 'checked' : ''}>
      <div class="flex-1 flex flex-col">
        <span class="step-title font-label-lg text-label-lg text-on-surface ${isChecked ? 'line-through opacity-70 font-normal' : 'font-semibold'}">
          ${step.numero}. ${step.titulo}
        </span>
        <span class="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
          ${step.razon}
        </span>
      </div>
      <span class="material-symbols-outlined text-[22px] shrink-0 mt-0.5 transition-colors ${isChecked ? 'text-secondary' : 'text-outline'}">
        ${isChecked ? 'check_circle' : 'radio_button_unchecked'}
      </span>
    `;

    const checkbox = label.querySelector('.step-checkbox');
    checkbox.addEventListener('change', function () {
      handleStepToggle(label, checkbox.checked, step.id);
    });

    return label;
  }

  // Manejar cambio en un paso
  function handleStepToggle(label, isChecked, stepId) {
    const title = label.querySelector('.step-title');
    const icon = label.querySelector('.material-symbols-outlined');

    if (isChecked) {
      label.classList.add('bg-surface-container-low');
      label.classList.remove('bg-surface-container-lowest');
      if (title) {
        title.classList.add('line-through', 'opacity-70');
        title.classList.remove('font-semibold');
      }
      if (icon) {
        icon.textContent = 'check_circle';
        icon.classList.remove('text-outline');
        icon.classList.add('text-secondary');
      }
    } else {
      label.classList.remove('bg-surface-container-low');
      label.classList.add('bg-surface-container-lowest');
      if (title) {
        title.classList.remove('line-through', 'opacity-70');
        title.classList.add('font-semibold');
      }
      if (icon) {
        icon.textContent = 'radio_button_unchecked';
        icon.classList.remove('text-secondary');
        icon.classList.add('text-outline');
      }
    }

    // Guardar en localStorage
    const savedState = getSavedState(currentProcedureId);
    savedState[stepId] = isChecked;
    saveState(currentProcedureId, savedState);

    updateProgress();
  }

  // Actualizar indicadores de avance
  function updateProgress() {
    const checkboxes = document.querySelectorAll('.step-checkbox');
    const total = checkboxes.length;
    let checked = 0;

    let p1Total = 0, p1Checked = 0;
    let p2Total = 0, p2Checked = 0;
    let p3Total = 0, p3Checked = 0;

    checkboxes.forEach(cb => {
      const label = cb.closest('label');
      const fase = label ? parseInt(label.dataset.fase) : 0;
      if (fase === 1) { p1Total++; if (cb.checked) p1Checked++; }
      else if (fase === 2) { p2Total++; if (cb.checked) p2Checked++; }
      else if (fase === 3) { p3Total++; if (cb.checked) p3Checked++; }

      if (cb.checked) checked++;
    });

    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

    if (progressBar) progressBar.style.width = pct + '%';
    if (progressSummary) progressSummary.textContent = `${checked} de ${total} pasos verificados (${pct}%)`;
    if (circleSvg) circleSvg.setAttribute('stroke-dasharray', `${pct}, 100`);
    if (circleText) circleText.textContent = `${pct}%`;
    if (verifiedLabel) verifiedLabel.textContent = `${checked} de ${total}`;

    // Badges por fase
    if (phase1Badge) phase1Badge.textContent = `${p1Checked} / ${p1Total} Completados`;
    if (phase2Badge) phase2Badge.textContent = `${p2Checked} / ${p2Total} Completados`;
    if (phase3Badge) phase3Badge.textContent = `${p3Checked} / ${p3Total} Completados`;
  }

  // Reiniciar lista
  if (btnReset) {
    btnReset.addEventListener('click', function () {
      if (confirm('¿Deseas reiniciar la lista de verificación para este procedimiento?')) {
        saveState(currentProcedureId, {});
        loadProcedure(currentProcedureId);
      }
    });
  }

  // Selector de procedimiento
  if (procedureSelect) {
    procedureSelect.addEventListener('change', function () {
      loadProcedure(this.value);
    });
  }

  // Inicializar con el procedimiento por defecto
  loadProcedure(currentProcedureId);

  // Manejo de menú móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('main-sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');

  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', function () {
      sidebar.classList.toggle('-translate-x-full');
      if (mobileOverlay) mobileOverlay.classList.toggle('hidden');
    });
  }

  if (mobileOverlay && sidebar) {
    mobileOverlay.addEventListener('click', function () {
      sidebar.classList.add('-translate-x-full');
      mobileOverlay.classList.add('hidden');
    });
  }
});
