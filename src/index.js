const mapboxgl = require("mapbox-gl");


mapboxgl.accessToken = 'pk.eyJ1IjoiYzNzYXIyMDciLCJhIjoiY2s1d3B6amViMXh5eDNrbWpjZWVqc3NqYSJ9.7vsEQ9O8osBtO9wdggls7Q';
 
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = document.createElement('div')

marker.style.width = '30px';
marker.style.height = '30px';
marker.style.backgroundColor = 'red';
marker.style.borderRadius = '20px'

new mapboxgl.Marker(marker).setLngLat([-87.641, 41.895]).addTo(map);

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago