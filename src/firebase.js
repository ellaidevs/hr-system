import firebase from 'firebase'

import { ref, onUnmounted } from 'vue'

//establishing connection to firestore/database
const config = {
  apiKey: 'AIzaSyD9zn6Y0vu_RPjO6ewskRPEFIYsqIKyyUs',
  authDomain: 'register-employee-vue.firebaseapp.com',
  projectId: 'register-employee-vue',
  storageBucket: 'register-employee-vue.appspot.com',
  messagingSenderId: '702303308264',
  appId: '1:702303308264:web:9dfdfb929512e18588bc5d',
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()

//establishing connection to firebase collection/table
const hrCollection = db.collection('hr-staff')

export const createHr = (user) => {
  return hrCollection.add(user)
}

export const getHr = async (id) => {
  const user = await hrCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateHr = (id, user) => {
  return hrCollection.doc(id).update(user)
}

export const deleteHr = (id) => {
  return hrCollection.doc(id).delete()
}

export const useLoadHrs = () => {
  const users = ref([])
  const close = hrCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
