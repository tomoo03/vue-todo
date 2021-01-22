import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA3LQ3KLmSKyFAtO902vZX6O2mBmbHJJcE",
  authDomain: "vue-todo-204b0.firebaseapp.com",
  projectId: "vue-todo-204b0",
  storageBucket: "vue-todo-204b0.appspot.com",
  messagingSenderId: "1076866271712",
  appId: "1:1076866271712:web:b63dc32ae12ee3fe954385"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
