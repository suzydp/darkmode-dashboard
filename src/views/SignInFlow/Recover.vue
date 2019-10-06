<template>
  <div class="recover">
    <Header />
    <h1>Recover section here</h1>
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
  export default class Recover extends Vue {}
</script>