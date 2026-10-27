// js/materiales.js - Lógica interactiva de Consulta de Materiales y Bandeja Clínica (Función 2)

document.addEventListener('DOMContentLoaded', function () {
  let currentProcedureId = 'cvp';

  const procedureSelect = document.getElementById('procedure-select');
  const serviceSelect = document.getElementById('service-select');
  const trayTypeSelect = document.getElementById('tray-type-select');

  const procTitle = document.getElementById('tray-proc-title');
  const procDesc = document.getElementById('tray-proc-desc');
  const procCode = document.getElementById('tray-proc-code');
  const procLevel = document.getElementById('tray-proc-level');

  const sectorAContainer = document.getElementById('sector-a-items');
  const sectorBContainer = document.getElementById('sector-b-items');
  const sectorCContainer = document.getElementById('sector-c-items');

  const checklistContainer = document.getElementById('tray-checklist-items');
  const itemsBadge = document.getElementById('items-badge');
  const progressCircle = document.getElementById('progress-circle');
  const progressPercent = document.getElementById('progress-percent');
  const readinessStatus = document.getElementById('readiness-status');
  const readinessAdvice = document.getElementById('readiness-advice');
  const btnConfirmDeparture = document.getElementById('btn-confirm-departure');
  const btnResetChecklist = document.getElementById('btn-reset-checklist');
  const btnPrintChecklist = document.getElementById('btn-print-checklist');

  function getSavedMaterialsState(procId) {
    try {
      const data = localStorage.getItem('enfermeria_materiales_' + procId);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  function saveMaterialsState(procId, state) {
    try {
      localStorage.setItem('enfermeria_materiales_' + procId, JSON.stringify(state));
      if (typeof dbSync !== 'undefined') {
        dbSync.saveMaterialsProgress(procId, state);
      }
    } catch (e) {
      console.warn('No se pudo guardar materiales en localStorage', e);
    }
  }

  function loadProcedureMaterials(procId) {
    const proc = PROCEDIMIENTOS_DATA[procId];
    if (!proc || !proc.bandeja) return;
    currentProcedureId = procId;

    if (procTitle) procTitle.textContent = 'Bandeja de ' + proc.titulo;
    if (procDesc) procDesc.textContent = proc.descripcion;
    if (procCode) procCode.textContent = 'Cod. ' + proc.codigo;
    if (procLevel) procLevel.textContent = 'Nivel: ' + proc.nivel;

    // Renderizar Zona A (Limpia / Punción)
    if (sectorAContainer) {
      sectorAContainer.innerHTML = '';
      proc.bandeja.zonaLimpia.forEach(item => {
        const div = document.createElement('div');
        div.className = 'p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2 shadow-xs';
        div.innerHTML = `
          <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">check_box_outline_blank</span>
          <div class="flex flex-col flex-1">
            <span class="text-xs font-bold text-on-surface">${item.nombre}</span>
            <span class="text-[11px] text-secondary font-medium">${item.cantidad} • ${item.nota}</span>
          </div>
        `;
        sectorAContainer.appendChild(div);
      });
    }

    // Renderizar Zona B (Antisepsia / Estéril)
    if (sectorBContainer) {
      sectorBContainer.innerHTML = '';
      proc.bandeja.zonaAntisepsia.forEach(item => {
        const div = document.createElement('div');
        div.className = 'p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2 shadow-xs';
        div.innerHTML = `
          <span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">sanitizer</span>
          <div class="flex flex-col flex-1">
            <span class="text-xs font-bold text-on-surface">${item.nombre}</span>
            <span class="text-[11px] text-on-surface-variant font-medium">${item.cantidad} • ${item.nota}</span>
          </div>
        `;
        sectorBContainer.appendChild(div);
      });
    }

    // Renderizar Zona C (Soporte / Desecho)
    if (sectorCContainer) {
      sectorCContainer.innerHTML = '';
      proc.bandeja.zonaSoporte.forEach(item => {
        const div = document.createElement('div');
        div.className = 'p-2.5 rounded-lg bg-surface-container-lowest flex items-start gap-2 shadow-xs border border-surface-container';
        div.innerHTML = `
          <span class="material-symbols-outlined text-tertiary text-[20px] mt-0.5">shield</span>
          <div class="flex flex-col flex-1">
            <span class="text-xs font-bold text-on-surface">${item.nombre}</span>
            <span class="text-[11px] text-on-surface-variant font-medium">${item.cantidad}</span>
          </div>
        `;
        sectorCContainer.appendChild(div);
      });
    }

    // Renderizar Checklist interactivo lateral de alistamiento
    if (checklistContainer) {
      checklistContainer.innerHTML = '';
      const savedState = getSavedMaterialsState(procId);

      proc.checklistMateriales.forEach((item, index) => {
        const isChecked = !!savedState[item.id];
        const label = document.createElement('label');
        label.className = `flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer border ${
          isChecked ? 'bg-surface-container-low border-secondary/30' : 'bg-surface-container-lowest border-outline-variant/30'
        } hover:bg-surface-container shadow-xs`;
        label.dataset.matId = item.id;

        label.innerHTML = `
          <input type="checkbox" class="mat-checkbox mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-[#00507d]" ${isChecked ? 'checked' : ''}>
          <div class="flex flex-col flex-1">
            <span class="mat-title text-xs font-bold text-on-surface ${isChecked ? 'line-through opacity-70' : ''}">
              ${item.nombre}
            </span>
            <span class="text-[11px] text-on-surface-variant mt-0.5 leading-tight">
              ${item.detalle}
            </span>
          </div>
          <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
            item.categoria === 'Punción' || item.categoria === 'Sondaje' ? 'bg-primary-fixed text-primary' :
            item.categoria === 'Antisepsia' ? 'bg-secondary-fixed text-secondary' : 'bg-surface-container-high text-on-surface-variant'
          }">
            ${item.categoria}
          </span>
        `;

        const cb = label.querySelector('.mat-checkbox');
        cb.addEventListener('change', function () {
          const title = label.querySelector('.mat-title');
          if (cb.checked) {
            label.classList.add('bg-surface-container-low', 'border-secondary/30');
            label.classList.remove('bg-surface-container-lowest', 'border-outline-variant/30');
            if (title) title.classList.add('line-through', 'opacity-70');
          } else {
            label.classList.remove('bg-surface-container-low', 'border-secondary/30');
            label.classList.add('bg-surface-container-lowest', 'border-outline-variant/30');
            if (title) title.classList.remove('line-through', 'opacity-70');
          }

          const state = getSavedMaterialsState(currentProcedureId);
          state[item.id] = cb.checked;
          saveMaterialsState(currentProcedureId, state);

          updateReadiness();
        });

        checklistContainer.appendChild(label);
      });
    }

    updateReadiness();
  }

  function updateReadiness() {
    const checkboxes = document.querySelectorAll('.mat-checkbox');
    const total = checkboxes.length;
    let checked = 0;

    checkboxes.forEach(cb => {
      if (cb.checked) checked++;
    });

    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;

    if (itemsBadge) itemsBadge.textContent = `${checked} / ${total} Listos`;
    if (progressCircle) progressCircle.setAttribute('stroke-dasharray', `${pct}, 100`);
    if (progressPercent) progressPercent.textContent = `${pct}%`;

    if (checked === total && total > 0) {
      if (readinessStatus) {
        readinessStatus.textContent = '¡Bandeja Completa!';
        readinessStatus.className = 'font-label-md text-sm font-bold text-secondary';
      }
      if (readinessAdvice) {
        readinessAdvice.textContent = 'Todos los insumos han sido verificados. Lista para ingresar al box del paciente.';
      }
      if (btnConfirmDeparture) {
        btnConfirmDeparture.disabled = false;
        btnConfirmDeparture.className = 'w-full py-2.5 px-4 rounded-xl bg-secondary text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-secondary/90 transition-all shadow-sm cursor-pointer';
      }
    } else {
      if (readinessStatus) {
        readinessStatus.textContent = 'Bandeja Incompleta';
        readinessStatus.className = 'font-label-md text-sm font-bold text-error';
      }
      if (readinessAdvice) {
        readinessAdvice.textContent = 'No ingresar a la unidad hasta reunir y marcar el 100% de los insumos requeridos.';
      }
      if (btnConfirmDeparture) {
        btnConfirmDeparture.disabled = true;
        btnConfirmDeparture.className = 'w-full py-2.5 px-4 rounded-xl bg-surface-container-high text-on-surface-variant font-bold text-xs flex items-center justify-center gap-2 cursor-not-allowed opacity-60';
      }
    }
  }

  // Event Listeners
  if (procedureSelect) {
    procedureSelect.addEventListener('change', function () {
      loadProcedureMaterials(this.value);
    });
  }

  if (btnResetChecklist) {
    btnResetChecklist.addEventListener('click', function () {
      if (confirm('¿Deseas desmarcar todos los insumos de esta bandeja?')) {
        saveMaterialsState(currentProcedureId, {});
        loadProcedureMaterials(currentProcedureId);
      }
    });
  }

  if (btnConfirmDeparture) {
    btnConfirmDeparture.addEventListener('click', function () {
      alert('¡Excelente! Tu bandeja está completa y con bioseguridad verificada. Recuerda realizar el Momento 1 de la OMS (Higiene de manos antes de tocar al paciente) al ingresar al box.');
    });
  }

  if (btnPrintChecklist) {
    btnPrintChecklist.addEventListener('click', function () {
      window.print();
    });
  }

  // Inicializar
  loadProcedureMaterials(currentProcedureId);

  // Menú móvil
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
