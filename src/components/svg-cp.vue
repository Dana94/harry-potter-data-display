<template>
  <div id="chart">
  </div>
</template>

<script>
import * as d3 from "d3";
// get number of members of each house in a bar graph
export default {
  name: "BarChart",
  props: ['houses'],
  data() {
    return {
    };
  },
  methods: {
    setUp() {
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
        .data(this.houses)
        .enter()
        .append("rect")
        .data((d,i) => {
          console.log(d)
          return d.members
        })
        .enter()
        .attr("x", 30)
        .attr("y", (d, i) => i * 100)
        .attr("width", d => d * 10) // value time
        .attr("height", 70)
        //.attr("fill", "navy") // color time
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
    houses() {
      this.setUp();
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/base.scss';
</style>
