import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import {store} from './store/store.js'
import DateFilter from './filters/date.js'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: {App},
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyClajK9l-bxOlDINJ-sRbN-i3EJ0zLrQeQ',
      authDomain: 'first-project-fc28f.firebaseapp.com',
      databaseURL: 'https://first-project-fc28f.firebaseio.com',
      projectId: 'first-project-fc28f',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
