const block1 = document.querySelector('#block');

const block2 = block1.querySelector('#too');

// console.log(block2.getBoundingClientRect());

const x = 1;

// block2.insertAdjacentHTML('afterbegin', `
//    <h2 class="subtitle">Text</h2>
//    <p>${x}</p>
// `)

console.log(block2.closest('#block'));