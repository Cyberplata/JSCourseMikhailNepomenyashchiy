      /* First example */
// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('foo');
//    }, 300);
// });

// promise1.then((value) => {
//    console.log(value);
//    // expected output: 'foo'
// });

// console.log(promise1);
/* 
Promise { <pending> } - объект
   [[Prototype]]: Promise - объект
      catch: ƒ catch() - возможность передать функцию в reject
      constructor: ƒ Promise() - через new возможность создать что-то
      finally: ƒ finally() - функция выыполнится в любом случае
      then: ƒ then() - возможность передать ф-ю какую-то в область resolve, которая потом вызывается
   [[PromiseState]]: "fulfilled" - состояние промиса
   [[PromiseResult]]: "foo" - value
foo 
*/


      /* second example */
// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve(10);
//    }, 300);
// });

// promise1.then((value) => {
//    // operation 1
//    return value + 4;
// })
//    .then((value) => value -1)
//    .then(console.dir)

// console.log(promise1);
/* 
Promise { <pending> }
13
*/


      /* third example */
function withPromise() {
   return new Promise((resolve, reject) => {
      resolve('Hello from Promise');
   });
};

console.log('Hi there, me first');

setTimeout(() => console.log('When is my turn?'), 0);
withPromise().then(console.log).catch(value => console.log(value + '!!!!'))

console.log('Am I last in the queue?');
