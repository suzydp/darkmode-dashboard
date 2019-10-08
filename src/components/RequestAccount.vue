<template>
  <!-- transition is an element allows to apply transition by Vue. you have to have either/both enter-active-class and leave-active-class -->
  <transition name="slide-in-right" enter-active-class="animated slideInRight">
    <div 
      v-if="show"
      class="request" 
      :class="{'light-request': isDarkMode, 'dark-request': !isDarkMode}">
      Don't have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
  </transition>
</template>
<script>
  export default {
    name: "RequestAccount",
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.show = true;
    },
    // needs to apply the state which stored to computed
    computed: {
      isDarkMode() {
        return this.$store.getters.isDarkMode
      }
    },
  }
</script>

<style scoped lang="scss">
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