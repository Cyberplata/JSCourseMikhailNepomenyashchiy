const developer = {
   name: 'Vasiliy',
   surname: 'Vasiliy',
   age: 30,
   skills: ['JavaScript', 'TypeScript', 'CSS'],
   isMaried: false,
};

for (let prop in developer) {
   console.log(prop, developer[prop]);
}


const htmlDiv = {
   className: 'column',
   rel: 'main',
   id: 'block',
};

for(const prop in htmlDiv) {
   console.log(htmlDiv[prop]);
}