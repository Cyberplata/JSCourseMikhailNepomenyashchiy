// THIS

const developer = {
   name: 'Mikhail',
   salary: 2500,

   getBonus(sum) {
      console.log(this.name, 'has a salary this month', this.salary + sum);
   } 
}
// developer.getBonus(250);

const manager = {
   name: 'Anna',
   salary: 1800,
}

// developer.getBonus.call(manager, 150);
// developer.getBonus.apply(manager, [150]);
// developer.getBonus.bind(manager, 150)()

// manager.getBonus = developer.getBonus.bind(manager);
// manager.getBonus(150);


/*
Практика на использование контекста
Дан объект supporter1. Опишите его метод chant, при вызове которого с задержкой в 1 секунду в консоль выводится сообщение "Forza Milan".

Затем привяжите к объекту supporter2 метод chant таким образом, чтобы при вызове спустя 1 секунду в консоль выводилось сообщение "Forza Inter".
*/

const supporter1 = {
    club: 'Milan',
    
    chant() {
      const messageOutput = () => console.log('Forza', this.club);
      setTimeout(messageOutput, 1000);
    },
}

const supporter2 = {
    club: 'Inter'
}

supporter2.chant = supporter1.chant.bind(supporter2);

supporter1.chant();
supporter2.chant();