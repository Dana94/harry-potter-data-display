<template>
  <div id="bar-chart">
    <svg-cmp :houses="houses" />
  </div>
</template>

<script>
// get number of members of each house in a bar graph
import SvgCmp from "./SvgCmp.vue";

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
    SvgCmp
  },
  mounted() {
    this.$store.dispatch("LOAD_HOUSE_DATA");
  }
};
</script>
