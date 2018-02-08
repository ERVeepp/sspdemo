import * as types from '../mutation-types'
// 改变appplacement status
export const changestatus = (context, data) => {
  context.commit(types.CHANGE_STATUS, data)
  // console.log(data)
}
// 创建appplacement
export const createslotdata = (context, data) => {
  context.commit(types.CREATE_SLOTDATA, data)
  // console.log(data)
}
// 修改appplacement
export const editslotdata = (context, data) => {
  context.commit(types.EDIT_SLOTDATA, data)
  // console.log(data)
}
// 创建videoconfig
export const createvideoconfigdata = (context, data) => {
  context.commit(types.CREATE_VIDEOCONFIGDATA, data)
  // console.log(data)
}
// 修改videoconfig
export const editvideoconfigdata = (context, data) => {
  context.commit(types.EDIT_VIDEOCONFIGDATA, data)
  // console.log(data)
}
// 修改videoconfig
export const editsortarr = (context, data) => {
  context.commit(types.EDIT_SORTARR, data)
  // console.log(data)
}
