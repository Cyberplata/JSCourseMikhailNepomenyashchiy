                                 /* Promise.race */
async function getPostsBerlin() {
   const response = await fetch('https://jsonplaceholder.typicode.com/berlin/posts');
   const data = await response.json();

   return data; // [post1]
}

async function getPostsNewYork() {
   const response = await fetch('https://jsonplaceholder.typicode.com/newyork/posts');
   const data = await response.json();

   return data; // [post1]
}

async function getPostsDefault() {
   const response = await fetch('https://jsonplaceholder.typicode.com/default/posts');
   const data = await response.json();

   return data; // [post1]
}

Promise.race([getPostsBerlin(), getPostsNewYork(), getPostsDefault()]).then();

                              /* Promise.all */
/*
async function getPosts() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   const data = await response.json();

   return data; // [post1]
}

async function getUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();

   return data; // [user1]
}

async function getComments() {
   const response = await fetch('https://jsonplaceholder.typicode.com/comments');
   const data = await response.json();

   return data; // [comments]
}

Promise.all([getPosts(), getUsers(), getComments()])
   .then(
      (values) => {
         //console.log(values); // [ [post1], [user1], [comments] ]
         const [posts, users, comments] = values;
         console.log(posts, users, comments);
      }
   )
   .catch(console.error()); 
*/

/* 
Ответ:
      (100) [{}, {}...]
      (10) [{}, {}...]
      (500) [{}, {}...]
*/