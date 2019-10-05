<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- msg in HelloWorld.vue supposed to show this - props from HelloWorld components -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    // this is linking with HelloWorld.vue in /views/
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
