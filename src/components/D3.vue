<template>
  <div>
    <div class="data-wrapper">
      <div id="age"></div>
      <div id="gender"></div>
      <div id="race"></div>
      <div id="state"></div>
      <div id="month"></div>
      
      
    </div>

  </div>
</template>

<script>
var d3 = require("d3");

export default {
  data() {
    return {
      gender: {
        men: 0,
        women: 0,
        unreported: 0
      },
      race: {
        white: 0,
        black: 0,
        asian: 0,
        latinx: 0,
        unreported: 0
      },
      state: {},
      age: {
        under18: 0,
        a18to24: 0,
        a25to34: 0,
        a35to44: 0,
        a45to55: 0,
        over55: 0,
        unreported: 0
      },
      month: {
        jan: 0,
        feb: 0,
        mar: 0,
        apr: 0,
        may: 0,
        jun: 0,
        jul: 0,
        aug: 0,
        sep: 0,
        oct: 0,
        nov: 0,
        dec: 0
      }
    };
  },
  methods: {
    resetData() {
      this.gender = {
        men: 0,
        women: 0,
        unreported: 0
      };
      this.race = {
        white: 0,
        black: 0,
        asian: 0,
        latinx: 0,
        unreported: 0
      };
      this.state = {};
      this.age = {
        under18: 0,
        a18to24: 0,
        a25to34: 0,
        a35to44: 0,
        a45to55: 0,
        over55: 0,
        unreported: 0
      };
      this.month = {
        jan: 0,
        feb: 0,
        mar: 0,
        apr: 0,
        may: 0,
        jun: 0,
        jul: 0,
        aug: 0,
        sep: 0,
        oct: 0,
        nov: 0,
        dec: 0
      };
    },
    calculatedData() {
      this.resetData();
      this.kbpData.forEach(element => {
        // calculate gender data

        if (element.gender == "M") {
          this.gender.men++;
        } else if (element.gender == "F") {
          this.gender.women++;
        } else {
          this.gender.unreported++;
        }

        // calculate race data

        if (element.race == "W") {
          this.race.white++;
        } else if (element.race == "B") {
          this.race.black++;
        } else if (element.race == "A") {
          this.race.asian++;
        } else if (element.race == "L") {
          this.race.latinx++;
        } else {
          this.race.unreported++;
        }

        if (this.state[element.state]) {
          this.state[element.state]++;
        } else {
          this.state[element.state] = 1;
        }
        //calculate age data

        if (element.age < 18) {
          this.age.under18++;
        } else if (element.age >= 18 && element.age < 25) {
          this.age.a18to24++;
        } else if (element.age >= 25 && element.age < 35) {
          this.age.a25to34++;
        } else if (element.age >= 35 && element.age < 45) {
          this.age.a35to44++;
        } else if (element.age >= 45 && element.age < 55) {
          this.age.a45to55;
        } else if (element.age >= 55) {
          this.age.over55++;
        } else {
          this.age.unreported++;
        }

        // calculate month data
        if (element.date.match(/jan/i)) {
          this.month.jan++;
        } else if (element.date.match(/feb/i)) {
          this.month.feb++;
        } else if (element.date.match(/mar/i)) {
          this.month.mar++;
        } else if (element.date.match(/apr/i)) {
          this.month.apr++;
        } else if (element.date.match(/may/i)) {
          this.month.may++;
        } else if (element.date.match(/jun/i)) {
          this.month.jun++;
        } else if (element.date.match(/jul/i)) {
          this.month.jul++;
        } else if (element.date.match(/aug/i)) {
          this.month.aug++;
        } else if (element.date.match(/sep/i)) {
          this.month.sep++;
        } else if (element.date.match(/oct/i)) {
          this.month.oct++;
        } else if (element.date.match(/nov/i)) {
          this.month.nov++;
        } else if (element.date.match(/dec/i)) {
          this.month.dec++;
        }
      });

      this.reDraw();
    },
    drawAgeChart() {
      var dataset = [
        { label: "Under 18", count: this.age.under18 },
        { label: "18 to 24", count: this.age.a18to24 },
        { label: "25 to 34", count: this.age.a25to34 },
        { label: "35 to 44", count: this.age.a35to44 },
        { label: "45 to 54", count: this.age.a45to55 },
        { label: "Over 55", count: this.age.over55 },
        { label: "Unreported", count: this.age.unreported }
      ];
      var id = "#age";
      var blues = [
        "#c6dbef",
        "#9ecae1",
        "#6baed6",
        "#4292c6",
        "#2171b5",
        "#084594",
        "#eff3ff"
      ]; // last color unreported
      this.drawPieChart(dataset, id, blues, "Age");
    },
    drawGenderChart() {
      var dataset = [
        { label: "Men", count: this.gender.men },
        { label: "Women", count: this.gender.women },
        { label: "Unreported", count: this.gender.unreported }
      ];
      var id = "#gender";
      var greens = ["#a1d99b", "#31a354", "#e5f5e0"];
      this.drawPieChart(dataset, id, greens, "Gender");
    },
    drawRaceChart() {
      var dataset = [
        { label: "White", count: this.race.white },
        { label: "Black", count: this.race.black },
        { label: "Asian", count: this.race.asian },
        { label: "Latinx", count: this.race.latinx },
        { label: "Unreported", count: this.race.unreported }
      ];
      var id = "#race";
      var purples = ["#cbc9e2", "#9e9ac8", "#756bb1", "#54278f", "#f2f0f7"];
      this.drawPieChart(dataset, id, purples, "Race");
    },
    drawPieChart(dataset, id, colors, title) {
      d3.select(id).html("");
      var width = d3
        .select(id)
        .node()
        .getBoundingClientRect().width;

      var margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      };

      // Set minimum size

      width = width - margin.left - margin.right;
      var height = width - margin.top - margin.bottom;

      var radius = Math.min(width, height) / 2;

      var color = d3.scaleOrdinal(colors);

      var svg = d3
        .select(id)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      var arc = d3
        .arc()
        .innerRadius(radius / 3)
        .outerRadius(radius);

      var pie = d3
        .pie()
        .value(function(d) {
          return d.count;
        })
        .sort(null);

      var div = d3
        .select(id)
        .append("div")
        .attr("class", "tooltip")
        .style("display", "none");

      var path = svg
        .selectAll("path")
        .data(pie(dataset))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", function(d, i) {
          dataset[i].color = color(d.data.label);
          return color(d.data.label);
        })
        .on("mouseover", function(d) {
          d3
            .select(this)
            .transition()
            .duration(200)
            .attr("fill", "orange");
          div
            .transition()
            .duration(200)
            .style("display", "block")
            .style("opacity", 0.9);
          div
            .text(d.data.label + ": " + d.data.count)
            .style("left", d3.event.pageX - 30 + "px")
            .style("top", d3.event.pageY - 40 + "px")
            .style("position", "absolute")
            .style("background-color", "#EFE8D3")
            .style("padding", 5 + "px")
            .style("font-color", "steelgrey");
        })
        .on("mouseout", function(d) {
          d3
            .select(this)
            .transition()
            .duration(200)
            .attr("fill", function(d, i) {
              dataset[i].color = color(d.data.label);
              return color(d.data.label);
            });
          div
            .transition()
            .duration(500)
            .style("display", "none")
            .style("opacity", 0);
        });

      var legend = d3
        .select(id)
        .append("svg")
        .attr("class", "legend")
        .selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .attr("transform", function(d, i) {
          return "translate(0," + i * 20 + ")";
        });

      legend
        .append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function(d, i) {
          return color(d.label);
        });

      legend
        .append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text(function(d) {
          return d.label + ": " + d.count;
        });

      svg
        .append("text")
        .attr("x", 0)
        .attr("y", 6)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .text(title);
    },
    drawStateChartBubble() {
      d3.select("#state").html("");

      var dataset = [];
      Object.keys(this.state)
        .sort()
        .forEach((v, i) => {
          dataset.push({ label: v, count: this.state[v] });
        });

      var largestValue = 0;

      dataset.forEach((e, i) => {
        if (e.count > largestValue) {
          largestValue = e.count;
        }
      });

      var width = d3
        .select("#state")
        .node()
        .getBoundingClientRect().width;

      var axisPlacement = 30;

      var margin = {
        top: 50,
        right: 20,
        bottom: 20,
        left: axisPlacement * 2
      };

      if (width < 400) {
        margin.left = 60;
        width = 400;
      } else if (margin.left < 60) {
        margin.left = 60;
      }
      // Set minimum size

      width = width - margin.left - margin.right;
      var height = width / 2 - margin.top - margin.bottom;

      var svg = d3
        .select("#state")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      var yScale = d3
        .scaleLinear()
        .domain([0, largestValue])
        .range([height, margin.top]);
      var xScale = d3
        .scaleLinear()
        .domain([0, dataset.length])
        .range([margin.left, width]);
      var rScale = d3
        .scaleSqrt()
        .domain([1, largestValue])
        .range([width / 100, width / 35]);
      var yAxis = d3.axisLeft().scale(yScale);

      var yAxisGroup = svg
        .append("g")
        .attr("transform", "translate(" + axisPlacement + ",0)")
        .call(yAxis);
      // var xAxis = d3.axisBottom().scale(xScale);
      // var xAxisGroup = svg.append("g").call(xAxis);

      var div = d3
        .select("#state")
        .append("div")
        .attr("class", "tooltip")
        .style("display", "none");

      svg
        .selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("class", "circle")
        .attr("fill", (d, i) => {
          if (d.count == largestValue) {
            return "#A81D40";
          } else {
            return "#8C92A3";
          }
        })
        .attr("cy", (d, i) => {
          return yScale(d.count);
        })
        .attr("cx", (d, i) => {
          return xScale(i);
        })
        .attr("r", (d, i) => {
          return rScale(d.count);
        })
        .style("opacity", 0.7)
        .on("mouseover", function(d) {
          d3
            .select(this)
            .transition()
            .duration(200)
            .attr("fill", "orange");
          div
            .transition()
            .duration(200)
            .style("display", "block")
            .style("opacity", 0.9);
          div
            .text(d.label + ": " + d.count)
            .style("left", d3.event.pageX - 30 + "px")
            .style("top", d3.event.pageY - 40 + "px")
            .style("position", "absolute")
            .style("background-color", "#EFE8D3")
            .style("padding", 5 + "px")
            .style("font-color", "steelgrey");
        })
        .on("mouseout", function(d) {
          d3
            .select(this)
            .transition()
            .duration(200)
            .attr("fill", (d, i) => {
              if (d.count == largestValue) {
                return "#A81D40";
              } else {
                return "#8C92A3";
              }
            });
          div
            .transition()
            .duration(500)
            .style("display", "none")
            .style("opacity", 0);
        });

      var titleScale = d3
        .scaleLinear()
        .domain([250, 1000])
        .range([10, 24]);

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", 50)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", titleScale(width) + "px")
        .text("Death Count by State");
    },
    drawMonthBarChart() {
      d3.select("#month").html("");

      var dataset = [
        { label: "January", count: this.month.jan },
        { label: "February", count: this.month.feb },
        { label: "March", count: this.month.mar },
        { label: "April", count: this.month.apr },
        { label: "May", count: this.month.may },
        { label: "June", count: this.month.jun },
        { label: "July", count: this.month.jul },
        { label: "August", count: this.month.aug },
        { label: "September", count: this.month.sep },
        { label: "October", count: this.month.oct },
        { label: "November", count: this.month.nov },
        { label: "December", count: this.month.dec }
      ];
      var largestValue = 0;

      dataset.forEach(e => {
        if (e.count > largestValue) {
          largestValue = e.count;
        }
      });

      var width = d3
        .select("#month")
        .node()
        .getBoundingClientRect().width;

      var axisPlacement = 30;

      var margin = {
        top: 50,
        right: 20,
        bottom: 20,
        left: axisPlacement * 2
      };

      if (width < 400) {
        margin.left = 60;
        width = 400;
      } else if (margin.left < 60) {
        margin.left = 60;
      }
      // Set minimum size

      width = width - margin.left - margin.right;
      var height = width / 2 - margin.top - margin.bottom;

      var svg = d3
        .select("#month")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      var yScale = d3
        .scaleLinear()
        .domain([0, largestValue])
        .range([height, margin.top]);

      var xScale = d3
        .scaleLinear()
        .domain([0, dataset.length])
        .range([margin.left, width]);

      var yAxis = d3.axisLeft().scale(yScale);

      var yAxisGroup = svg
        .append("g")
        .attr("transform", "translate(" + axisPlacement + ",0)")
        .call(yAxis);
      // var xAxis = d3.axisBottom().scale(xScale);
      // var xAxisGroup = svg.append("g").call(xAxis);

      var div = d3
        .select("#month")
        .append("div")
        .attr("class", "tooltip")
        .style("display", "none");

      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", (d, i) => {
          if (d.count == largestValue) {
            return "#A81D40";
          } else {
            return "#8C92A3";
          }
        })
        .attr("y", (d, i) => {
          return yScale(d.count);
        })
        .attr("x", (d, i) => {
          return xScale(i);
        })
        .attr("width", (d, i) => {
          return width / 12 - 5;
        })
        .attr("height", (d, i) => {
          return height - yScale(d.count);
        })
        .style("opacity", 0.7)
        .on("mouseover", function(d) {
          d3
            .select(this)
            .transition()
            .duration(200)
            .attr("fill", "orange");
          div
            .transition()
            .duration(200)
            .style("display", "block")
            .style("opacity", 0.9);
          div
            .text(d.label + ": " + d.count)
            .style("left", d3.event.pageX - 30 + "px")
            .style("top", d3.event.pageY - 40 + "px")
            .style("position", "absolute")
            .style("background-color", "#EFE8D3")
            .style("padding", 5 + "px")
            .style("font-color", "steelgrey");
        })
        .on("mouseout", function(d) {
          d3
            .select(this)
            .transition()
            .duration(200)
            .attr("fill", (d, i) => {
              if (d.count == largestValue) {
                return "#A81D40";
              } else {
                return "#8C92A3";
              }
            });
          div
            .transition()
            .duration(500)
            .style("display", "none")
            .style("opacity", 0);
        });

      // svg
      //   .selectAll("rect")
      //   .data(dataset)
      //   .enter()
      //   .append("rect")
      //   .attr("class", "bar")
      //   .attr("fill", (d, i) => {
      //     if (d.count == largestValue) {
      //       return "#A81D40";
      //     } else {
      //       return "#8C92A3";
      //     }
      //   })
      //   .attr("height", (d, i) => {
      //     return yScale(d.count);
      //   })
      //   .attr("width", (d, i) => {
      //     return 20;
      //   })
      //   .attr("x", (d, i) => {
      //     return i * 20 + 5;
      //   })
      //   .attr("y", (d, i) => {
      //     return 0;
      //   });

      var titleScale = d3
        .scaleLinear()
        .domain([250, 1000])
        .range([10, 24]);

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", 30)
        .style("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", titleScale(width) + "px")
        .text("Death Count by Month");
    },
    reDraw() {
      this.drawGenderChart();
      this.drawRaceChart();
      this.drawAgeChart();
      this.drawMonthBarChart();
      this.drawStateChartBubble();
    }
  },
  computed: {
    kbpData() {
      var key = this.$store.state.dataKey;
      return this.$store.state.kbpData[key];
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.reDraw);
    });
  },
  created() {
    var calculate = this.calculatedData;
    this.$store.watch(
      function(state) {
        return state.loaded;
      },
      function(oldData, newData) {
        calculate();
      }
    );

    this.$store.watch(
      function(state) {
        return state.dataKey;
      },
      function(oldData, newData) {
        calculate();
      }
    );
  }
};
// old bar chart
// drawStateChart() {
//       var dataset = [];
//       Object.keys(this.state)
//         .sort()
//         .forEach((v, i) => {
//           dataset.push({ label: v, count: this.state[v] });
//         });
//       var height = 400,
//         width = 720;

