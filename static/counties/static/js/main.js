// get data from all counties in data.js
const countyData = data;

$("path, polyline, polygon").hover(function(e) {
  // make tooltip visible
  $('#info-box').css('display','block');
  // get date from selector element
  let Date = document.querySelector('#myList').value;
  console.log(Date);
  // filter the `data` array for counties just in that date
  let filtered = countyData.filter(d => d.date == Date);
  console.log(filtered);
  // change color of each county based on number of cases
  var color = d3.scaleLinear()
                .domain([0, 10000])
                .range(["lightblue", "red"]);
  filtered.forEach(function(d){
    d3.select("g#"+d[1]) //select the group matching the id
      .datum(d) //attach this data for future reference
      .selectAll("path, polyline, polygon")
      .datum(d) //attach the data directly to "each" shape
      .attr('fill', d?color(d[4]):"lightgray");
  });
  // filter counties of that date to just the one county matching the id of 
  // the path that is being hovered on 
  let county = filtered.filter(d => d.county == $(this).attr('id'))[0];
  console.log(county);
  // create the html string to populate the tooltip with 
  // as long as the key isn't 'id' then continue building
  let county_html = '';
  Object.entries(county).forEach(([key, value]) => {
    if (key !== 'id' && key !== 'undefined' && key !== 'null') {
      county_html += `${key}: ${value}<br>`;
    }
  });
  // change value of tooltip to html we just made
  $('#info-box').html(county_html);
});
$("path, polyline, polygon").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();
var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
function getOption() {
  let selectElement = document.querySelector('#myList');
  output = selectElement.value;
  document.querySelector('.output').textContent = output;
}
