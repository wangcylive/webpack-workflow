import { UPDATE_USER, UPDATE_YX_MESSAGES_COUNT } from './actions'

const user = {
  auth: true,
  nickName: '',
  token: '',
  role: 0,
  yxMessagesCount: 0
}

export default function (state = user, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.user
      }
    case UPDATE_YX_MESSAGES_COUNT:
      return {
        ...state,
        yxMessagesCount: action.value
      }
    default:
      return state
  }
}