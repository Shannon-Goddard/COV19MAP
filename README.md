Click [here](https://shannon-goddard.github.io/COV19MAP/) for Cov19 map demo  
![](/cov19gif.gif)

## Data  
- data is being taken as csv format from https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv  
- from there it is being converted to json format in the repo https://github.com/Shannon-Goddard/data
- The cov19 map uses data from that repo https://raw.githubusercontent.com/Shannon-Goddard/data/master/data.json
- the data can be updated by downloading the repo and running the python script. *There is a way in git actions to have it automatically do this for you.*

## To-do list  
### Drop-down box
- Drop-down box for user to select by date *currently showing totals for all dates combined*  
Would like for drop down box to be created by for-loop. **NOT HARD CODED**  
That way the drop down menu will automatically add new dates as they are updated.  
### Data
- Get git actions to automatically update the data
