import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backendbase: "http://139.59.17.189:8080/api"
  },
  getters: {
    backendbase(state) {
      return state.backendbase;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
