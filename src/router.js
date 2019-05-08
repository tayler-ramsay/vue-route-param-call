import Vue from 'vue'
import Router from 'vue-router'
import Lenders from './views/Lenders.vue'
import Lender from './views/Lender.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lenders',
      component: Lenders
    },
    {
      path: '/lender/:offered',
      name: 'lender',
      component: Lender,
      props: true
    }
  ]
})
