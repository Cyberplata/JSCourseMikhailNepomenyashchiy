fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then(response => {
      if (response.ok) {
         return response.json()
      }

      throw new Error('Failed to fetch');
   })
   .then(console.log)
   .catch(console.error)