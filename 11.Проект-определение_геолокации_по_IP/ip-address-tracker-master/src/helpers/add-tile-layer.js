import L from 'leaflet';

export function addTileLayer(map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/Cyberplata/JSCourseMikhailNepomenyashchiy/tree/main/11.%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B3%D0%B5%D0%BE%D0%BB%D0%BE%D0%BA%D0%B0%D1%86%D0%B8%D0%B8_%D0%BF%D0%BE_IP/ip-address-tracker-master" target="_blank">Platon Kynin</a>.'
    }).addTo(map);
}