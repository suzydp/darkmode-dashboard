<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="spread">
        <h1 :class="{'dark': !isDarkMode, 'light': isDarkMode}">Traffic Overview</h1>
        <div class="toggle">
          <!-- ref will refer the methods below -->
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>
      <apexchart width="800px" type="area" :options="chartOptions" :series="series"></apexchart>
      <iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/812aaa39-ded9-4ff8-97ed-d160bc76e0fa/page/SkS7" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  components: {
    Header,
    // register VueApexCharts as apexchart
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        // color is binded with [ '1st one', '2nd one' ]
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"]
          },
          position: "top"
        },
        tooltip: {
          theme: "dark"
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          type: "datetime"
        }
      },
      // data bundle
      series: [
        {
          name: 'active users',
          data: [
            [new Date("January 1, 2019"), 30],
            [new Date("January 5, 2019"), 40],
          ]
        },
        {
          name: 'new users',
          data: [
            [new Date("January 1, 2019"), 80],
            [new Date("January 5, 2019"), 20],
          ]
        }
      ],
    }
  },
  methods: {
    toggleDays() {
      // active only days
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = '#56CCF2';
      this.$refs.days.style.borderRadius = '4px';
      
      // inactive other refs
      this.$refs.weeks.style.color = "#5B6175";
      this.$refs.weeks.style.background = 'none';
      this.$refs.weeks.style.borderRadius = 'none';

      this.$refs.months.style.color = "#5B6175";
      this.$refs.months.style.background = 'none';
      this.$refs.months.style.borderRadius = 'none';
    },
    toggleWeeks() {
      // active only weeks
      this.$refs.days.style.color = "#5B6175";
      this.$refs.days.style.background = 'none';
      this.$refs.days.style.borderRadius = 'none';

      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = '#56CCF2';
      this.$refs.weeks.style.borderRadius = '4px';

      this.$refs.months.style.color = "#5B6175";
      this.$refs.months.style.background = 'none';
      this.$refs.months.style.borderRadius = 'none';
    },
    toggleMonths() {
      // active only months
      this.$refs.days.style.color = "#5B6175";
      this.$refs.days.style.background = 'none';
      this.$refs.days.style.borderRadius = 'none';

      this.$refs.weeks.style.color = "#5B6175";
      this.$refs.weeks.style.background = 'none';
      this.$refs.weeks.style.borderRadius = 'none';

      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = '#56CCF2';
      this.$refs.months.style.borderRadius = '4px';
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-left: 15%;
  padding-right: 15%;
  flex-wrap: wrap;
}

.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
}

h1.dark {
  @include heading-3($black);
}

h1.light {
  @include heading-3($white);
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

  &:hover {
    cursor: pointer;
  }
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
  /* apply default styles for when loaded page */
  background: $teal;	
  border-radius: 4px;	
  color: $white;
}

.weeks {
  @include toggle-settings;
}

.months {
  @include toggle-settings;
}
</style>