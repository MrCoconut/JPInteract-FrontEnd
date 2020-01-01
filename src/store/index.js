import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backendbase:"http://161.23.237.17:8080"
  },
  getters: {
    backendbase(state){
      return state.backendbase
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
