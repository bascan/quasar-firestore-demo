<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseApp from 'firebase/app'

export default {
  name: 'App',
  preFetch ({ store }) {
    // Initialize Firebase
    const fierbaseConfig = {
      apiKey: 'AIzaSyDGytmB6E1reBhCAMjA3kA9w5JfJPTXao4',
      authDomain: 'job-cruizer.firebaseapp.com',
      databaseURL: 'https://job-cruizer.firebaseio.com',
      projectId: 'job-cruizer',
      storageBucket: 'job-cruizer.appspot.com',
      messagingSenderId: '689413510386'
    }

    firebaseApp.initializeApp(fierbaseConfig)
    const $db = firebase.firestore()
    // Firebase requirement
    $db.settings({
      timestampsInSnapshots: true
    })
    // Put firebase functionality into
    // state for future access
    Object.assign(store.state, {
      $db: firebase.firestore(),
      $firebase: firebaseApp
    })
  }
}
</script>

<style></style>
