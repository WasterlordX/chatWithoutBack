import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: '2',
    contactsMain: [],
    contactsIvan: [],
    messages: []
  },
  getters: {
    GETMESSAGES: state => {
      return state.messages;
    }
  },
  mutations: {
    ADD_MESSEGE : (state,payload) => {
      state.messages.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
