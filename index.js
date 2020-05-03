// Width and height
var width = 900;
var height = 500;
var color = d3.scaleThreshold().domain([100, 500, 1000, 2500, 5000, 10000, 20000, 30000]).range(d3.schemeReds[9]);

//function to scale map
function scale(scaleFactor, width, height) {
  return d3.geoTransform({point: function(x, y) {
    this.stream.point(
      (x - width / 2) * scaleFactor + width / 2,(y - height / 2) * scaleFactor + height / 2);
    }
  });
}

var path = d3.geoPath().projection(scale(.6, width, height));
const cov19 = [];
var svg = d3.select("#chart").append('svg')
.attr("preserveAspectRatio", "xMidYMid")
.attr("viewBox", "0 0 " + width + " " + height);

//fetch cov19 data and push into cov19 array, set color domain with min and max values of cov19 data
d3.csv("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv").then(function(data) {

    //last value of d3.range (below) is the step value and bin size.
    //anything less than min will be the first colour in d3.range, and anything above or equal to max will be the last color in d3.range
    color.domain([100, 500, 1000, 2500, 5000, 10000, 20000, 30000])(d3.range(d3.schemeReds[9]));
    cov19.push(data);
  
  //get state/coutnties data to draw map
  d3.json("https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json").then(function(data) {
    const geojsonCounties = topojson.feature(data, data.objects.counties).features;
    for (var i = 0; i < cov19[0].length; i++) {
      var state = cov19[0][i].state;
      var cases = cov19[0][i].cases;
      var deaths = cov19[0][i].deaths;
      var countyFips = cov19[0][i].fips;
      var county = cov19[0][i].county;
      
    for (var j = 0; j < geojsonCounties.length; j++) {
      var countyId = geojsonCounties[j].id;
      if (countyFips == countyId) {
        geojsonCounties[j].properties.value = {
          cases: cases,
          deaths: deaths,
          state: state,
          county: county
        }
      }
    }
  };
  
  svg.selectAll("path").data(geojsonCounties).enter().append("path").attr("d", path).attr("fill", function(d) {
    var value = d.properties.value;
    if (value) {
      return color(value.cases);
    } else {
      return "#ccc";
    }
  })
  
  //create tooltips
  .on("mouseover", function(d) {
      var coordinates = [];
      coordinates = d3.mouse(this);
      d3.select("#alert").style("background-color", "rgb(255, 247, 188)").style("opacity", "0.8").style("display", "block").html(d.properties.value.county + " " + d.properties.value.state + " has " + d.properties.value.cases + " cases " + " and " + d.properties.value.deaths + " deaths " + " ");
    })
    
    .on("mouseout", function() {
      d3.select("#alert").style("display", "none");
    });
    
    //state boudary stroke
    svg.append("path").datum(topojson.mesh(data, data.objects.states, function(a, b) {
      return a !== b;
    }))
    .attr("d", path)
    .attr("margin", 1)
    .attr("stroke", "rgb(43, 42, 42)")
    .attr("stroke-linejoin", "round")
    .attr("fill", "none");
 

      //counties boudary stroke
      svg.append("path").datum(topojson.mesh(data, data.objects.counties, function(a, b) {
        return a !== b;
      }))
      .attr("d", path)
      .attr("margin", 1)
      .attr("stroke-width", .25)
      .attr("stroke", "rgb(43, 42, 42)")
      .attr("stroke-linejoin", "round")
      .attr("fill", "none");
    });
});