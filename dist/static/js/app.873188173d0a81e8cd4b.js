webpackJsonp([1],{"/4AU":function(t,e){},"5aEy":function(t,e){},"6fj+":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("//Fk"),o=a.n(r),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("select",{staticClass:"form-control",attrs:{name:"year"},on:{change:t.changeYear}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("2018")]),t._v(" "),a("option",{attrs:{value:"kbp2017"}},[t._v("2017")]),t._v(" "),a("option",{attrs:{value:"kbp2016"}},[t._v("2016")]),t._v(" "),a("option",{attrs:{value:"kbp2015"}},[t._v("2015")]),t._v(" "),a("option",{attrs:{value:"kbp2014"}},[t._v("2014")]),t._v(" "),a("option",{attrs:{value:"kbp2013"}},[t._v("2013")])])])},staticRenderFns:[]};var i=a("VU/8")({data:function(){return{}},methods:{changeYear:function(t){var e=t.target.value;"all"!=e?(this.$store.state.selectedAll=!1,this.$store.commit("setSelection",e)):this.$store.state.selectedAll=!0}}},s,!1,function(t){a("QNQJ")},"data-v-1ec3a322",null).exports,l=a("8kuj"),c=a.n(l),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"output"}},[a("table",{staticClass:"table table-striped table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(this.$store.state.kbpData[this.$store.state.dataKey],function(e,n){return a("tr",{staticClass:"active"},[a("td",[t._v(t._s(e.date))]),t._v(" "),a("td",[t._v(t._s(e.state))]),t._v(" "),a("td",[t._v(t._s(e.gender))]),t._v(" "),a("td",[t._v(t._s(e.race))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.age))]),t._v(" "),a("td",t._l(e.killedBy,function(e){return a("span",[t._v(t._s(e))])})),t._v(" "),a("td",[a("a",{attrs:{href:e.kbpLink}},[t._v("Killed by Police Link")])]),t._v(" "),a("td",[a("a",{attrs:{href:e.newsLink}},[t._v("News Link")])])])}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("State")]),t._v(" "),a("td",[t._v("Gender")]),t._v(" "),a("td",[t._v("Race")]),t._v(" "),a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("Age")]),t._v(" "),a("td",[t._v("Killed by")]),t._v(" "),a("td",[t._v("KBP Link")]),t._v(" "),a("td",[t._v("News Link")])])])}]};var u=a("VU/8")({data:function(){return{}},methods:{}},d,!1,function(t){a("/4AU")},"data-v-71c0549e",null).exports,h=a("fZjL"),p=a.n(h),f=a("vwbq"),y={methods:{drawAgeChart:function(){var t=this.getAgeData(),e=this.setPieChartIDColorandTitle("#age",["#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594","#eff3ff"],"Age");this.drawPieChart(t,e)},getAgeData:function(){return[{label:"Under 18",count:this.stats.age.under18},{label:"18 to 24",count:this.stats.age.a18to24},{label:"25 to 34",count:this.stats.age.a25to34},{label:"35 to 44",count:this.stats.age.a35to44},{label:"45 to 54",count:this.stats.age.a45to55},{label:"Over 55",count:this.stats.age.over55},{label:"Unreported",count:this.stats.age.unreported}]},drawGenderChart:function(){var t=this.getGenderData(),e=this.setPieChartIDColorandTitle("#gender",["#a1d99b","#31a354","#e5f5e0"],"Gender");this.drawPieChart(t,e)},getGenderData:function(){return[{label:"Men",count:this.stats.gender.men},{label:"Women",count:this.stats.gender.women},{label:"Unreported",count:this.stats.gender.unreported}]},drawRaceChart:function(){var t=this.getRaceData(),e=this.setPieChartIDColorandTitle("#race",["#cbc9e2","#9e9ac8","#756bb1","#54278f","#f2f0f7"],"Race");this.drawPieChart(t,e)},getRaceData:function(){return[{label:"White",count:this.stats.race.white},{label:"Black",count:this.stats.race.black},{label:"Asian",count:this.stats.race.asian},{label:"Latinx",count:this.stats.race.latinx},{label:"Unreported",count:this.stats.race.unreported}]},drawPieChart:function(t,e){f.select(e.id).html("");var a=f.select(e.id).node().getBoundingClientRect().width,n=20,r=20;a=a-20-20;var o=window.innerHeight-2*n-r,s=Math.min(a,o)/2,i=f.scaleOrdinal(e.color),l=f.select(e.id).append("svg").attr("width",a).attr("height",o).append("g").attr("transform","translate("+a/2+","+o/2+")"),c=f.arc().innerRadius(s/3).outerRadius(s),d=f.pie().value(function(t){return t.count}).sort(null),u=f.select(e.id).append("div").attr("class","tooltip").style("display","none"),h=(l.selectAll("path").data(d(t)).enter().append("path").attr("d",c).attr("fill",function(e,a){return t[a].color=i(e.data.label),i(e.data.label)}).on("mouseover",function(t){f.select(this).transition().duration(200).attr("fill","orange"),u.transition().duration(200).style("display","block").style("opacity",.9),u.text(t.data.label+": "+t.data.count).style("left",f.event.pageX-30+"px").style("top",f.event.pageY-40+"px").style("position","absolute").style("background-color","#EFE8D3").style("padding","5px").style("font-color","steelgrey")}).on("mouseout",function(e){f.select(this).transition().duration(200).attr("fill",function(e,a){return t[a].color=i(e.data.label),i(e.data.label)}),u.transition().duration(500).style("display","none").style("opacity",0)}),f.select(e.id).append("svg").attr("class","legend").selectAll("g").data(t).enter().append("g").attr("transform",function(t,e){return"translate(0,"+20*e+")"}));h.append("rect").attr("width",18).attr("height",18).style("fill",function(t,e){return i(t.label)}),h.append("text").attr("x",24).attr("y",9).attr("dy",".35em").text(function(t){return t.label+": "+t.count}),l.append("text").attr("x",0).attr("y",6).style("text-anchor","middle").style("font-weight","bold").text(e.title)},drawStateChartBubble:function(){var t=this;f.select("#state").html("");var e=[];p()(this.stats.state).sort().forEach(function(a,n){e.push({label:a,count:t.stats.state[a]})});var a=0;e.forEach(function(t,e){t.count>a&&(a=t.count)});var n=f.select("#state").node().getBoundingClientRect().width;n<500?function(){var t={top:50,right:40,bottom:20,left:20};n=n-t.left-t.right;var r=window.innerHeight-2*t.top-t.bottom,o=f.select("#state").append("svg").attr("width",n+t.left+t.right).attr("height",r+t.top+t.bottom),s=f.scaleLinear().domain([0,e.length]).range([r-t.bottom,t.top]),i=f.scaleLinear().domain([0,a]).range([t.left,n]),l=f.scaleSqrt().domain([1,a]).range([n/100,n/35]),c=f.axisBottom().scale(i),d=(o.append("g").attr("transform","translate(0,"+r+")").call(c),f.select("#state").append("div").attr("class","tooltip").style("display","none"));o.selectAll("circle").data(e).enter().append("circle").attr("class","circle").attr("fill",function(t,e){return t.count==a?"#A81D40":"#8C92A3"}).attr("cy",function(t,e){return s(e)}).attr("cx",function(t,e){return i(t.count)}).attr("r",function(t,e){return l(t.count)}).style("opacity",.7).on("mouseover",function(t){f.select(this).transition().duration(200).attr("fill","orange"),d.transition().duration(200).style("display","block").style("opacity",.9),d.text(t.label+": "+t.count).style("left",f.event.pageX-30+"px").style("top",f.event.pageY-40+"px").style("position","absolute").style("background-color","#EFE8D3").style("padding","5px").style("font-color","steelgrey")}).on("mouseout",function(t){f.select(this).transition().duration(200).attr("fill",function(t,e){return t.count==a?"#A81D40":"#8C92A3"}),d.transition().duration(500).style("display","none").style("opacity",0)});var u=f.scaleLinear().domain([250,1e3]).range([10,24]);o.append("text").attr("x",n/2).attr("y",50).style("text-anchor","middle").style("font-weight","bold").style("font-size",u(n)+"px").text("Death Count by State")}():function(){var t={top:50,right:20,bottom:20,left:60};n=n-t.left-t.right;var r=window.innerHeight-2*t.top-t.bottom,o=f.select("#state").append("svg").attr("width",n+t.left+t.right).attr("height",r+t.top+t.bottom),s=f.scaleLinear().domain([0,a]).range([r+t.top,2*t.top]),i=f.scaleLinear().domain([0,e.length]).range([t.left,n]),l=f.scaleSqrt().domain([1,a]).range([n/100,n/35]),c=f.axisLeft().scale(s),d=(o.append("g").attr("transform","translate(30,0)").call(c),f.select("#state").append("div").attr("class","tooltip").style("display","none"));o.selectAll("circle").data(e).enter().append("circle").attr("class","circle").attr("fill",function(t,e){return t.count==a?"#A81D40":"#8C92A3"}).attr("cy",function(t,e){return s(t.count)}).attr("cx",function(t,e){return i(e)}).attr("r",function(t,e){return l(t.count)}).style("opacity",.7).on("mouseover",function(t){f.select(this).transition().duration(200).attr("fill","orange"),d.transition().duration(200).style("display","block").style("opacity",.9),d.text(t.label+": "+t.count).style("left",f.event.pageX-30+"px").style("top",f.event.pageY-40+"px").style("position","absolute").style("background-color","#EFE8D3").style("padding","5px").style("font-color","steelgrey")}).on("mouseout",function(t){f.select(this).transition().duration(200).attr("fill",function(t,e){return t.count==a?"#A81D40":"#8C92A3"}),d.transition().duration(500).style("display","none").style("opacity",0)});var u=f.scaleLinear().domain([250,1e3]).range([10,24]);o.append("text").attr("x",n/2).attr("y",50).style("text-anchor","middle").style("font-weight","bold").style("font-size",u(n)+"px").text("Death Count by State")}()},drawMonthBarChart:function(){f.select("#month").html("");var t=[{label:"January",count:this.stats.month.jan},{label:"February",count:this.stats.month.feb},{label:"March",count:this.stats.month.mar},{label:"April",count:this.stats.month.apr},{label:"May",count:this.stats.month.may},{label:"June",count:this.stats.month.jun},{label:"July",count:this.stats.month.jul},{label:"August",count:this.stats.month.aug},{label:"September",count:this.stats.month.sep},{label:"October",count:this.stats.month.oct},{label:"November",count:this.stats.month.nov},{label:"December",count:this.stats.month.dec}],e=0;t.forEach(function(t){t.count>e&&(e=t.count)});var a=f.select("#month").node().getBoundingClientRect().width,n=30;a<500?function(){var n={top:50,right:20,bottom:20,left:20};a=a-n.left-n.right;var r=window.innerHeight-2*n.top-n.bottom,o=f.select("#month").append("svg").attr("width",a+n.left+n.right).attr("height",r+n.top+n.bottom),s=f.scaleLinear().domain([0,t.length]).range([2*n.top,r]),i=f.scaleLinear().domain([0,e]).range([n.left,a]),l=f.axisBottom().scale(i),c=(o.append("g").attr("transform","translate(0,"+r+")").call(l),f.select("#month").append("div").attr("class","tooltip").style("display","none"));o.selectAll("rect").data(t).enter().append("rect").attr("class","bar").attr("fill",function(t,a){return t.count==e?"#A81D40":"#8C92A3"}).attr("y",function(t,e){return s(e)}).attr("x",function(t,e){return i(0)}).attr("width",function(t,e){return i(t.count)-n.left}).attr("height",function(t,e){return(r-n.top)/12-5}).style("opacity",.7).on("mouseover",function(t){f.select(this).transition().duration(200).attr("fill","orange"),c.transition().duration(200).style("display","block").style("opacity",.9),c.text(t.label+": "+t.count).style("left",f.event.pageX-30+"px").style("top",f.event.pageY-40+"px").style("position","absolute").style("background-color","#EFE8D3").style("padding","5px").style("font-color","steelgrey")}).on("mouseout",function(t){f.select(this).transition().duration(200).attr("fill",function(t,a){return t.count==e?"#A81D40":"#8C92A3"}),c.transition().duration(500).style("display","none").style("opacity",0)});var d=f.scaleLinear().domain([250,1e3]).range([10,24]);o.append("text").attr("x",a/2).attr("y",30).style("text-anchor","middle").style("font-weight","bold").style("font-size",d(a)+"px").text("Death Count by Month")}():function(){var r={top:50,right:20,bottom:20,left:2*n};a=a-r.left-r.right;var o=window.innerHeight-2*r.top-r.bottom,s=f.select("#month").append("svg").attr("width",a+r.left+r.right).attr("height",o+r.top+r.bottom),i=f.scaleLinear().domain([0,e]).range([o,r.top]),l=f.scaleLinear().domain([0,t.length]).range([r.left,a]),c=f.axisLeft().scale(i),d=(s.append("g").attr("transform","translate("+n+",0)").call(c),f.select("#month").append("div").attr("class","tooltip").style("display","none"));s.selectAll("rect").data(t).enter().append("rect").attr("class","bar").attr("fill",function(t,a){return t.count==e?"#A81D40":"#8C92A3"}).attr("y",function(t,e){return i(t.count)}).attr("x",function(t,e){return l(e)}).attr("width",function(t,e){return a/12-5}).attr("height",function(t,e){return o-i(t.count)}).style("opacity",.7).on("mouseover",function(t){f.select(this).transition().duration(200).attr("fill","orange"),d.transition().duration(200).style("display","block").style("opacity",.9),d.text(t.label+": "+t.count).style("left",f.event.pageX-30+"px").style("top",f.event.pageY-40+"px").style("position","absolute").style("background-color","#EFE8D3").style("padding","5px").style("font-color","steelgrey")}).on("mouseout",function(t){f.select(this).transition().duration(200).attr("fill",function(t,a){return t.count==e?"#A81D40":"#8C92A3"}),d.transition().duration(500).style("display","none").style("opacity",0)});var u=f.scaleLinear().domain([250,1e3]).range([10,24]);s.append("text").attr("x",a/2).attr("y",30).style("text-anchor","middle").style("font-weight","bold").style("font-size",u(a)+"px").text("Death Count by Month")}()},reDraw:function(){this.drawGenderChart(),this.drawRaceChart(),this.drawAgeChart(),this.drawMonthBarChart(),this.drawStateChartBubble()},setPieChartIDColorandTitle:function(t,e,a){return{id:t,color:e,title:a}}},computed:{stats:function(){var t=this.$store.state.dataKey;return this.$store.state.stats[t]}},mounted:function(){this.$nextTick(function(){this.reDraw(),window.addEventListener("resize",this.reDraw)})},created:function(){var t=this.reDraw;this.$store.watch(function(t){return t.selectedYear},function(){t()})}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"data-wrapper"},[e("div",{attrs:{id:"age"}}),this._v(" "),e("div",{attrs:{id:"gender"}}),this._v(" "),e("div",{attrs:{id:"race"}}),this._v(" "),e("div",{attrs:{id:"state"}}),this._v(" "),e("div",{attrs:{id:"month"}})])])}]};var v={components:{MainTable:u,Charts:a("VU/8")(y,g,!1,function(t){a("cfZW")},"data-v-3f5c4926",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("People killed by police in "+this._s(this.$store.state.year))]),this._v(" "),this._m(0),this._v(" "),this._m(1),this._v(" "),e("br"),this._v(" "),e("h3",[this._v("Total: "+this._s(this.$store.state.kbpData[this.$store.state.dataKey].length))]),this._v(" "),e("Charts"),this._v(" "),e("MainTable")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Data from "),e("a",{attrs:{href:"http://killedbypolice.net/"}},[this._v("Killed by Police")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://github.com/iampeternguyen/killed-by-police-data"}},[this._v("GitHub Source")])])}]};var b=a("VU/8")(v,m,!1,function(t){a("tOZa")},null,null).exports,_=a("vwbq"),x={methods:{drawYearBarChart:function(){_.select("#year").html("");var t=[{label:"2018",count:this.$store.state.kbpData.y2018.length},{label:"2016",count:this.$store.state.kbpData.y2016.length},{label:"2017",count:this.$store.state.kbpData.y2017.length},{label:"2015",count:this.$store.state.kbpData.y2015.length},{label:"2014",count:this.$store.state.kbpData.y2014.length},{label:"2013",count:this.$store.state.kbpData.y2013.length}],e=0;t.forEach(function(t){t.count>e&&(e=t.count)}),console.log(e);var a=_.select("#year").node().getBoundingClientRect().width,n=30;a<500?function(){var n={top:50,right:20,bottom:20,left:20};a=a-n.left-n.right;var r=window.innerHeight-2*n.top-n.bottom,o=_.select("#year").append("svg").attr("width",a+n.left+n.right).attr("height",r+n.top+n.bottom),s=_.scaleLinear().domain([0,t.length]).range([2*n.top,r]),i=_.scaleLinear().domain([0,e]).range([n.left,a]),l=_.axisBottom().scale(i),c=(o.append("g").attr("transform","translate(0,"+r+")").call(l),_.select("#year").append("div").attr("class","tooltip").style("display","none"));o.selectAll("rect").data(t).enter().append("rect").attr("class","bar").attr("fill",function(t,a){return t.count==e?"#A81D40":"#8C92A3"}).attr("y",function(t,e){return s(e)}).attr("x",function(t,e){return i(0)}).attr("width",function(t,e){return i(t.count)-n.left}).attr("height",function(e,a){return(r-n.top)/t.length-5}).style("opacity",.7).on("mouseover",function(t){_.select(this).transition().duration(200).attr("fill","orange"),c.transition().duration(200).style("display","block").style("opacity",.9),c.text(t.label+": "+t.count).style("left",_.event.pageX-30+"px").style("top",_.event.pageY-40+"px").style("position","absolute").style("background-color","#EFE8D3").style("padding","5px").style("font-color","steelgrey")}).on("mouseout",function(t){_.select(this).transition().duration(200).attr("fill",function(t,a){return t.count==e?"#A81D40":"#8C92A3"}),c.transition().duration(500).style("display","none").style("opacity",0)});var d=_.scaleLinear().domain([250,1e3]).range([10,24]);o.append("text").attr("x",a/2).attr("y",30).style("text-anchor","middle").style("font-weight","bold").style("font-size",d(a)+"px").text("Death Count by Year")}():function(){var r={top:50,right:20,bottom:20,left:2*n};a=a-r.left-r.right;var o=window.innerHeight-2*r.top-r.bottom,s=_.select("#year").append("svg").attr("width",a+r.left+r.right).attr("height",o+r.top+r.bottom),i=_.scaleLinear().domain([0,e]).range([o,r.top]),l=_.scaleLinear().domain([0,t.length]).range([r.left,a]),c=_.axisLeft().scale(i),d=(s.append("g").attr("transform","translate("+n+",0)").call(c),_.select("#year").append("div").attr("class","tooltip").style("display","none"));s.selectAll("rect").data(t).enter().append("rect").attr("class","bar").attr("fill",function(t,a){return t.count==e?"#A81D40":"#8C92A3"}).attr("y",function(t,e){return i(t.count)}).attr("x",function(t,e){return l(e)}).attr("width",function(e,n){return a/t.length-15}).attr("height",function(t,e){return o-i(t.count)}).style("opacity",.7).on("mouseover",function(t){_.select(this).transition().duration(200).attr("fill","orange"),d.transition().duration(200).style("display","block").style("opacity",.9),d.text(t.label+": "+t.count).style("left",_.event.pageX-30+"px").style("top",_.event.pageY-40+"px").style("position","absolute").style("background-color","#EFE8D3").style("padding","5px").style("font-color","steelgrey")}).on("mouseout",function(t){_.select(this).transition().duration(200).attr("fill",function(t,a){return t.count==e?"#A81D40":"#8C92A3"}),d.transition().duration(500).style("display","none").style("opacity",0)});var u=_.scaleLinear().domain([250,1e3]).range([10,24]);s.append("text").attr("x",a/2).attr("y",30).style("text-anchor","middle").style("font-weight","bold").style("font-size",u(a)+"px").text("Death Count by Year")}()},reDraw:function(){this.drawYearBarChart()}},computed:{stats:function(){var t=this.$store.state.dataKey;return this.$store.state.stats[t]}},mounted:function(){this.$nextTick(function(){this.reDraw(),window.addEventListener("resize",this.reDraw)})}},w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"data-wrapper"},[e("div",{attrs:{id:"year"}})])])}]};var D={components:{Charts:a("VU/8")(x,w,!1,function(t){a("5aEy")},"data-v-178d3dc2",null).exports}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("People killed by police since May 1, 2013")]),this._v(" "),this._m(0),this._v(" "),this._m(1),this._v(" "),e("br"),this._v(" "),e("h3",[this._v("Total: "+this._s(this.$store.state.kbpData.y2018.length+this.$store.state.kbpData.y2017.length+this.$store.state.kbpData.y2016.length+this.$store.state.kbpData.y2015.length+this.$store.state.kbpData.y2014.length+this.$store.state.kbpData.y2013.length))]),this._v(" "),e("Charts")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Data from "),e("a",{attrs:{href:"http://killedbypolice.net/"}},[this._v("Killed by Police")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://github.com/iampeternguyen/killed-by-police-data"}},[this._v("GitHub Source")])])}]};var A=a("VU/8")(D,k,!1,function(t){a("xa1V")},null,null).exports,C={name:"app",components:{OneYearInfo:b,YearSelection:i,Spinner:c.a,AllYearInfo:A},beforeMount:function(){var t=this;t.loadData("").then(function(){console.log("2018 data loaded successfully"),t.loadData("kbp2017").then(function(){console.log("2017 data loaded successfully"),t.loadData("kbp2016").then(function(){console.log("2016 data loaded successfully"),t.loadData("kbp2015").then(function(){console.log("2015 data loaded successfully"),t.loadData("kbp2014").then(function(){console.log("2014 data loaded successfully"),t.loadData("kbp2013").then(function(){console.log("2013 data loaded successfully");["y2018","y2017","y2016","y2015","y2014"].forEach(function(e){t.calculateData(e)}),t.$store.state.loaded=!0,console.log("Stats calculated")})})})})})})},computed:{displayYearInfo:function(){return this.$store.state.loaded&&!this.$store.state.selectedAll},displayAllInfo:function(){return this.$store.state.loaded&&this.$store.state.selectedAll}},methods:{calculateData:function(t){var e={gender:{men:0,women:0,unreported:0},race:{white:0,black:0,asian:0,latinx:0,unreported:0},state:{},age:{under18:0,a18to24:0,a25to34:0,a35to44:0,a45to55:0,over55:0,unreported:0},month:{jan:0,feb:0,mar:0,apr:0,may:0,jun:0,jul:0,aug:0,sep:0,oct:0,nov:0,dec:0}};this.$store.state.kbpData[t].forEach(function(t){"M"==t.gender?e.gender.men++:"F"==t.gender?e.gender.women++:e.gender.unreported++,"W"==t.race?e.race.white++:"B"==t.race?e.race.black++:"A"==t.race?e.race.asian++:"L"==t.race?e.race.latinx++:e.race.unreported++,e.state[t.state]?e.state[t.state]++:e.state[t.state]=1,t.age<18?e.age.under18++:t.age>=18&&t.age<25?e.age.a18to24++:t.age>=25&&t.age<35?e.age.a25to34++:t.age>=35&&t.age<45?e.age.a35to44++:t.age>=45&&t.age<55?e.age.a45to55:t.age>=55?e.age.over55++:e.age.unreported++,t.date.match(/jan/i)?e.month.jan++:t.date.match(/feb/i)?e.month.feb++:t.date.match(/mar/i)?e.month.mar++:t.date.match(/apr/i)?e.month.apr++:t.date.match(/may/i)?e.month.may++:t.date.match(/jun/i)?e.month.jun++:t.date.match(/jul/i)?e.month.jul++:t.date.match(/aug/i)?e.month.aug++:t.date.match(/sep/i)?e.month.sep++:t.date.match(/oct/i)?e.month.oct++:t.date.match(/nov/i)?e.month.nov++:t.date.match(/dec/i)&&e.month.dec++}),this.$store.state.stats[t]=e},loadData:function(t){var e=this,n=a("mtWM");return new o.a(function(a,r){var o=t,s=function(){return""==o?2018:(s=/\d{4}/gi.exec(o))[0]},i="y"+s(),l="https://cors-anywhere.herokuapp.com/http://www.killedbypolice.net/"+o;n.get(l).then(function(t){if(200===t.status){var n=[],o=/\<td\>/gi;t.data.split(/\<tr\>/gi).forEach(function(t){var e=t.split(o);8===e.length&&n.push(e)}),n.splice(0,2),function(t){t.forEach(function(t){var a,r=(a=/<br>/gi.exec(t[1]))?a.length+1:1;if(r>1)for(var o=function(t,e){for(var a=void 0,n=0;n<=7;n++)if(a=t[n],0==n||2==n||5==n||6==n||7==n){t[n]=[];for(var r=0;r<e;r++)a.search(/<br>/gi)&&(a=(a=a.split(/<br>/gi))[0]),t[n].push(a)}else t[n]=a.split(/<br>/gi);return t}(t,r),s=0;s<r;s++){for(var l=[],c=0;c<=7;c++)l.push(o[c][s]);var d=n(l);d&&e.$store.state.kbpData[i].push(d)}else{var u=n(t);u&&e.$store.state.kbpData[i].push(u)}}),0!=e.$store.state.kbpData[i].length?a(e.$store.state.kbpData[i]):r("Could not load data");function n(t){var e,a=/(?:<center>)*(?:\(.*\))*\s*([A-Z].*\d+)/g,n=a.exec(t[1]),r=n[1];if(!((e=r).match(/feb/i)||e.match(/jan/i)||e.match(/mar/i)||e.match(/apr/i)||e.match(/may/i)||e.match(/jun/i)||e.match(/jul/i)||e.match(/aug/i)||e.match(/sep/i)||e.match(/oct/i)||e.match(/nov/i)||e.match(/dec/i)))return!1;var o=t[2],s=void 0,i=void 0;2===(n=t[3].split("/")).length?(s=n[0],i=n[1]):1===n.length&&""==!(n=n[0].replace(/\s*/g,""))&&(s=n);var l=void 0,c=void 0,d=void 0;2===(n=t[4].split(/[,\">]/g)).length?(l=n[0],c=n[1].replace(/\s*/g,"")):n.length>2?(l=n[3],d=n[1],n[4]&&(c=n[4].replace(/\s*/g,""))):(n=(a=/(^[A-Z].*)/g).exec(n[0]))&&(l=n[0]),c=(c=/\d*/.exec(c))[0];var u=[];n=t[5].split(/[<>]/);for(var h=2;h<=n.length;h++)h%2==0&&u.push(n[h]);var p=(n=t[6].split('"'))[1],f=(n=t[7].split('"'))[1];return{date:r,state:o,gender:s,race:i,name:l,age:c,photo:d,killedBy:u,kbpLink:p,newsLink:f}}}(n)}},function(t){return console.log(t)})})}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.$store.state.loaded?this._e():e("spinner"),this._v(" "),e("YearSelection",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.loaded,expression:"this.$store.state.loaded"}]}),this._v(" "),this.displayYearInfo?e("OneYearInfo"):this._e(),this._v(" "),this.displayAllInfo?e("AllYearInfo"):this._e()],1)},staticRenderFns:[]};var E=a("VU/8")(C,$,!1,function(t){a("6fj+")},null,null).exports,L=a("NYxO");n.a.use(L.a);var Y=new L.a.Store({state:{kbpData:{y2018:[],y2017:[],y2016:[],y2015:[],y2014:[],y2013:[]},rawData:[],selectedYear:"",year:2018,dataKey:"y2018",loaded:!1,stats:{y2018:{},y2017:{},y2016:{},y2015:{},y2014:{},y2013:{}},selectedAll:!1},getters:{},mutations:{setSelection:function(t,e){""==e?e=2018:e=/\d{4}/gi.exec(e)[0];t.selectedYear=e,t.year=e,t.dataKey="y"+e}}});n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",store:Y,components:{App:E}})},QNQJ:function(t,e){},cfZW:function(t,e){},tOZa:function(t,e){},xa1V:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.873188173d0a81e8cd4b.js.map