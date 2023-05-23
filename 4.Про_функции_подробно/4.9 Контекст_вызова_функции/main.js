// THIS

const cat = {
   name: 'Murka',
   say() {
      const greeting = () => console.log(this.name);
      //function greeting () {console.log(this.name);}

      setTimeout(greeting, 1000);
   },
}