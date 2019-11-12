<template>
  <!-- declare bind with : -->
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgrond': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <!-- if isDarkMode is true, apply images for darkmode -->
      <img src="@/assets/DCHQ.svg" v-if="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-if="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Recover Account
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
        <button>Send Email</button>
      </form>
      <router-link
        :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        to="/signin"
      >
        Already have an account? Sign in now.
      </router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import { auth } from "@/main";

export default {
  name: "Recover",
  components: {
    RequestAccount,
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
    onSubmit() {
      // "this" here is specifying v-model above
      const email = this.email;
      const password = this.password;
      // add parameter from the element which defined as v-model above

      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              email: email
            }
          });
        })
        .catch(error => {
          alert("Error: ", error);
        });
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
