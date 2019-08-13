<template>
  <div id="app">
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import axios from "./axios-auth";
import BarChart from "./components/BarChart.vue";

export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
    getHouses() {
      let vm = this;
      axios
        .get("/houses?key=" + process.env.VUE_APP_KEY)
        .then(function(response) {
          vm.houses = response.data;
          vm.$store.dispatch('addMembers', {
            members: vm.houses.map(house => house.members.length)
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getHouses();
  },
  components: {
    BarChart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