//       var svg = d3
//         .select("#state")
//         .append("svg")
//         .attr("height", height)
//         .attr("width", width);

//       var columnWidth = (width - dataset.length * 5) / dataset.length;
//       //TODO map array find largest data value

//       var largestValue = 0;

//       dataset.forEach((e, i) => {
//         if (e.count > largestValue) {
//           largestValue = e.count;
//         }
//       });

//       console.log(largestValue);

//       svg
//         .selectAll("rect")
//         .data(dataset)
//         .enter()
//         .append("rect")
//         .attr("class", "bar")
//         .attr("fill", (d, i) => {
//           if (d.count == largestValue) {
//             return "#A81D40";
//           } else {
//             return "#8C92A3";
//           }
//         })
//         .attr("height", (d, i) => {
//           return d.count / largestValue * 360;
//         })
//         .attr("width", () => {
//           return columnWidth;
//         })
//         .attr("x", (d, i) => {
//           return columnWidth * i + 5 * i;
//         })
//         .attr("y", (d, i) => {
//           return height - d.count / largestValue * 360 - 20;
//         });

//       svg
//         .selectAll("text")
//         .data(dataset)
//         .enter()
//         .append("text")
//         .text(d => {
//           return d.label;
//         })
//         .attr("x", (d, i) => {
//           return columnWidth * i + 5 * i;
//         })
//         .attr("y", (d, i) => {
//           return 400;
//         });
//     },
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#race,
#gender,
#age {
  width: 33%;
  display: inline-block;
  min-width: 250px;
}

#state {
  clear: both;
  width: 100%;
  min-width: 400px;
}
.color-key {
  width: 20px;
  height: 20px;
  float: left;
}

.text-label {
  float: left;
}

.legend {
  clear: both;
  margin: auto;
}
</style>
