<template>
  <div id="bar-chart">
    <svg-cp :people="members" />
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
    members() {
      return this.$store.getters.getMembers;
    }
  },
  components: {
    svgCp
  },
  mounted() {
    this.$store.dispatch("LOAD_MEMBERS");
  }
};
</script>
