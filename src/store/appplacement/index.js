import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'
import slotdata from './slotdata'
import videoconfigdata from './videoconfigdata'
export default {
  namespaced: true,
  modules: {
    slotdata,
    videoconfigdata
  },
  state,
  getters,
  mutations,
  actions
}
