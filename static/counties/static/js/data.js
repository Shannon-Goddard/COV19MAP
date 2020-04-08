const url='https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv'

// const pulledData = d3.csv(url, function(pulledData){
//     console.log(pulledData);
// });
const pulledData = d3.csv(url);

// convert from csv to json
function csvJSON(csv) {
    var lines = csv.split('\n');
    var result = [];
    var headers = lines[0].split(',');
  
    for (let i = 1; i < lines.length; i++){
      if (!lines[i])
        continue
      var obj = {};
      var currentline = lines[i].split(',');
  
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    // return result
    return JSON.stringify(result);
  }

var data = csvJSON(pulledData);
console.log(data);