import * as types from '../mutation-types'
export default{
  [types.CHANGE_STATUS] (state, data) {
    state.slotdata.list.map((ele) => {
      if (ele.slotid.toString() === data.slotid.toString()) {
        ele.operation = data.operation
      }
    })
  },
  [types.CREATE_SLOTDATA] (state, data) {
    // console.log(data)
    state.slotdata.list.push(data)
  },
  [types.EDIT_SLOTDATA] (state, data) {
    // console.log(data)
    state.slotdata.list.map((ele, index) => {
      if (ele.slotid.toString() === data.slotid.toString() && ele.appid.toString() === data.appid.toString()) {
        state.slotdata.list[index] = { ...data }
      }
    })
  },
  [types.CREATE_VIDEOCONFIGDATA] (state, data) {
    // console.log(data)
    state.videoconfigdata.list.push(data)
  },
  [types.EDIT_VIDEOCONFIGDATA] (state, data) {
    state.videoconfigdata.list.map((ele, index) => {
      if (ele.slot_id.toString() === data.slotid.toString() && ele.app_id.toString() === data.appid.toString()) {
        ele.extarr.map((obj, i) => {
          if (obj.type === data.item.type) {
            state.videoconfigdata.list[index].extarr[i] = { ...data.item }
          }
        })
        if (data.item.status === 2) {
          ele.sortarr.map((obj, i) => {
            if (data.item.type === obj) {
              ele.sortarr.splice(i, 1)
            }
          })
        } else {
          if (!ele.sortarr.includes(data.item.type)) {
            ele.sortarr.unshift(data.item.type)
          }
        }
      }
    })
  },
  [types.EDIT_SORTARR] (state, data) {
    state.videoconfigdata.list.map((ele, index) => {
      if (ele.slot_id.toString() === data.slotid.toString() && ele.app_id.toString() === data.appid.toString()) {
        ele.sortarr = [ ...data.data ]
      }
    })
  }
}
