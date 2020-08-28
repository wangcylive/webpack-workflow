import { UPDATE_USER } from './actions'

export interface User {
  auth: boolean
  nickName: string
  token: string
  role: number
}

export interface Action {
  type: string
  payload: any
}

const user: User = {
  auth: true,
  nickName: '',
  token: '',
  role: 0,
}

export default function (state = user, action: Action): User {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
