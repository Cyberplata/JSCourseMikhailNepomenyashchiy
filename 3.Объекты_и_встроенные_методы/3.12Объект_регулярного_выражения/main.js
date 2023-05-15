// RegExp

const regex1 = /\w+/;
const regex2 = new RegExp('\\w+');

const str = 'JavaScript is cool language. Everybody should learn JavaScript';
console.log(/JavaScript/i.test(str));

console.log(str.replace(/javascript/gi, 'php'));

console.log(str.match(/js/gi));