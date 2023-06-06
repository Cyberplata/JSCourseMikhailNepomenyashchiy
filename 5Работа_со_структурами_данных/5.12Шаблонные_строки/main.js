// Template string

const firstName = 'John';
const lastName = 'Doe';

console.log('Hi, my name is ' + firstName + ' ' + lastName + '!'); // Hi, my name is John Doe!
console.log(`Hi, my name is ${firstName} ${lastName}! My age is ${2023 - 1995}`); // Hi, my name is John Doe! My age is 28


const html = `
   <div>
      <h1>${firstName} ${lastName + ` abc ${lastName}`}</h1>
      <button>Click me</button>
   </div>
`;

console.log(html); 
/*    
<div>
   <h1>John Doe abc Doe</h1>
   <button>Click me</button>
</div> 
*/