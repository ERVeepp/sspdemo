import * as types from './mutation-types'
export default{
  [types.CHANGE_LANG] (state, data) {
    // state = {...state, choicelang: data}
    state.choicelang = data
    localStorage.setItem('lang', data)
  }
}
