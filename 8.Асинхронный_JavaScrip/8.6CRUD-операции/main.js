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


   // CRUD - create, read, update, delete
   // HTTP - POST, GET, PUT | PATCH, DELETE