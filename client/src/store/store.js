import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'

Vue.use(Vuex)

/* eslint-disable */

const store = new Vuex.Store({
  strict: false,
  state: {
    token: '',
    user: '',
    isUserLoggedIn: false,
  },
  plugins: [
    createPersistedState()
  ],
  mutations: {
    setToken: (state, token) => {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser: (state, user) => {
      state.user = user
    },
  },
  actions: {
    setTokenAct: ({ commit }, token) => {
      commit('setToken', token)
    },
    setUserAct: ({ commit }, user) => {
      commit('setUser', user)
    },
  },
})

export default store
