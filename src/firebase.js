import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

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
const usersCollection = db.collection('users')

export const createUser = (user) => {
  return usersCollection.add(user)
}

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
