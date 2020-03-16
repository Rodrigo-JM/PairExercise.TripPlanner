const mapboxgl = require("mapbox-gl");

import markerFactory from './marker.js'

mapboxgl.accessToken = 'pk.eyJ1IjoiYzNzYXIyMDciLCJhIjoiY2s1d3B6amViMXh5eDNrbWpjZWVqc3NqYSJ9.7vsEQ9O8osBtO9wdggls7Q';
 
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const button = document.getElementById('submit');

button.addEventListener('click', function(event) {

    let lat = parseFloat(document.getElementById('latitude').value);
    let long = parseFloat(document.getElementById('longitude').value);
    let type = document.getElementById('type').value;

    return markerFactory(type, [long, lat], map) 

})
