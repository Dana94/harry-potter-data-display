<template>
  <div id="bar-chart">{{this.houses}}</div>
</template>

<script>
import * as d3 from "d3";
// get number of members of each house in a bar graph
export default {
  name: "BarChart",
  props: ['houses'],
  data() {
    return {
      members: [], // 40, 17, 25, 17,
    };
  },
  methods: {
    setUp() {
      console.log('here', this.members)
      d3.select("body")
        .append("h1")
        .text("Harry Potter Data");
      // svg container
      const svg = d3
        .select("body")
        .append("svg")
        .attr("width", "400")
        .attr("height", "200");

      svg.selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d,i) => i * 30)
      .attr('y', (d,i) => 200 - 3 * d)
      .attr('width', 25)
      .attr('height', d => d * 3)
      .attr('fill', 'navy')
      .attr('class', 'bar')
      .append('title')
      .text(d => d)

      svg.selectAll('text')
      .data(this.data)
      .enter()
      .append('text')
      .attr('x', (d,i) => i * 30)
      .attr('y', (d,i) => (200 - 3 * d) - 3)
      .text(d => d)

    },
    countMembers(){
      this.members = this.houses.map(house => house.members.length);
      this.setUp();
    }
  },
  created() {
    //this.members = this.houses.map(house => house.members.length);
    //this.setUp();
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
