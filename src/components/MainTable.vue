<template>
  <div> 
      <div id="output">      
       
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <td>Date</td>
              <td>State</td>
              <td>Gender</td>
              <td>Race</td>
              <td>Name</td>
              <td>Age</td>
              <td>Killed by</td>
              <td>KBP Link</td>
              <td>News Link</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(person, index) in this.$store.state.kbpData" class="active">
              <td>{{person.date}}</td>
              <td>{{person.state}}</td>
              <td>{{person.gender}}</td>
              <td>{{person.race}}</td>
              <td>{{person.name}}</td>
              <td>{{person.age}}</td>
              <td><span v-for="item in person.killedBy">{{item}}</span></td>
              <td><a :href="person.kbpLink">Killed by Police Link</a></td>
              <td><a :href="person.newsLink">News Link</a></td>
              
            </tr>
          </tbody>
        </table>
        
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
thead {
  font-weight: bold;
}
</style>





