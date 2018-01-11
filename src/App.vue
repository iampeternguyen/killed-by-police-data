<template>
  <div id="app">
    <h1>People killed by police in {{this.$store.state.year}}</h1>
      <p>Data from <a href="http://killedbypolice.net/">Killed by Police</a></p>
      <p><a href="https://github.com/iampeternguyen/killed-by-police-data">GitHub Source</a></p><br>

      <YearSelection/>
      <D3/>
    <MainTable/>
  </div>
</template>

<script>
import MainTable from "./components/MainTable";
import D3 from "./components/D3";
import YearSelection from "./components/YearSelection";

export default {
  name: "app",
  components: {
    MainTable,
    D3,
    YearSelection
  },
  mounted: function() {
    this.$store.commit("getRawData");
  },

  computed: {}
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
