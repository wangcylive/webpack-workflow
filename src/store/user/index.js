import { UPDATE_USER } from './actions'

const user = {
  auth: true,
  nickName: '',
  token: '',
  role: 0
}

export default function (state = user, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}