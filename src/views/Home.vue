<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- msg in HelloWorld.vue supposed to show this - props from HelloWorld components -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Header from "@/components/Header.vue";

@Component({
  components: {
    // components which is displaying on homepage
    HelloWorld,
    Header
  }
})
export default class Home extends Vue {}
</script>
