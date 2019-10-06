<template>
  <div class="signin">
    <Header />
    <h1>Signin section here</h1>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Header from "@/components/Header.vue";

  @Component({
    components: {
      Header
    }
  })
  export default class SignIn extends Vue {}
</script>
