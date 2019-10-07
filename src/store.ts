import Vue from "vue";
import Vuex, { mapActions } from "vuex";

Vue.use(Vuex);

// Init State
const state = {
  isDarkMode: true
}

// Init getters
const getters = {
  isDarkMode() {
    return state.isDarkMode
  }
}

// Init Mutations - mutations are group of functions which change the state.
const mutations = {
  toggleDarkMode() {
    // if darkmode was enable, we gotta toggle darkmode to false
    if(state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#212c4f";
      // add local storage to make this state persistent
      window.localStorage.setItem("isDarkMode", "true");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#f0f3f5";
      // add local storage to make this state persistent
      window.localStorage.setItem("isDarkMode", "false");
    }
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: {},
});
