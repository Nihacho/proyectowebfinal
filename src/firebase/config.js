import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // Tu configuración de Firebase aquí
  apiKey: "AIzaSyCfEt6zshPJ4D8dbA69OFOf_d1SNKe1EHc",
  authDomain: "killaydatabase.firebaseapp.com",
  projectId: "killaydatabase",
  storageBucket: "killaydatabase.firebasestorage.app",
  messagingSenderId: "676560512069",
  appId: "1:676560512069:web:8069add66202ce411e2f2c",
  measurementId: "G-7VFDKRRJNP"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)