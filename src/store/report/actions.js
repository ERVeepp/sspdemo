import * as types from '../mutation-types'
// 改变report
export const changestatus = (context, data) => {
  context.commit(types.CHANGE_STATUS, data)
  // console.log(data)
}
