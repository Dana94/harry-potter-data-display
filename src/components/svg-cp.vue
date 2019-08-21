<template>
  <div id="chart">
  </div>
</template>

<script>
import * as d3 from "d3";
// get number of members of each house in a bar graph
export default {
  name: "BarChart",
  props: ['people'],
  data() {
    return {
    };
  },
  methods: {
    setUp() {
      console.log('p', this.people)
      // d3.select("body")
      //   .append("h1")
      //   .text("Harry Potter Data");
      // svg container
      const svg = d3
        .select("body")
        .append("svg")
        .attr("width", "400")
        .attr("height", "400");
      // bars
      svg
        .selectAll("rect")
        .data(this.people)
        .enter()
        .append("rect")
        .attr("x", 30)
        .attr("y", (d, i) => i * 100)
        .attr("width", d => d * 10)
        .attr("height", 70)
        //.attr("fill", "navy")
        .attr("class", "bar")
        .append("title")
        .text(d => d);
      // numbers
      // svg
      //   .selectAll("text")
      //   .data(this.people)
      //   .enter()
      //   .append("text")
      //   .attr("x", (d, i) => i * 30)
      //   .attr("y", (d, i) => 200 - 3 * d - 3)
      //   .text(d => d);
    }
  },
  watch: {
    people() {
      this.setUp();
    }
  }
};
</script>

<style lang="scss">
.bar {
  /* width: 25px; */
  display: inline-block;
  fill: blue;
}
</style>
