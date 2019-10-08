<template>
  <!-- declare bind with : -->
  <div class="container" :class="{'light-background': !isDarkMode, 'dark-backgrond': isDarkMode}">
    <RequestAccount />
    <div class="login">
      <!-- if isDarkMode is true, apply images for darkmode -->
      <img src="@/assets/DCHQ.svg" v-if="isDarkMode">
      <img src="@/assets/DCHQ-dark.svg" v-if="!isDarkMode">
      <h4 :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}">Sign into Design+Code HQ</h4>
      <input :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}" type="email" placeholder="Email">
      <input :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}" type="password" placeholder="Password">
      <button>Sign In</button>
      <router-link :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}" to="/recover">Forgot your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Header from "@/components/Header.vue";
  import RequestAccount from "@/components/RequestAccount.vue";
  import ThemeSwitch from "@/components/ThemeSwitch.vue";

  export default {
    name: "SignIn",
    // init state
    computed: {
      isDarkMode() {
        return this.$store.getters.isDarkMode
      }
    },
    methods: {
      // method toggleDarkMode() is only necessary to switch darkmode
    },
    components: {
      Header,
      RequestAccount,
      ThemeSwitch,
    },
  };
</script>

<style scoped lang="scss">

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #fff;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.login {
  width: 400px;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
