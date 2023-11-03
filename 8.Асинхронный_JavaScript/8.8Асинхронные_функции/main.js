fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => {
      if (response.ok) {
         return response.json()
      }

      throw new Error('Failed to fetch');
   })
   .then(console.log)
   .catch(console.error)


   /* 1ый пример */
async function getUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
   const data = await response.json();

   return data; // с return
}

// const getUsers = async () => {}
getUsers().then(console.log); // с .then(console.log)
console.log(1);
console.log(2);
console.log(3);
/* 
1
2
3
undefined
{
   userId: 1, 
   id: 1, 
   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
   body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'
} */


   /* 2ой пример */
async function getUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
   const data = await response.json();

   console.log(data);  // без return
}

getUsers(); // без .then(console.log)
console.log(1);
console.log(2);
console.log(3);
// Точно такой же ответ, как в 1ом примере 


/* 3ий пример с try catch с обработкой ошибок */
async function getUsers() {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data); 
      throw new Error('Failed!!!')
   } catch (error) {
      console.error(error.message)
   }
}

getUsers();
console.log(1);
console.log(2);
console.log(3);
/* 
1
2
3
undefined
{
   userId: 1, 
   id: 1, 
   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
   body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'
} 
Failed!!!
*/