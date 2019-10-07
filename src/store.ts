import Vue from "vue";
import Vuex, { mapActions } from "vuex";

Vue.use(Vuex);

// Init State
if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}

// Add initial state(isDarkMode: true) to local storage
const userSelectedDarkMode = window.localStorage.getItem("isDarkMode") === "true";
const state = {
  isDarkMode: userSelectedDarkMode
}

// Init getters
const getters = {
  isDarkMode(state: any) {
    return state.isDarkMode
  }
}

// Init Mutations - mutations are group of functions which change the state.
const mutations = {
  toggleDarkMode(state: any) {
    // if darkmode was enable, we gotta toggle darkmode to false
    if(state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      // add local storage to make this state persistent
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      // add local storage to make this state persistent
      window.localStorage.setItem("isDarkMode", "true");
    }
  }
}

// init Actions
const actions = {
  triggerDarkMode(context: any) {
    context.commit('toggleDarkMode');
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});
