<template>
  <div id="app">
    <p v-for="house in houses" :key="house">{{house.name}}</p>
  </div>
</template>

<script>
import axios from "./axios-auth";
export default {
  name: "App",
  data() {
    return {
      houses: []
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
    }
  },
  created() {
    this.getHouses()
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
