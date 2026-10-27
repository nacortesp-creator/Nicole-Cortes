// js/firebase-config.js - Configuración e integración de Google Firebase y Cloud Firestore
// Proyecto: Proyecto Electiva - Enfermería Paso a Paso

const firebaseConfig = {
  apiKey: "AIzaSyC357FWoWnxKHVaqdMbtymRyTnBmmGbAfo",
  authDomain: "proyecto-electiva-6944d.firebaseapp.com",
  databaseURL: "https://proyecto-electiva-6944d-default-rtdb.firebaseio.com",
  projectId: "proyecto-electiva-6944d",
  storageBucket: "proyecto-electiva-6944d.firebasestorage.app",
  messagingSenderId: "645247616472",
  appId: "1:645247616472:web:ba9ea141e576de92b59ead",
  measurementId: "G-9KEVZLFX79"
};

let db = null;
let isFirebaseOnline = false;

// Inicializar Firebase
try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    isFirebaseOnline = true;
    console.log("✓ Firebase y Cloud Firestore inicializados correctamente.");
  }
} catch (err) {
  console.warn("Aviso: Firebase no pudo conectarse directamente, funcionando con respaldo local (localStorage):", err);
}

// Helpers globales para sincronización de datos con Firestore
const dbSync = {
  // --- RECORDATORIOS DE ESTUDIO ---
  async saveReminder(reminder) {
    if (db && isFirebaseOnline) {
      try {
        await db.collection("recordatorios_estudio").doc(reminder.id).set(reminder);
        console.log("Recordatorio sincronizado en Firestore:", reminder.id);
      } catch (e) {
        console.warn("Guardado localmente (error Firestore):", e);
      }
    }
  },

  async deleteReminder(reminderId) {
    if (db && isFirebaseOnline) {
      try {
        await db.collection("recordatorios_estudio").doc(reminderId).delete();
        console.log("Recordatorio eliminado de Firestore:", reminderId);
      } catch (e) {
        console.warn("Error eliminando en Firestore:", e);
      }
    }
  },

  async updateReminderStatus(reminderId, completed) {
    if (db && isFirebaseOnline) {
      try {
        await db.collection("recordatorios_estudio").doc(reminderId).update({ completed });
      } catch (e) {
        console.warn("Error actualizando en Firestore:", e);
      }
    }
  },

  listenReminders(onUpdate) {
    if (db && isFirebaseOnline) {
      try {
        return db.collection("recordatorios_estudio")
          .onSnapshot(snapshot => {
            const list = [];
            snapshot.forEach(doc => list.push(doc.data()));
            if (list.length > 0) {
              onUpdate(list);
            }
          }, err => {
            console.warn("Error en escucha de Firestore, usando respaldo local:", err);
          });
      } catch (e) {
        console.warn("No se pudo iniciar listener de Firestore:", e);
      }
    }
    return null;
  },

  // --- CHECKLISTS DE PROCEDIMIENTOS ---
  async saveChecklistProgress(procId, state) {
    if (db && isFirebaseOnline) {
      try {
        await db.collection("checklists_progreso").doc(procId).set({
          procedimiento: procId,
          pasos: state,
          ultimaActualizacion: new Date().toISOString()
        }, { merge: true });
      } catch (e) {
        console.warn("Guardado en localStorage (error Firestore):", e);
      }
    }
  },

  async loadChecklistProgress(procId, callback) {
    if (db && isFirebaseOnline) {
      try {
        const doc = await db.collection("checklists_progreso").doc(procId).get();
        if (doc.exists && doc.data().pasos) {
          callback(doc.data().pasos);
        }
      } catch (e) {
        console.warn("Cargando desde localStorage (error Firestore):", e);
      }
    }
  },

  // --- BANDEJA DE MATERIALES ---
  async saveMaterialsProgress(procId, state) {
    if (db && isFirebaseOnline) {
      try {
        await db.collection("materiales_progreso").doc(procId).set({
          procedimiento: procId,
          materiales: state,
          ultimaActualizacion: new Date().toISOString()
        }, { merge: true });
      } catch (e) {
        console.warn("Guardado en localStorage (error Firestore):", e);
      }
    }
  }
};
