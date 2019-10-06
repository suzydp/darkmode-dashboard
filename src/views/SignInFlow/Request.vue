<template>
  <div class="request">
    <Header />
    <h1>Request section here</h1>
  </div>
</template>
<script lang="ts">
  // needs to declare components which is supposed to include
  import { Component, Vue } from "vue-property-decorator";
  import Header from "@/components/Header.vue";

  @Component ({
    components: {
      Header
    }
  })
  export default class Request extends Vue {}
</script>