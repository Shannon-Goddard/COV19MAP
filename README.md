# COVID-19 Interactive Map

An interactive choropleth map visualizing COVID-19 cases and deaths by US county using real-time data from The New York Times.

![COVID-19 Map Demo](cov19.gif)

## 🚀 Live Demo

- **GitHub Pages**: [shannon-goddard.github.io/COV19MAP](https://shannon-goddard.github.io/COV19MAP/)
- **AWS S3**: [cov19map](http://cov19bucket.s3-website.us-east-2.amazonaws.com/)

## ✨ Features

- **Real-time Data**: Automatically fetches daily updated COVID-19 data from NYT's dataset
- **Interactive Visualization**: Hover over counties to view detailed case and death statistics
- **Responsive Design**: Optimized for various screen sizes
- **Color-coded Mapping**: Visual representation of case density using color gradients

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Visualization**: D3.js, TopoJSON
- **Styling**: Bootstrap 3
- **Data Source**: [NYT COVID-19 Data](https://github.com/nytimes/covid-19-data)

## 📊 Data

The map uses live data from The New York Times COVID-19 dataset, which includes:
- County-level case counts
- Death statistics
- Daily updates
- FIPS codes for geographic mapping

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone [https://github.com/Shannon-Goddard/COV19MAP](https://github.com/Shannon-Goddard/COV19MAP)
```

2. Open `index.html` in your browser or serve with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## 📁 Project Structure

```
COV19MAP/
├── index.html          # Main HTML file
├── index.js           # D3.js visualization logic
├── style.css          # Custom styles
├── us.json           # US geographic data
├── cov19.gif         # Demo animation
└── header.png        # Project header image
```

## 🎨 Color Scale

The map uses a threshold scale with the following case count ranges:
- 0-99: Light colors
- 100-499: Light red
- 500-999: Medium red
- 1000+: Progressively darker red shades

## 🔧 Customization

To modify the color thresholds, update the domain values in `index.js`:
```javascript
var color = d3.scaleThreshold()
  .domain([100, 500, 1000, 2500, 5000, 10000, 20000, 30000])
  .range(d3.schemeReds[9]);
```

## 📈 Performance

- **GitHub Pages**: ~20 second load time
- **AWS S3**: ~10 second load time
- Data size: 500,000+ records (growing daily)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The New York Times](https://github.com/nytimes/covid-19-data) for providing comprehensive COVID-19 data
- [D3.js](https://d3js.org/) for powerful data visualization capabilities
- [TopoJSON](https://github.com/topojson/topojson) for efficient geographic data encoding
