export const lang = (state, getters, rootState, rootGetters) => {
  /* let lang = localStorage.lang
  if (lang && lang !== 'null') {
    return = lang
  } else {
    localStorage.lang = 0
    return = 0
  } */

  // 输出总是英文
  return 0
}
export const contents = (state, getters, rootState, rootGetters) => {
  var data = state.contents.filter(ele => ele.id.toString() === rootGetters.lang.toString())
  return data[0]
}
