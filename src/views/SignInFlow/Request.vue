<template>
  <!-- declare bind with : -->
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgrond': isDarkMode }"
  >
    <Notification v-if="hasText" v-bind:text="text" />
    <RequestAccount />
    <div class="login">
      <!-- if isDarkMode is true, apply images for darkmode -->
      <img src="@/assets/DCHQ.svg" v-if="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-if="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Request Account
      </h4>
      <!-- prevent is instead of e.preventdefault() -->
      <form @submit.prevent="onSubmit">
        <input
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />
        <button>Request Account</button>
      </form>
      <router-link
        :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        to="/recover"
      >
        Forgot your password?
      </router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Notification from "@/components/Notification.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "Request",
  components: {
    Notification,
    ThemeSwitch
  },
  data() {
    return {
      // null = no value
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  // init state
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    // method toggleDarkMode() is only necessary to switch darkmode
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
    onSubmit() {
      // "this" here is specifying v-model above
      const email = this.email;

      // Slack API logic
    }
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have successfully logged out.";
    }
  }
};
</script>
