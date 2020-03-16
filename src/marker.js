const mapboxgl = require("mapbox-gl");

const markerFactory = (type, coordinates, map) => {
    const typeLinks = {
        activity: 'http://i.imgur.com/WbMOfMl.png',
        hotel: 'http://i.imgur.com/D9574Cu.png',
        restaurant: 'http://i.imgur.com/cqR6pUI.png',
    }  

    let marker = document.createElement('div');

    marker.style.width = '30px';
    marker.style.height = '30px';
    marker.style.backgroundImage = `url(${typeLinks[type]})`;

    // console.dir(marker)
    return new mapboxgl.Marker(marker).setLngLat(coordinates).addTo(map);

}

export default markerFactory