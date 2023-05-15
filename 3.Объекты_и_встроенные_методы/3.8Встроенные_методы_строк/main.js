//strings methods
const str = 'Hello world';
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.includes('world'));
console.log(str.indexOf('world'));
console.log(str.indexOf('js'));

console.log(str.toLocaleLowerCase().includes('hello'));

console.log(str.slice(0, 5));
console.log(str.slice(6));

console.log(str.split(' ')); //метод принимает некий разделитель в данном случае пробел и преобразует строку в массив
console.log(str.split(' ').join(' | ')); //join преобразует массив в строку и между словами ставит пробел и посередине вертикальную черту