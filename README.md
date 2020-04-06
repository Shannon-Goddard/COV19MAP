# Vision  
**Create dashboard of U.S. Map**  
- HTML maps
- States colored by d3 min/max valued by "cases" (choropleth)  
- U.S. map has drop-down select by day with filtered data shown  
- U.S. map has hover-on state show data of selected day
- On-click each state will take you to specified state by county   
- Counties colored by d3 min/max valued by "cases" (choropleth)  
- Each state by county map has drop-down select by day with filtered data shown  
- Each state has hover-on county show data of selected day
- Each state by county map has back-button to U.S. map  
    - **note:** California is active for example of drop-down filter and hover

**To-do list**  
- Counties colored by d3 min/max valued by "cases" (choropleth)
    - color by d3 min/max should be dynamic. In the main.js code.  
**note:** main.js is located in *static\counties\static\js\data.js*
- Get data (live feed would be perfered, however, found csv. [here](https://github.com/datasets/covid-19) and [here](https://github.com/nytimes/covid-19-data))
    - **note** current data is in *static\counties\static\js\data.js*. **Only set up for California at this time**. Have csv for all U.S. Counties to upload after color by d3 is completed. 

  

View deployment [here](https://shannon-goddard.github.io/COV19MAP/)
