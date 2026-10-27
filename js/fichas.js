// js/fichas.js - Lógica interactiva de Fichas de Apoyo y Recordatorios de Estudio (Funciones 3 y 4)

document.addEventListener('DOMContentLoaded', function () {
  const reminderForm = document.getElementById('reminderForm');
  const remindersList = document.getElementById('remindersList');
  const emptyRemindersState = document.getElementById('emptyRemindersState');
  const reminderCountBadge = document.getElementById('reminderCountBadge');

  const correctosModal = document.getElementById('correctosModal');
  const modalCorrectoTitle = document.getElementById('modalCorrectoTitle');
  const modalCorrectoDetail = document.getElementById('modalCorrectoDetail');
  const modalCorrectoNum = document.getElementById('modalCorrectoNum');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Recuperar recordatorios de localStorage
  function getStoredReminders() {
    try {
      const data = localStorage.getItem('enfermeria_recordatorios');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveStoredReminders(reminders) {
    try {
      localStorage.setItem('enfermeria_recordatorios', JSON.stringify(reminders));
    } catch (e) {
      console.warn('Error al guardar recordatorios en localStorage', e);
    }
  }

  // Renderizar lista de recordatorios
  function renderReminders() {
    const reminders = getStoredReminders();
    if (!remindersList) return;

    if (reminders.length === 0) {
      if (emptyRemindersState) emptyRemindersState.classList.remove('hidden');
      if (reminderCountBadge) reminderCountBadge.textContent = '0 Activos';
      remindersList.innerHTML = '';
      return;
    }

    if (emptyRemindersState) emptyRemindersState.classList.add('hidden');
    if (reminderCountBadge) reminderCountBadge.textContent = `${reminders.length} Activo${reminders.length > 1 ? 's' : ''}`;

    remindersList.innerHTML = '';
    reminders.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        item.completed ? 'bg-surface-container-low border-surface-container opacity-60' : 'bg-surface-container-lowest border-outline-variant/30 shadow-xs hover:border-primary/40'
      }`;

      card.innerHTML = `
        <div class="flex items-start gap-3">
          <button class="toggle-complete-btn mt-0.5 p-1 rounded-lg text-outline hover:text-secondary transition-colors" title="${item.completed ? 'Marcar pendiente' : 'Marcar completado'}">
            <span class="material-symbols-outlined text-[22px] ${item.completed ? 'text-secondary font-bold' : ''}">
              ${item.completed ? 'check_circle' : 'radio_button_unchecked'}
            </span>
          </button>
          <div class="flex flex-col">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-bold text-on-surface ${item.completed ? 'line-through' : ''}">
                ${item.procedure}
              </span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-fixed text-primary">
                ${item.level}
              </span>
            </div>
            <div class="flex items-center gap-2 text-xs text-on-surface-variant mt-1">
              <span class="flex items-center gap-1 font-semibold text-secondary">
                <span class="material-symbols-outlined text-[15px]">alarm</span>
                ${item.timing}
              </span>
              ${item.notes ? `<span>• ${item.notes}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 self-end sm:self-auto">
          <button class="delete-reminder-btn p-1.5 rounded-lg text-outline hover:text-error hover:bg-surface-container transition-colors" title="Eliminar recordatorio">
            <span class="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </div>
      `;

      // Eventos
      const toggleBtn = card.querySelector('.toggle-complete-btn');
      toggleBtn.addEventListener('click', function () {
        item.completed = !item.completed;
        saveStoredReminders(reminders);
        if (typeof dbSync !== 'undefined') {
          dbSync.updateReminderStatus(item.id, item.completed);
        }
        renderReminders();
      });

      const deleteBtn = card.querySelector('.delete-reminder-btn');
      deleteBtn.addEventListener('click', function () {
        if (confirm('¿Eliminar este recordatorio de repaso?')) {
          const removedId = reminders[index].id;
          reminders.splice(index, 1);
          saveStoredReminders(reminders);
          if (typeof dbSync !== 'undefined') {
            dbSync.deleteReminder(removedId);
          }
          renderReminders();
        }
      });

      remindersList.appendChild(card);
    });
  }

  // Manejar creación de nuevo recordatorio
  if (reminderForm) {
    reminderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const procedureInput = document.getElementById('procedureInput').value;
      const timingSelect = document.getElementById('timingSelect').value;
      const reviewLevel = document.querySelector('input[name="reviewLevel"]:checked')?.value || 'Checklist Completo';
      const reminderNotes = document.getElementById('reminderNotes')?.value || '';

      const newReminder = {
        id: 'rem_' + Date.now(),
        procedure: procedureInput,
        timing: timingSelect,
        level: reviewLevel,
        notes: reminderNotes,
        completed: false,
        createdAt: new Date().toISOString()
      };

      const reminders = getStoredReminders();
      reminders.unshift(newReminder);
      saveStoredReminders(reminders);

      if (typeof dbSync !== 'undefined') {
        dbSync.saveReminder(newReminder);
      }

      reminderForm.reset();
      renderReminders();

      alert('¡Recordatorio programado con éxito y sincronizado con Firebase!');
    });
  }

  // Filtrado de Fichas
  window.filterCards = function (category, buttonElement) {
    const allButtons = document.querySelectorAll('.tag-btn');
    allButtons.forEach(btn => {
      btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
      btn.classList.add('bg-surface-container-low', 'text-on-surface-variant');
    });

    if (buttonElement) {
      buttonElement.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
      buttonElement.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
    }

    const cards = document.querySelectorAll('.flashcard');
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  };

  // Mostrar detalle de 10 correctos
  window.showCorrectoDetail = function (numero) {
    const ficha = FICHAS_DATA.find(f => f.id === 'ficha-10-correctos');
    if (!ficha) return;

    const numStr = numero < 10 ? '0' + numero : '' + numero;
    const item = ficha.correctos.find(c => c.num === numStr);
    if (!item) return;

    if (modalCorrectoNum) modalCorrectoNum.textContent = item.num;
    if (modalCorrectoTitle) modalCorrectoTitle.textContent = item.nombre;
    if (modalCorrectoDetail) modalCorrectoDetail.textContent = item.detalle;

    if (correctosModal) correctosModal.classList.remove('hidden');
  };

  if (closeModalBtn && correctosModal) {
    closeModalBtn.addEventListener('click', function () {
      correctosModal.classList.add('hidden');
    });
  }

  if (correctosModal) {
    correctosModal.addEventListener('click', function (e) {
      if (e.target === correctosModal) {
        correctosModal.classList.add('hidden');
      }
    });
  }

  // Precargar recordatorios de ejemplo si está vacío por primera vez
  const initial = getStoredReminders();
  if (initial.length === 0) {
    const defaults = [
      {
        id: 'rem_demo_1',
        procedure: 'Canalización de Vía Venosa Periférica (VVP)',
        timing: '2 horas antes del turno de mañana (05:00 AM)',
        level: 'Checklist Completo',
        notes: 'Repasar calibres 20G y 22G y regla de 2 intentos máximos',
        completed: false
      },
      {
        id: 'rem_demo_2',
        procedure: 'Instalación de Sonda Foley (Técnica Estéril)',
        timing: 'La noche anterior al turno (21:30 PM)',
        level: 'Materiales Clave',
        notes: 'Verificar insuflado con Agua Bidestilada (nunca SF)',
        completed: false
      }
    ];
    saveStoredReminders(defaults);
  }

  renderReminders();

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
