import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from './config.js'

Vue.config.productionTip = false
firebase.initializeApp(FIREBASE_CONFIG);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
