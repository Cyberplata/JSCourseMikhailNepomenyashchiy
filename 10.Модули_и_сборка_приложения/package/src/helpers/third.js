import _ from 'lodash'; // импорт без конкретного названия - './first', а просто 'lodash' и js автоматом находит, что это какая-то библиотека и находится в node_modules

export const x = 1;  

export default function print() { // экспорт по умолчанию может быть - один, обычных(именованных) - несколько
    console.log('Hello');
}