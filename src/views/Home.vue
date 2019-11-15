<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="spread">
        <h1>Traffic Overview</h1>
        <div class="toggle">
          <!-- ref will refer the methods below -->
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  },
  methods: {
    toggleDays() {
      // change state
      this.$refs.days.style.color = "white";
      // import days style which is used for active toggle
      this.$refs.days.style.background = '#56CCF2';
      this.$refs.days.style.borderRadius = '4px';
    },
    toggleWeeks() {
      // enable same style above
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = '#56CCF2';
      this.$refs.weeks.style.borderRadius = '4px';
    },
    toggleMonths() {
      // enable same style above
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = '#56CCF2';
      this.$refs.months.style.borderRadius = '4px';

      // but you're gonna notice active state can't change by ourselves..
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-left: 15%;
  padding-right: 15%;
}

.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
}

h1 {
  @include heading-3;
}

.toggle {
  @include medium-text;
  color: $dark-gray;
  height: 50px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
}

.days {
  @include toggle-settings;
}

.weeks {
  @include toggle-settings;
}

.months {
  @include toggle-settings;
}
</style>