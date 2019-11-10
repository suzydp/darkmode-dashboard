<!-- component declaration - like a div -->
<template>
  <!-- move from App.vue -->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/team">Team</router-link> |
    <router-link to="/signin">Sign in</router-link> |
    <router-link to="/request">Request</router-link> | 
    <a @click="onClick">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    onClick() {
      alert ("Successfully logout!")
    }
  }
};
</script>
