import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyABZDEipwkckrKiKv_pDgccIS_PHCpOb6I',
  authDomain: 'crwn-db-130f6.firebaseapp.com',
  databaseURL: 'https://crwn-db-130f6.firebaseio.com',
  projectId: 'crwn-db-130f6',
  storageBucket: 'crwn-db-130f6.appspot.com',
  messagingSenderId: '638749419887',
  appId: '1:638749419887:web:0038bbacf3b683b7baa09a'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
