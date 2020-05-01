![header_pic](/header.png)
 
#### Table of Contents  

[Project Overview](#project-overview)  
[Resources](#resources)  
[Objectives](#objectives)  
[Summary](#summary)  
[Limitations](#limitations)  
  
## Project Overview  
In this module, we created a map to organize covid19 data that is stored as csv data on a static website. This map has the ability to transform data using javascript as the primary coding language.  

## Resources  
- **Software:** VS Code, Jupyter Notebook   
- **Languages:** HTML, CSS, JSON, JS, d3  
- **Data Source:** [csv](https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv) *data is updated daily*    

## Objectives  
- Import, analyze, transform a “real-world” classification dataset  
- Create, populate, and dynamically filter a map using JavaScript, CSS, HTML, and d3  

## Summary  
**Check-out this interactive map demo [here](https://shannon-goddard.github.io/COV19MAP/)**  

![](/cov19gif.gif)  

To improve load time, this map is, also, published on **AWS | Check-out it out:**
- [cov19map](http://cov19bucket.s3-website.us-east-2.amazonaws.com/)  

## Limitations  
## To-do list  
### Drop-down box
- Drop-down box for user to select by date *currently showing totals for all dates combined*  
Would like for drop down box to be created by for-loop. **NOT HARD CODED**  
That way the drop down menu will automatically add new dates as they are updated.  

### Cashe for faster load
- Load time is 20 seconds on githubs git page launch address
- Load time is 10 seconds on AWS s3 bucket  
Would like for a 2 second page load to improve user experience. **csv** being fetched is over 500,000 lines of data and building each day.Hoping drop-down box will help with this issue.  

### Style  
- Page design | responsiveness 
Currently, page is responsive and more appealing to smaller screen sizes. Woud like to have more consistant viewing, regaurdless of screen size.
