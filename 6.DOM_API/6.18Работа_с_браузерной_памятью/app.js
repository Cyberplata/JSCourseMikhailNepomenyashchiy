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

   localStorage.setItem('tasks', JSON.stringify([...todos, todo]))
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
   li.addEventListener('click', removeLocalStorage)

   list.appendChild(li);
}

function removeLocalStorage() {
   localStorage.clear()
}

function removeTodo() {
   this.removeEventListener('click', removeTodo);
   this.remove();
   removeLocalStorage();
   this.removeEventListener('click', removeLocalStorage)
}