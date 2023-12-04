
// Globals
const todoList = document.getElementById('todo-list');
const userSelect = document.getElementById('user-todo');
const form = document.querySelector('form');
let todos = [];
let users = [];

// Attach Events
document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);

// Basic Logic
function getUserName(userId) {
   const user = users.find(u => u.id === userId);
   return user.name;
}

function printTodo({id, userId, title, completed}) {
   const li = document.createElement('li');
   li.className = 'todo-item';
   li.dataset.id = id;
   li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b></span>`;

   const status = document.createElement('input');
   status.type = 'checkbox';
   status.checked = completed;
   status.addEventListener('change', handleTodoChange);

   const close = document.createElement('span');
   close.innerHTML = '&times;';
   close.className = 'close';

   li.prepend(status);
   li.append(close);


   todoList.prepend(li);
}

function createUserOption(user) {
   /* console.log(user); */
   const option = document.createElement('option');
   option.value = user.id;
   option.innerText = user.name;


   userSelect.append(option);
}



// Event Logic
function initApp() {
   Promise.all([getAllTodos(), getAllUsers()]).then(values => {
      [todos, users] = values;
      console.log(todos, users); // Array(200), Array(10)
      
      // Отправить в разметку
      todos.forEach((todo) => printTodo(todo));
      users.forEach((user) => createUserOption(user))
   })
}

function handleSubmit(event) {
   event.preventDefault(); // не даёт <form> отправится синхронно

   console.log(form.todo.value); // JS
   console.log(form.user.value); // 4

   createTodo({
      "userId": Number(form.user.value),
      "title": form.todo.value,
      "completed": false,
   });
}

function handleTodoChange() {
   const todoId = this.parentElement.dataset.id;
   const completed = this.checked;

   toggleTodoComplete(todoId, completed);
}

// Async logic
async function getAllTodos() {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
   const data = await response.json();
   
   return data;
}

async function getAllUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
   const data = await response.json();
   
   return data;
}

async function createTodo(todo) {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
         'Content-Type': 'application/json',
      },
   });

   const newTodo = await response.json();
   console.log(newTodo); // без headers -> {id: 201} // с headers ответ -> {userId: '3', title: 'Learn JS', completed: false, id: 201}

   /* printTodo({ id: todoId , ...todo}); */
   printTodo(newTodo);
}

async function toggleTodoComplete(todoId, completed) {
   const response = await fetch(
       `https://jsonplaceholder.typicode.com/todos/${todoId}`, {
          method: 'PATCH',
          body: JSON.stringify({completed}),
          headers: {
             'Content-Type': 'application/json',
          },
      }
   );

   const data = await response.json();
   console.log(data)

   if (!response.ok) {
      // Error
   }
}