import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

// We can add any javascript universally

// Init Netlilfy Identity
netlifyIdentityWidget.init();

Vue.config.productionTip = false;

export const auth = new GoTrue({
  // url is from: https://app.netlify.com/sites/YOUR_SITE_NAME/identity
  APIUrl: "https://szdp-darkroom.netlify.com/.netlify/identity",
  setCookie: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
