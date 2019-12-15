import UserStore from '@/store/user'

export class RootStore {
  public userStore: UserStore
  constructor() {
    this.userStore = new UserStore()
  }
}

const store = new RootStore()

export default store
