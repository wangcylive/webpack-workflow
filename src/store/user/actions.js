export const UPDATE_USER = 'UPDATE_USER'

export function updateUser (user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function login ({ phone, securityCode }) {
  return async function (dispatch) {
    dispatch(updateUser({ ...user, auth: true }))
    return user
  }
}