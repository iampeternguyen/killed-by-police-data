<template>
  <div class="">
      <select name="year" v-on:change="changeYear" class="form-control">
        <option value="">2018</option>
        <option value="kbp2017">2017</option>
        <option value="kbp2016">2016</option>
        <option value="kbp2015">2015</option>
        <option value="kbp2014">2014</option>
      </select><br><br>  
          <h3>Total: {{this.$store.state.cData.length}}</h3>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeYear(y) {
      this.$store.commit("getRawData", y);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  max-width: 200px;
  margin: auto;
}
</style>
