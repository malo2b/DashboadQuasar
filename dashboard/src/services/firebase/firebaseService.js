import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const auth = () => {
  return firebase.auth()
}

export const database = () => {
  return firebase.database()
}

export const fBInit = (config) => {
  return firebase.initializeApp(config)
}
