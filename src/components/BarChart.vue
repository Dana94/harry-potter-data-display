<template>
  <div id="bar-chart">
    <svg-cp :houses="houses" />
  </div>
</template>

<script>
// get number of members of each house in a bar graph
import svgCp from "./svg-cp.vue";

export default {
  name: "BarChart",
  data() {
    return {
    };
  },
  methods: {},
  computed: {
    // members() {
    //   return this.$store.getters.getMembers;
    // },
    houses() {
      return this.$store.getters.getHouses;
    }
  },
  components: {
    svgCp
  },
  mounted() {
    this.$store.dispatch("LOAD_HOUSE_DATA");
  }
};
</script>
