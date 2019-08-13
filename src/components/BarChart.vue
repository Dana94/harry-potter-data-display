<template>
  <div id="bar-chart">{{members}}</div>
</template>

<script>
import * as d3 from "d3";
// get number of members of each house in a bar graph
export default {
  name: "BarChart",
  data() {
    return {
      people: [] // 40, 17, 25, 17,
    };
  },
  methods: {
    setUp() {
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
        .data(this.people)
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
        .data(this.people)
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 30)
        .attr("y", (d, i) => 200 - 3 * d - 3)
        .text(d => d);
    }
  },
  computed: {
    members() {
      return this.$store.getters.getMembers;
    }
  },
  created() {
    this.setUp();
  }
};
</script>

<style>
.bar {
  width: 25px;
  display: inline-block;
  background-color: blue;
}
</style>
