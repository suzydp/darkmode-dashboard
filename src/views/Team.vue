<template>
  <div class="container">
    <!-- <Header /> -->
    <h2>Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-1" />
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-2" />
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-3" />
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-4" />
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-5" />
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Header from "@/components/Header.vue";
  export default{
    name: "Team",
    components: {
      Header
    },
    computed: {
      isDarkMode() {
        return this.$store.getters.isDarkMode;
      }
    }
  };
</script>
<style lang="scss" scoped>
h2 {
  @include heading-2;
}

.container {
  align-items: center;
  margin-left: 25px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly; 
}

.card {
  height: 50px;
  width: 50px;
  background: red;
  margin: 20px; 
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

</style>