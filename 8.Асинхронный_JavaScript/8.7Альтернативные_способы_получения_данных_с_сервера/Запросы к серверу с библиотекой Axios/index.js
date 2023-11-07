// import axios from axios;
const axios = require('axios').default;
// console.log(axios.isCancel('something'));


// IV. //
// Перепишем через config to axios пример ниже => error.toJSON()
axios({
   url: 'https://fortniteapi.io/v3/challenges',
   params: {
      lang: 'ru',
   },
   headers: {
      'Content-Type': 'application/json',
   },
})
   .then((response) => {
      console.log(response.data);
   })
   .catch((error) => {
      console.error(error.toJSON());
   });


// I. //
/* axios
   .get('https://fortniteapi.io/v3/challenges', {
      params: {
         lang: 'ru',
         season: 'current',
      },
      headers: {
         'Content-Type': 'application/json',
         Autorization: '932d1dd1-ddfeabd9-2a0a7069-261a01e4',
      },
   })
   .then((response) => {
      console.log(response.data);
   })
   .catch((error) => {
      console.error(error);
   })*/

// II. //
// Псевдонимы методов запроса axios.post(url[, data[, config]])

/* axios
   .post('https://jsonplaceholder.typicode.com/posts', {
      userId: 1,
      title: 'My title',
      body: 'My body',
   })
   .then((response) => {
      console.log(response.data);
   })
   .catch((error) => {
      console.error(error);
   }) */

// III. //
// Похожая запись, но делает одно и тоже через прописывания config to axios
/* axios({
   method: 'POST',
   url: 'https://jsonplaceholder.typicode.com/posts',
   data: {
      userId: 1, 
      title: 'My title',
      body: 'My body',
   },
})
   .then((response) => {
      console.log(response.data);
   })
   .catch((error) => {
      console.error(error);
   }) */