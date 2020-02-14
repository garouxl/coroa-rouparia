import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCQQQq9KcYF9J_9gH9x-vyvMkvZD0xm7Sk',
  authDomain: 'coroa-rouparia.firebaseapp.com',
  databaseURL: 'https://coroa-rouparia.firebaseio.com',
  projectId: 'coroa-rouparia',
  storageBucket: 'coroa-rouparia.appspot.com',
  messagingSenderId: '1029554213555',
  appId: '1:1029554213555:web:b5e05255b9fbc0ae6b96c6',
  measurementId: 'G-ZNNV5Q64FS'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(`Error creating user: ${error.message}`)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => {
  console.log(provider)
  auth.signInWithPopup(provider)
}

export default firebase
