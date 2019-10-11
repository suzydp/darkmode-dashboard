import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as netlifyIdentityWidget from "netlify-identity-widget";

// We can add any javascript universally

// Init Netlilfy Identity
netlifyIdentityWidget.init();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
