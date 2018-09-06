import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store, // this subscribes every component rendered as a child of App.vue to the store
  render: h => h(App)
}).$mount('#app')
