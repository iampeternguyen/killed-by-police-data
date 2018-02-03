<template>
  <div id="app">
    <h1>People killed by police in {{this.$store.state.year}}</h1>
      <p>Data from <a href="http://killedbypolice.net/">Killed by Police</a></p>
      <p><a href="https://github.com/iampeternguyen/killed-by-police-data">GitHub Source</a></p>
      <br>
      <h3>Total: {{this.$store.state.kbpData[this.$store.state.dataKey].length}}</h3>

      <Charts />
      <MainTable />
  </div>
</template>

<script>
import MainTable from "./MainTable";
import Charts from "./ChartsSingle";

export default {
  components: {
    MainTable,
    Charts
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
