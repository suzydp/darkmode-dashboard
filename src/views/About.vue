<template>
  <div class="about">
    <Header />
    <h1>This is an about page</h1>
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
  export default class About extends Vue {}
</script>