import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'
import appdata from './appdata'
export default {
  namespaced: true,
  modules: {
    appdata
  },
  state,
  getters,
  mutations,
  actions
}
