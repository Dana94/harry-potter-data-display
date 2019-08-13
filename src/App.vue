<template>
  <div id="app">
    <bar-chart :houses="houses"></bar-chart>
    <!-- {{houses}} -->
  </div>
</template>

<script>
import axios from "./axios-auth";
import BarChart from './components/BarChart.vue';

export default {
  name: "App",
  data() {
    return {
      houses: [],
      people: [],
      //data: [2,2,2,2]
    };
  },
  methods: {
    getHouses() {
      let vm = this;
      axios
        .get("/houses?key=" + process.env.VUE_APP_KEY)
        .then(function(response) {
          vm.houses = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getPeople(){
      let vm = this;
      axios
        .get("/characters?key=" + process.env.VUE_APP_KEY)
        .then(function(response) {
          vm.people = response.data;
          console.log(vm.people.length)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getHouses()
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
