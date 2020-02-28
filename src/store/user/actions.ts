export const UPDATE_USER = 'UPDATE_USER'
import { User, Action } from './index'

export function updateUser(user: User): Action {
  return {
    type: UPDATE_USER,
    payload: user,
  }
}
