import * as firebase from '../services/firebase/firebaseService'

export default async () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCKLCkM9KExa12ph3_-pJ4brvI53ewnMes',
    authDomain: 'vuejs-efdb5.firebaseapp.com',
    databaseURL: 'https://vuejs-efdb5.firebaseio.com',
    projectId: 'vuejs-efdb5',
    storageBucket: 'vuejs-efdb5.appspot.com',
    messagingSenderId: '493486266238',
    appId: '1:493486266238:web:a31c1edfa46505487b452f',
    measurementId: 'G-QEEV3NMYNR'
  }
  firebase.fBInit(firebaseConfig)
  // console.log(firebase.database())
}
