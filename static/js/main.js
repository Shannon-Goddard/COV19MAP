$("path, circle").hover(function(e) {
  // make tooltip visible
  $('#info-box').css('display','block');
  // get year from selector element
  const year = document.querySelector('#myList').value;
  // filter the `data` array for states just in that year
  const filtered = data.filter(d => d.Year == year);
  // filter states of that year to just the one state matching the id of 
  // the path that is being hovered on 
  const state = filtered.filter(d => d.id == $(this).attr('id'))[0];
  // create the html string to populate the tooltip with 
  // as long as the key isn't 'id' then continue building
  let state_html = '';
  Object.entries(state).forEach(([key, value]) => {
    if (key != 'id') {
    state_html += `${key}: ${value}<br>`;
    }
  })
  // change value of tooltip to html we just made
  $('#info-box').html(state_html);
});
$("path, circle").mouseleave(function(e) {
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
  const selectElement = document.querySelector('#myList');
  output = selectElement.value;
  document.querySelector('.output').textContent = output;
}