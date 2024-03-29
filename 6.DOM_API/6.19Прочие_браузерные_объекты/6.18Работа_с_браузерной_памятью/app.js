const list = document.getElementById('todos');
document.querySelector('button').addEventListener('click', handleClick);
document.addEventListener('DOMContentLoaded', loadTodos);
//document.querySelector('button').addEventListener('click', removeLocalStorage)


function handleClick() {
   const newTodo = this.previousElementSibling.value.trim();

   if (newTodo) {
    // add todo
   createTodo(newTodo);
   saveToStorage(newTodo);
   this.previousElementSibling.value = '';
   } else {
   alert('input field is empty ');
   }
}

function saveToStorage(todo) {
   const todos = JSON.parse(localStorage.getItem('tasks')) || [];

   localStorage.setItem('tasks', JSON.stringify([...todos, todo]));

   // console.log(todos);
   // console.log(localStorage.getItem('tasks'));
   // console.log(JSON.stringify([...todos]));
   // console.log(([...todos, todo]));
}

function loadTodos() {
   const todos = JSON.parse(localStorage.getItem('tasks'));

   if (todos) {
      todos.forEach(todo => createTodo(todo))
   }
}

function createTodo(text) {
   const li = document.createElement('li');
   li.innerText = text;
   li.className = 'todo-item';
   li.addEventListener('click', removeTodo);

   list.appendChild(li);
}

function removeLocalStorage(text) {
   const todos = JSON.parse(localStorage.getItem('tasks'));

   localStorage.setItem(
      'tasks', 
      JSON.stringify(todos.filter(todo => todo !== text))
   );

   console.log('todos ', todos);
   console.log('(todos.filter(todo => todo !== text)) ', (todos.filter(todo => todo !== text)));
   console.log('JSON.stringify(todos.filter(todo => todo !== text)) ', JSON.stringify(todos.filter(todo => todo !== text)));
}

function removeTodo() {
   this.removeEventListener('click', removeTodo);
   this.remove();
   removeLocalStorage(this.innerText)
   console.log(removeLocalStorage('this ', this));
   console.log(removeLocalStorage('this.innerText ', this.innerText));
}