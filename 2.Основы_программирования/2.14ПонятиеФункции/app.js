// function
function sum(a, b) {
  return a + b;
}

const x = sum(1, 5);

function getNumberData(quation) {
  while(true) {
      const res = +prompt(quation);

      if(res === 0 || res) {
          return res;
      }
  }
}

const age = getNumberData('Сколько тебе лет?');
console.log(age);

const salary = getNumberData('Какая у вас зарплата?');