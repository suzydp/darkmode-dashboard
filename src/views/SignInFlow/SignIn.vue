<template>
  <div class="container">
    <div class="request">
      Don't have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/DCHQ.svg">
      <h4>Sign into Design+Code HQ</h4>
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <button>Sign In</button>
      <router-link to="/recover">Forgot your password?</router-link>
      <!-- !! @ is for add event listener !! -->
      <button @click="toggleDarkMode" >Toggle</button>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Header from "@/components/Header.vue";

  export default {
    components: {
      Header
    },
    name: "SignIn",
    // init state
    data: {
      isDarkMode: true
    },
    methods: {
      // functions triggered in vue component
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        alert(this.isDarkMode);
      }
    }
  };
</script>

<style scoped lang="scss">
@import "@/../../../global-styles/colors.scss/";
@import "@/../../../global-styles/typography.scss";

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #fff;
}

.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

</style>
