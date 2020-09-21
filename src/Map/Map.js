import React from 'react';
import L from 'leaflet';
import './Map.css';

class Map extends React.Component {

    componentDidMount() {
        const position = [51.505, -0.09]
        this.map = L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            //maxZoom: 18,
            //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            //    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            //    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            //tileSize: 512,
            //zoomOffset: -1
        }).addTo(this.map);

        /*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            //attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.map)*/
            
        /*L.marker(position)
            .addTo(this.map)
            .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')*/
        
    }

    render() { 
        return (
            <div 
                id="mapid"
                className="map" />
        );
    };
}

export default Map;