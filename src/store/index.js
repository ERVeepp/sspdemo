import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'
import report from './report'
import app from './app'
import appplacement from './appplacement'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    report,
    app,
    appplacement
  }
})
