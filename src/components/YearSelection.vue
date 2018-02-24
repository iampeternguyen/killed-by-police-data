<template>
  <div class="">
      <select name="year" v-on:change="changeYear" class="form-control">
        <!-- Disabled, no meaningful multiyear data to report -->
        <!-- <option value="all">All</option>  -->
        <option value="" selected="selected">2018</option>
        <option value="kbp2017">2017</option>
        <option value="kbp2016">2016</option>
        <option value="kbp2015">2015</option>
        <option value="kbp2014">2014</option>
        <option value="kbp2013">2013</option>
      </select>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeYear(y) {
      var selection = y.target.value;
      if (selection != "all") {
        this.$store.state.selectedAll = false;
        this.$store.commit("setSelection", selection);
      } else {
        this.$store.state.selectedAll = true;
      }
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
