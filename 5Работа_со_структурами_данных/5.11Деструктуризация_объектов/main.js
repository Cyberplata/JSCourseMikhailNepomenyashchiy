// Destructuring

const developer = {
   id: 1,
   fullName: 'Jonh Doe',
   skills: ['HTML', 'CSS', 'JavaScript'],
   area: 'frontend',
   languages: {
      english: 'B2',
      spanish: 'native',
      hebwer: 'A1',
   },
};

// const area = 'abc';
let area, id;
({area, id} = developer); // Всё обернём в () чтобы JS понимал это ни как блок кода {}, 
                          // а как деструктуризацию


// const {
//    area: areaDeveloper = '',
//    id = null,
//    languages: {
//       spanish
//    } = {},
//    skills: [,,basicSkill] = [],
//    ...otherProp
// } = developers || {};
// console.log(area, areaDeveloper ,id, otherProp);
/*
abc frontend 1 {
  fullName: 'Jonh Doe',
  skills: [ 'HTML', 'CSS', 'JavaScript' ],
  languages: { english: 'B2', spanish: 'native', hebwer: 'A1' }
} 
*/
// console.log(spanish); // native
// console.log(basicSkill); // JavaScript


// console.log(area, id); // frontend 1


function fn([a, b, c], {x, y}) {} // Можно в параметрах расписывать деструктуризацию, 
                                  // допустим что первый параметр a это массив [a, b, c], 
                                  //              второй параметр b это объект {x, y},
                                  // а можно внутри функции расписать, кому как нравитс


/*
Практика по деструктуризации объекта
Дан объект link. Используя деструктуризацию объекта, создайте новые переменные со значениями 'blank', 'link', 'anchor', 'Click me'. 
Имена переменных используйте согласно ключам (где необходимо, используйте переименование, создав переменную с именем renamed).
*/
const link = {
    href: '#',
    title: 'simple link',
    target: 'blank',
    className: 'link',
    id: null,
    children: {
        span: {
            content: 'Click me',
            className: 'anchor',
        },
    },
}

const {
   target = '',
   className = '',
   children: {
       span: {
         className: renamed = '',
         content = '',
      } = {},
   } = {},
} = link || {};

console.log(target, className, renamed, content);