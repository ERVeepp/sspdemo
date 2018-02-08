export const contents = (state, getters, rootState, rootGetters) => {
  let data = {}
  state.contents.map(function (ele, index) {
    if (ele.id.toString() === rootGetters.lang.toString()) {
      data = state.contents[index]
    }
  })
  return data
}
export const slotdata = (state, getters, rootState, rootGetters) => {
  return state.slotdata
}
export const videoconfigdata = (state, getters, rootState, rootGetters) => {
  return state.videoconfigdata
}
