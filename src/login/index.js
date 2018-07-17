const state = {
  useName: "sam"
};
const mutations = {
  change_name (state, anotherName) {
    state.useName = anotherName;
  }
};
 
const actions = {
  changeName ({commit},anotherName) {
    commit("change_name", anotherName)
  }
};
const getters = {
 
};
 
// 不要忘记把state, mutations等暴露出去。
export default {
  state,
  mutations,
  actions,
  getters
}