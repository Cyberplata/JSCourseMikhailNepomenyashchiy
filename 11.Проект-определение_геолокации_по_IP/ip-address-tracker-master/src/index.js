import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import {validateIp} from './helpers';


const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/Cyberplata/JSCourseMikhailNepomenyashchiy/tree/main/11.%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%BA%D0%B0%D1%86%D0%B8%D0%B8_%D0%BF%D0%BE_IP/ip-address-tracker-master">Platon Kynin</a>.'
}).addTo(map);

function getData() {
    // проверка данных
    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_6Wxw1bBSgYv8Bw8a0CP1E3cj1oGsh&ipAddress=${ipInput.value}`)
            .then(response => response.json())
            .then(setInfo)
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) {
    console.log(mapData);
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = mapData.location.country + ' ' + mapData.location.region;
    timezoneInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
}