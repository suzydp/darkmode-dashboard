<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  export default {
    name: "App",
    // mounted is a lifecyclemethod of vue - load / mount etc
    mounted() {
      const isDarkMode = this.$store.getters.isDarkMode;
      document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
    }
  };
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  background: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: $white;
    }
  }
}
</style>
