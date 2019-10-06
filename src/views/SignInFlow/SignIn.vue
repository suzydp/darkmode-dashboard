<template>
  <!-- declare bind with : -->
  <div class="container" :class="{'light-background': !isDarkMode, 'dark-backgrond': isDarkMode}">
    <div class="request" :class="{'light-request': isDarkMode, 'dark-request': !isDarkMode}">
      Don't have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <!-- if isDarkMode is true, apply images for darkmode -->
      <img src="@/assets/DCHQ.svg" v-if="isDarkMode">
      <img src="@/assets/DCHQ-dark.svg" v-if="!isDarkMode">
      <h4 :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}">Sign into Design+Code HQ</h4>
      <input :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}" type="email" placeholder="Email">
      <input :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}" type="password" placeholder="Password">
      <button>Sign In</button>
      <router-link :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}" to="/recover">Forgot your password?</router-link>
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
    data() {
    // below works same
    // data: function(){
      return {
        isDarkMode: true
      };
    },
    methods: {
      // functions triggered in vue component
      toggleDarkMode() {
        // this=this components
        this.isDarkMode = !this.isDarkMode;
        document.body.style.background = this.isDarkMode ? "#212c4f" : "f0f3f5";
        // alert(this.isDarkMode);
      }
    }
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

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
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

.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}
</style>
