import {validateIp} from './helpers';


const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    // проверка данных
    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_6Wxw1bBSgYv8Bw8a0CP1E3cj1oGsh&ipAddress=${ipInput.value}`)
            .then(response => response.json())
            .then(console.log);
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}