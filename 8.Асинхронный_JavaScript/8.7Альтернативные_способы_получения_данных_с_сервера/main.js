const url = 'https://jsonplaceholder.typicode.com/posts/1';
const request = new XMLHttpRequest();
request.open('GET', url)
request.responseType = 'json'; // xml, text

request.send();

request.onload = function() {
   const data = request.response;
   console.log(data);
}

/* 
{
   userId: 1, 
   id: 1, 
   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
   body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'
} 
*/