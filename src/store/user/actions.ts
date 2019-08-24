export const UPDATE_USER = 'UPDATE_USER'
import { User, Action } from './index'

export function updateUser (user: User): Action {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function asyncUploadUser () {
  return async function (dispatch: any) {
    const user: User = {
      auth: true,
      nickName: 'react',
      token: '123',
      role: 2
    }
    dispatch(updateUser(user))
    return user
  }
}