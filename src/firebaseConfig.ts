// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD6qHI3mTmEoCbGhPm7hjNW5C7syL8TPaY',
  authDomain: 'thuytarestaurant-4d8cf.firebaseapp.com',
  projectId: 'thuytarestaurant-4d8cf',
  storageBucket: 'thuytarestaurant-4d8cf.firebasestorage.app',
  messagingSenderId: '52278022803',
  appId: '1:52278022803:web:3c5221148c64e295aef366',
  measurementId: 'G-1NX9M2SLYX'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
