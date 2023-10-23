   // CRUD - create, read, update, delete
   // HTTP - POST, GET, PUT | PATCH, DELETE


  /*  I. */

fetch('https://jsonplaceholder.typicode.com/pots/1')
   .then(response => {
      if (response.ok) {
         return response.json()
      }

      throw new Error('Failed to fetch');
   })
   .then(console.log)
   .catch(console.error)


   /* II. */

fetch('https://jsonplaceholder.typicode.com/posts/1', {
   method: 'DELETE'
})
   .then(response => {
      if (response.ok) {
         return response.json()
      }

      throw new Error('Failed to fetch');
   })
   .then(console.log)
   .catch(console.error)

// Promise {<pending>}
// {}


   /* III. */

fetch('https://jsonplaceholder.typicode.com/posts/1', {
   method: 'PUT',
   body: JSON.stringify({id: 1, title: 'My title'}),
})
.then(response => {
   if (response.ok) {
      return response.json()
   }

   throw new Error('Failed to fetch');
})
.then(console.log)
.catch(console.error)

// Promise {<pending>}
// {id: 1}


   /* IV. */

fetch('https://jsonplaceholder.typicode.com/posts/1', {
   method: 'PATCH',
   body: JSON.stringify({id: 1, title: 'My title'}),
})
.then(response => {
   if (response.ok) {
      return response.json()
   }

   throw new Error('Failed to fetch');
})
.then(console.log)
.catch(console.error)

// Promise {<pending>}
// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}


   /* V. */

fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: JSON.stringify({id: 201, title: 'My title', body: 'text', userId: 1}),
})
   .then(response => {
      if (response.ok) {
         return response.json()
      }

      throw new Error('Failed to fetch');
   })
   .then(console.log)
   .catch(console.error)

// Promise {<pending>}
// {id: 101}


   /* VI. */

fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: JSON.stringify({id: 201, title: 'My title', body: 'text', userId: 1}),
   headers: {
      'Content-Type': 'application/json',
   },
})
   .then(response => {
      if (response.ok) {
         return response.json()
      }

      throw new Error('Failed to fetch');
   })
   .then(console.log)
   .catch(console.error)


// Promise {<pending>}
// {id: 101, title: 'My title', body: 'text', userId: 1}

