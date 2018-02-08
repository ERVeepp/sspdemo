import * as types from '../mutation-types'
// 改变app status
export const changestatus = (context, data) => {
  context.commit(types.CHANGE_STATUS, data)
  // console.log(data)
}
// 创建app
export const createappdata = (context, data) => {
  context.commit(types.CREATE_APPDATA, data)
  // console.log(data)
}
// 修改app
export const editappdata = (context, data) => {
  context.commit(types.EDIT_APPDATA, data)
  // console.log(data)
}
