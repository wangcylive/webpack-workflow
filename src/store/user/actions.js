export const UPDATE_USER = 'UPDATE_USER'

export function updateUser (user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function asyncUploadUser () {
  return async function (dispatch) {
    const user = {
      auth: true,
      nickName: 'react',
      token: '123',
      role: 2
    }
    dispatch(updateUser(user))
    return user
  }
}