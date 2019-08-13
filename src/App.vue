<template>
  <div id="app">
    <!-- <bar-chart :houses="houses"></bar-chart> -->
  </div>
</template>

<script>
import axios from "./axios-auth";
import BarChart from "./components/BarChart.vue";

import * as d3 from "d3";

export default {
  name: "App",
  data() {
    return {
      houses: [],
      data: []
    };
  },
  methods: {
    getHouses() {
      let vm = this;
      axios
        .get("/houses?key=" + process.env.VUE_APP_KEY)
        .then(function(response) {
          vm.houses = response.data;
          vm.data = vm.houses.map(house => house.members.length);

          d3.select("body")
            .append("h1")
            .text("Harry Potter Data");
          // svg container
          const svg = d3
            .select("body")
            .append("svg")
            .attr("width", "400")
            .attr("height", "200");

          svg
            .selectAll("rect")
            .data(vm.data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => 200 - 3 * d)
            .attr("width", 25)
            .attr("height", d => d * 3)
            .attr("fill", "navy")
            .attr("class", "bar")
            .append("title")
            .text(d => d);

          svg
            .selectAll("text")
            .data(vm.data)
            .enter()
            .append("text")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => 200 - 3 * d - 3)
            .text(d => d);
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
