import * as types from '../mutation-types'
export default{
  [types.CHANGE_STATUS] (state, data) {
    state.appdata.list.map((ele) => {
      if (ele.appid.toString() === data.appid.toString()) {
        ele.status = data.status
      }
    })
  }
}
