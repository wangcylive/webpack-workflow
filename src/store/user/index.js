const state = {
  auth: true,
  nickName: '',
  token: '',
  role: 0,
}

const getters = {
  nickName: (state) => state.nickName,
}

const mutations = {
  updateUser(state, payload) {
    Object.assign(state, payload)
  },
}

const actions = {
  async updateUser({ commit }, payload) {
    commit('updateUser', payload)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
