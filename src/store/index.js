import Vue from 'vue'
import Vuex from 'vuex'
import { getNotes } from 'api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    notes: []
  },

  actions: {
    FETCH_NOTES: ({commit, state}) => {
      return getNotes().then(notes => {
        commit('SET_NOTES', { notes })
      })
    }
  },

  mutations: {
    SET_USERS: (state, { users }) => {
      state.users = users
    },
    SET_NOTES: (state, { notes }) => {
      state.notes = notes
    }
  },

  getters: {

  }
})

export default store
