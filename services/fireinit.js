// import { Config } from '~/services/config'
// copia en /services/config.js el fichero .json con la configuración de firebase
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/'
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
  apiKey: 'AIzaSyA87KnhyXkAGAsBbpD9rnaCw6TI6dHajHg',
  authDomain: 'irav-d1651.firebaseapp.com',
  databaseURL: 'https://irav-d1651.firebaseio.com',
  projectId: 'irav-d1651',
  storageBucket: 'irav-d1651.appspot.com',
  messagingSenderId: '98646590352'
})

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()

export const db = firebase.firestore()

export const storage = firebase.storage()

function getCurrentUserPromise(auth) {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

export const getCurrentUser = async () => {
  if (auth.currentUser) return auth.currentUser
  const result = await getCurrentUserPromise(auth)
  return result
}

export default firebase
