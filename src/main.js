import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store: store
}).$mount('#app')
