// Initialize Leaflet map
var map = L.map('map').setView([0, 0], 2);

// Add Basemap Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define Earthquake Data URL
var earthquake_data_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

// Fetch Earthquake Data
fetch(earthquake_data_url)
  .then(response => response.json())
  .then(data => {
    
    // Loop Through Earthquake Data
    data.features.forEach(feature => {
      
      // Extract Earthquake Properties
      var magnitude = feature.properties.mag;
      var depth = feature.geometry.coordinates[2];

      // Define Marker Size And Color Based On Magnitude And Depth
      var marker_size = magnitude * 5;
      var marker_color;
      if (depth >= -10 && depth <= 10) {
          marker_color = '#FFD700';
      } else if (depth > 10 && depth <= 30) {
          marker_color = '#FFA500';
      } else if (depth > 30 && depth <= 50) {
          marker_color = '#FF6347';
      } else if (depth > 50 && depth <= 70) {
          marker_color = '#FF1493';
      } else if (depth > 70 && depth <= 90) {
          marker_color = '#800080';
      } else {
          marker_color = '#0000CD';
      }

      // Create Marker With Popup
      var marker = L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
        radius: marker_size,
        color: 'black',
        fillColor: marker_color,
        fillOpacity: 0.7
      }).addTo(map);

      marker.bindPopup(`<b>Magnitude:</b> ${magnitude}<br><b>Depth:</b> ${depth} km`);
    });
  });

// Add Legend
var legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<h4>Depth (km)</h4>';
    div.innerHTML += '<i style="background: #FFD700"></i> -10 to 10 km<br>';
    div.innerHTML += '<i style="background: #FFA500"></i> 10 to 30<br>';
    div.innerHTML += '<i style="background: #FF6347"></i> 30 to 50<br>';
    div.innerHTML += '<i style="background: #FF1493"></i> 50 to 70<br>';
    div.innerHTML += '<i style="background: #800080"></i> 70 to 90<br>';
    div.innerHTML += '<i style="background: #0000CD"></i> 90+<br>';
    return div;
  };  

// Add Legend To Leaflet Map  
legend.addTo(map);

