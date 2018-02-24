<template>
  <div id="app">
    <h1>People killed by police since May 1, 2013</h1>
      <p>Data from <a href="http://killedbypolice.net/">Killed by Police</a></p>
      <p><a href="https://github.com/iampeternguyen/killed-by-police-data">GitHub Source</a></p>
      <br>
      <h3>Total: {{this.$store.state.kbpData.y2018.length
                  + this.$store.state.kbpData.y2017.length
                  + this.$store.state.kbpData.y2016.length
                  + this.$store.state.kbpData.y2015.length
                  + this.$store.state.kbpData.y2014.length
                  + this.$store.state.kbpData.y2013.length}}</h3>
      <Charts />
  </div>
</template>

<script>
import Charts from "./ChartsAll";
export default {
  components: {
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
