<template>
  <div id="app">
    <h1>People killed by police in {{this.$store.state.year}}</h1>
      <p>Data from <a href="http://killedbypolice.net/">Killed by Police</a></p>
      <p><a href="https://github.com/iampeternguyen/killed-by-police-data">GitHub Source</a></p>
      <br>
      <Spinner size="large" line-fg-color="#009900" line-bg-color="#555555" v-show="!this.$store.state.loaded"/>
      <YearSelection v-show="this.$store.state.loaded"/>
      <D3 v-show="this.$store.state.loaded"/>
      <MainTable v-show="this.$store.state.loaded"/>
  </div>
</template>

<script>
import MainTable from "./components/MainTable";
import D3 from "./components/D3";
import YearSelection from "./components/YearSelection";
import Spinner from "vue-simple-spinner";

export default {
  name: "app",
  components: {
    MainTable,
    D3,
    YearSelection,
    Spinner
  },
  beforeMount: function() {
    var self = this;
    var year = ["", "2017", "2016", "2015", "2014"];

    self.loadData("").then(() => {
      console.log("2018 data loaded successfully");
      self.loadData("kbp2017").then(() => {
        console.log("2017 data loaded successfully");
        self.loadData("kbp2016").then(() => {
          console.log("2016 data loaded successfully");
          self.loadData("kbp2015").then(() => {
            console.log("2015 data loaded successfully");
            self.loadData("kbp2014").then(() => {
              console.log("2014 data loaded successfully");
              self.loadData("kbp2013").then(() => {
                self.$store.state.loaded = true;
                console.log("2013 data loaded successfully");
              });
            });
          });
        });
      });
    });
  },
  methods: {
    loadData(y) {
      var self = this;
      let axios = require("axios");
      return new Promise((resolve, reject) => {
        const yearLink = y;

        let year = () => {
          if (yearLink == "") {
            return 2018;
          } else {
            year = /\d{4}/gi.exec(yearLink);
            return year[0];
          }
        };

        const yearKey = "y" + year();

        // CORS get data workaround
        let link =
          "https://cors-anywhere.herokuapp.com/http://www.killedbypolice.net/" +
          yearLink;

        axios.get(link).then(
          response => {
            if (response.status === 200) {
              const regex = /\<tr\>/gi;
              let rawData = response.data.split(regex);

              // create array of columns
              let data = [];
              const td = /\<td\>/gi;
              rawData.forEach(element => {
                let array = element.split(td);
                // save data that has the proper number of columns
                if (array.length === 8) {
                  data.push(array);
                }
              });

              // remove non-data headers
              data.splice(0, 2);
              organizeData(data);
            }
          },
          error => console.log(error)
        );

        // organize data function
        function organizeData(data) {
          data.forEach(e => {
            let size = checkSize(e);
            if (size > 1) {
              let x = separateData(e, size);
              for (let m = 0; m < size; m++) {
                let temp = [];
                for (let j = 0; j <= 7; j++) {
                  temp.push(x[j][m]);
                }
                let item = saveData(temp);
                if (item) {
                  self.$store.state.kbpData[yearKey].push(item);
                }
              }
            } else {
              let item = saveData(e);
              if (item) {
                self.$store.state.kbpData[yearKey].push(item);
              }
            }
          });
          if (self.$store.state.kbpData[yearKey].length != 0) {
            resolve(self.$store.state.kbpData[yearKey]);
          } else {
            reject("Could not load data");
          }

          function validateDate(date) {
            if (
              date.match(/feb/i) ||
              date.match(/jan/i) ||
              date.match(/mar/i) ||
              date.match(/apr/i) ||
              date.match(/may/i) ||
              date.match(/jun/i) ||
              date.match(/jul/i) ||
              date.match(/aug/i) ||
              date.match(/sep/i) ||
              date.match(/oct/i) ||
              date.match(/nov/i) ||
              date.match(/dec/i)
            ) {
              return true;
            } else {
              return false;
            }
          }

          function checkSize(e) {
            // check to see if there is more than one person in row
            let size = /<br>/gi.exec(e[1]);
            if (size) {
              return size.length + 1;
            } else {
              return 1;
            }
          }
          function saveData(e) {
            // get date information
            let regex = /(?:<center>)*(?:\(.*\))*\s*([A-Z].*\d+)/g;
            let match = regex.exec(e[1]);
            let date = match[1];

            if (!validateDate(date)) {
              return false;
            }

            // organize state
            let state = e[2];

            // organize race and gender
            let gender;
            let race;

            // check to see if cell has both race/gender info

            match = e[3].split("/");
            if (match.length === 2) {
              gender = match[0];
              race = match[1];
            } else if (match.length === 1) {
              match = match[0].replace(/\s*/g, "");
              if (!match == "") {
                gender = match;
              }
            }

            // parse name age cell some cells also has photo link
            let name;
            let age;
            let photo;
            match = e[4].split(/[,\">]/g);
            if (match.length === 2) {
              name = match[0];
              age = match[1].replace(/\s*/g, "");
            } else if (match.length > 2) {
              name = match[3];
              photo = match[1];
              if (match[4]) {
                age = match[4].replace(/\s*/g, "");
              }
            } else {
              regex = /(^[A-Z].*)/g;
              match = regex.exec(match[0]);
              if (match) {
                name = match[0];
              }
            }

            // clean up age
            age = /\d*/.exec(age);
            age = age[0];

            // organize kill by data
            let killedBy = [];

            match = e[5].split(/[<>]/);

            // some people killed by more than one reason
            for (let i = 2; i <= match.length; i++) {
              if (i % 2 == 0) {
                killedBy.push(match[i]);
              }
            }

            // get kbpLink
            match = e[6].split('"'); ///<a.*? href=\"(.*?)\".*?<\/a>/g test this later
            let kbpLink = match[1];

            // get news link
            match = e[7].split('"');
            let newsLink = match[1];

            // save data
            return {
              date,
              state,
              gender,
              race,
              name,
              age,
              photo,
              killedBy,
              kbpLink,
              newsLink
            };
          }

          function separateData(e, size) {
            let temp;
            for (let i = 0; i <= 7; i++) {
              temp = e[i];

              // some columns didn't duplicate data for each person in row
              // this part duplicates that data

              if (i == 0 || i == 2 || i == 5 || i == 6 || i == 7) {
                e[i] = [];
                for (let j = 0; j < size; j++) {
                  // data was not uniform, some cells have duplicate data others don't
                  // this part checks if there is duplicate information where none is expected and separates it
                  if (temp.search(/<br>/gi)) {
                    temp = temp.split(/<br>/gi);
                    temp = temp[0];
                  }
                  // rebuild the array with duplicate data
                  e[i].push(temp);
                }
              } else {
                // separates the data that should have different information
                e[i] = temp.split(/<br>/gi);
              }
            }

            // rebuild an array for each person that was in one row
            return e;
          }
        }
      });
    }
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
