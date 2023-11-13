

// Asunc logic
async function getAllTodos() {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
   const data = response.json();
   
   return data;
}

async function getAllUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = response.json();
   
   return data;
}