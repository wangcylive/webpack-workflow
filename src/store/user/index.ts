import { action, observable } from 'mobx'

export interface User {
  auth: boolean
  nickName: string
  token: string
  role: number
}

class UserStore {
  @observable public user: User = {
    auth: true,
    nickName: '',
    token: '',
    role: 0
  }

  @action
  public updateUser (param: Partial<User>): User {
    this.user = {
      ...this.user,
      ...param
    }
    return this.user
  }
}

export default UserStore
