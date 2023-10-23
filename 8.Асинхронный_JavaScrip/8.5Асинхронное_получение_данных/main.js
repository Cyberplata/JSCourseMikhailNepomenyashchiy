/* 
   I.

   fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
         console.log(response)
      })

   // Promise {<pending>}...
   // Response {type: 'basic', url: 'https://jsonplaceholder.typicode.com/posts/1', redirected: false, status: 200, ok: true, …}
*/

/* 
   II.

   fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(console.log)

   //Promise {<pending>}...
   //{userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
*/

/* 
   III.

   fetch('https://jsonplaceholder.typicode.com/pots/1')
      .then(response => response.json())
      .then(console.log)
      .catch(console.error)

   //Promise {<pending>}...
   //GET https://jsonplaceholder.typicode.com/pots/1 404 (Not Found)
   //{}
*/

   /* IV */
fetch('https://jsonplaceholder.typicode.com/pots/1')
   .then(response => {
      if (response.ok) {
         return response.json()
      }

      throw new Error('Failed to fetch');
   })
   .then(console.log)
   .catch(console.error)

   //Promise {<pending>}...
   //GET https://jsonplaceholder.typicode.com/pots/1 404 (Not Found)
   //Error: Failed to fetch