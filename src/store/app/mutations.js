import * as types from '../mutation-types'
export default {
  [types.CHANGE_STATUS] (state, data) {
    state.appdata.list.map((ele) => {
      if (ele.appid.toString() === data.appid.toString()) {
        ele.status = data.status
      }
    })
  },
  [types.CREATE_APPDATA] (state, data) {
    // console.log(data)
    state.appdata.list.push(data)
  },
  [types.EDIT_APPDATA] (state, data) {
    // console.log(data)
    state.appdata.list.map((ele, index) => {
      if (ele.appid.toString() === data.appid.toString()) {
        state.appdata.list[index] = { ...data }
      }
    })
  }
}
