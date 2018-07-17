import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
// 引入login 模块
import login from "../login"
 
export default new Vuex.Store({
  // 通过modules属性引入login 模块。
  modules: {
    login: login
  },// 新增state, getters
  state: {
    job: "web"
  },
  getters: {
    jobTitle (state){
      return state.job + "developer"
    }
  }
})