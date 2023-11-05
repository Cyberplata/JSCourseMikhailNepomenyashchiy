// CRUD
// Create - POST
// Read - GET
// Update - PUT, PATCH
// Delete - DELETE

// HTTP

document.getElementById('addTodo').addEventListener('click', async () => {
   const input = document.getElementById('todoText');
   const title = input.value;

   if (title) {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
         method: 'POST',
         headers: {
            'Content-'
         }
      });
   }
})

async function getAllTodos() {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
   const todos = await res.json();

   console.log(todos);
   todos.forEach(todo => todoToHTML(todo))
}

window.addEventListener('DOMContentLoaded', getAllTodos);

function todoToHTML({id, completed, title}) {
   const todoList = document.getElementById('todos');

   todoList.insertAdjacentHTML('beforeend', `
      <div class="form-check" id="todo${id}">
         <label class="form-check-label">
            <input type="checkbox" class="form-check-input" ${completed && 'checked'}>
            ${title}
         </label>
         <button type="button" class="btn-close" aria-label="Close" style="font-size: 10px"></button>
      </div>
   `);
}