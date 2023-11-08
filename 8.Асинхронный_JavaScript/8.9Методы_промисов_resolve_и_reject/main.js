async function getUsers() {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data); 
      throw new Error('Failed!!!')
   } catch (error) {
      console.error(error.message)
   }
}

async function getPictures() {
   // const response = await fetch('https://jsonplaceholder.typicode.com/images');
   // const data = await response.json();

   // return data;

   // return Promise.resolve([{id: 1, src: ''}])
   return Promise.reject('Invalid user')
}
getPictures()
   .then()
   .catch()