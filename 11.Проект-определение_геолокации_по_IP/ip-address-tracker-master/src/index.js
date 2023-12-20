import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {addTileLayer, getAddress, validateIp} from './helpers';
import icon from '../images/icon-location.svg';


const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon ({
    iconUrl: icon,
    iconSize: [30, 40],
    // iconAnchor: [22, 94],
    popupAnchor:  [-3, -76]
})

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
    zoomControl: false
});
addTileLayer(map);
L.marker([51.505, -0.09], {
    icon: markerIcon
}).addTo(map).bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map).bindPopup("I am a circle.");
L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map).bindPopup("I am a polygon.");

L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

function getData() {
    // проверка данных
    if (validateIp(ipInput.value)) {
        getAddress(ipInput.value)
            .then(setInfo)

        // fetch(`
        //     https://geo.ipify.org/api/v2/country,city?apiKey=at_6Wxw1bBSgYv8Bw8a0CP1E3cj1oGsh&ipAddress=${ipInput.value}`)
        //         .then(response => response.json())
        //         .then(setInfo)
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) {
    const {lat, lng, country, region, timezone} = mapData.location;

    console.log(mapData);
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + ' ' + region;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    map.setView([lat, lng]);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map).bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
}