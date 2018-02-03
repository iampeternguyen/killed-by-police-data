<template>
  <div>
    <div class="data-wrapper">
      <div id="year"></div>
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
  methods: {
    drawMonthBarChart() {
      d3.select("#month").html("");

      var dataset = [
        { label: "January", count: this.stats.month.jan },
        { label: "February", count: this.stats.month.feb },
        { label: "March", count: this.stats.month.mar },
        { label: "April", count: this.stats.month.apr },
        { label: "May", count: this.stats.month.may },
        { label: "June", count: this.stats.month.jun },
        { label: "July", count: this.stats.month.jul },
        { label: "August", count: this.stats.month.aug },
        { label: "September", count: this.stats.month.sep },
        { label: "October", count: this.stats.month.oct },
        { label: "November", count: this.stats.month.nov },
        { label: "December", count: this.stats.month.dec }
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

      if (width < 500) {
        drawVert();
      } else {
        drawHor();
      }

      function drawHor() {
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
      }

      function drawVert() {
        var margin = {
          top: 50,
          right: 20,
          bottom: 20,
          left: 20
        };

        width = width - margin.left - margin.right;
        var height = window.innerHeight - margin.top * 2 - margin.bottom;

        var svg = d3
          .select("#month")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom);

        var yScale = d3
          .scaleLinear()
          .domain([0, dataset.length])
          .range([margin.top * 2, height]);

        var xScale = d3
          .scaleLinear()
          .domain([0, largestValue])
          .range([margin.left, width]);

        var xAxis = d3.axisBottom().scale(xScale);

        var xAxisGroup = svg
          .append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);
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
            return yScale(i);
          })
          .attr("x", (d, i) => {
            return xScale(0);
          })
          .attr("width", (d, i) => {
            return xScale(d.count) - margin.left;
          })
          .attr("height", (d, i) => {
            return (height - margin.top) / 12 - 5;
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
          .attr("y", 30)
          .style("text-anchor", "middle")
          .style("font-weight", "bold")
          .style("font-size", titleScale(width) + "px")
          .text("Death Count by Month");
      }
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
    stats() {
      var key = this.$store.state.dataKey;
      return this.$store.state.stats[key];
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.reDraw);
    });
  },
  created() {
    console.log("created");
    var calculate = this.calculatedData;
    var reDraw = this.reDraw;

    this.$store.watch(
      function(state) {
        return state.loaded;
      },
      function(oldData, newData) {
        var year = ["y2018", "y2017", "y2016", "y2015", "y2014"];
        year.forEach((year, i) => {
          calculate(year);
        });
        reDraw();
      }
    );
  }
};
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
