import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Team from "./views/Team.vue";
import SignIn from "./views/SignInFlow/SignIn.vue";
import Request from "./views/SignInFlow/Request.vue";
import Recover from "./views/SignInFlow/Recover.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(Router);

const router = new Router({
  // we're gonna use history mode to prevent hash(preventing reload even if URL has modified - https://router.vuejs.org/ja/guide/essentials/history-mode.html)
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      // enable require authorization
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/team",
      name: "team",
      component: Team,
      // enable require authorization
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/request",
      name: "request",
      component: Request
    },
    {
      path: "/recover",
      name: "recover",
      component: Recover
    }
  ]
});

// beforeEach is for building method of vue router
router.beforeEach((to, from, next) => {
  // if the user was logging in, return current user's data, if not, return nothing
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth;
  });

  // if user wasn't logging in, return signin page, if not, move to next page
  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;
