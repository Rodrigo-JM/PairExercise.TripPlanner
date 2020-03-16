const mapboxgl = require("mapbox-gl");

import markerFactory from './marker.js'

mapboxgl.accessToken = 'pk.eyJ1IjoiYzNzYXIyMDciLCJhIjoiY2s1d3B6amViMXh5eDNrbWpjZWVqc3NqYSJ9.7vsEQ9O8osBtO9wdggls7Q';
 
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = markerFactory('activity', [-74.009, 40.705], map)
const marker1 = markerFactory('hotel', [-73.935242, 40.730610], map)
const marker2 = markerFactory('restaurant', [-73.968285, 40.785091], map)