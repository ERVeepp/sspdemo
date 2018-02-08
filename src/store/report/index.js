import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'
import reportdata from './reportdata'
export default {
  namespaced: true,
  modules: {
    reportdata
  },
  state,
  getters,
  mutations,
  actions
}
