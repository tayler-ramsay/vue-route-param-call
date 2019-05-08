import Vue from 'vue'
import Vuex from 'vuex'
import lenderService from '@/services/lenderService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lenders: [],
    lender: {}
  },
  mutations: {
    SET_LENDERS(state, lenders) {
      state.lenders = lenders
    },
    SET_LENDER(state, lender) {
      state.lender = lender
    }
  },
  actions: {
    fetchLenders({ commit, dispatch }, param) {
      return lenderService
        .getLenders(param)
        .then(res => {
          commit('SET_LENDERS', res.data)
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was an error fetching lenders: ' + error.message
          }
          dispatch('notification/add', notification, { root: true })
        })
    }
  }
})
