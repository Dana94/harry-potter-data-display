<template>
  <div id="chart"></div>
</template>

<script>
import * as d3 from "d3";
// get number of members of each house in a bar graph
export default {
  name: "BarChart",
  props: ["houses"],
  data() {
    return {
      width: 600,
      height: 600,
      rectX: 30,
      padding: 60
    };
  },
  methods: {
    setUp() {
      // axis
      const scale = d3.scaleLinear();
      //TODO: use max() to find the second domain value
      scale.domain([0, 40]); // input
      scale.range([0, 400]); // output (what you want the range of numbers to be)

      const axes = d3.axisBottom(scale);

      d3.select("body")
        .append("h1")
        .text("Harry Potter Data");

      // svg container
      const svg = d3
        .select("body")
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height);
      // axes
      svg
        .append("g")
        .attr(
          "transform",
          "translate(" + (this.padding - this.rectX) + "," + (this.width-200) + ")"
        )
        .call(axes);

      // bars
      svg
        .selectAll("rect")
        .data(this.houses)
        .enter()
        .append("rect")
        .attr("x", this.rectX)
        .attr("y", (d, i) => i * 100)
        .attr("width", d => d.members * 10)
        .attr("height", 70)
        .attr("class", d => d.name.toLowerCase())
        .append("title")
        .text(d => d);
    }
  },
  watch: {
    houses() {
      // separate array for members count for domain?
      this.setUp();
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/base.scss";
</style>
