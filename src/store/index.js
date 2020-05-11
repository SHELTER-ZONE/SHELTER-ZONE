import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ishome: true
  },
    mutations: {
        page(state, bool) {
            state.ishome = bool
        }
  },
    actions: {
  },
    modules: {
  }
})
