import Vue from 'vue'
import _ from 'lodash'
import '@/assets/css/tailwind.css'
import App from './App.vue'
import router from './router'
import store from './store'

Object.defineProperty(Vue.prototype, '$lodash', { value: _ })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
