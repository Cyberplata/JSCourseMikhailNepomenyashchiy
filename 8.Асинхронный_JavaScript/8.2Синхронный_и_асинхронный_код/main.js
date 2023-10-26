console.log('Hi there, me first');

setTimeout(() => console.log('When is my turn?'), 0);

console.log('Am I last in the queue?');


// Отработает по порядку =>

/* =>
   1. Hi there, me first
   2. Am I last in the queue?
   3. When is my turn? 
*/