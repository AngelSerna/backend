const button = document.getElementById('button')
button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }

    id='60dbf39bb1ffe72593b17776'
    // const url = 'http://localhost:8080/api/users/user'
    // fetch('http://localhost:8080/api/users/user/'+id,{
    // method:'PUT',
    // body : JSON.stringify(),
    // headers : {
    // "content-type":"aplication/json"
    // }
    // })
    // .then(Response=>Response.json())
    // .then(json=>console.log(json))
    
    fetch('http://localhost:8080/api/users/user/'+id)
  .then(response => response.json())
  .then(data => console.log(data.cord));

// async function postData(url = '', data = {}) {
//     // Opciones por defecto estan marcadas con un *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });
//   id='60daa77da8be4637aafb30e6'
// fetch('http://localhost:8080/api/users/user/' + id, {
//   method: 'DELETE',
// })
// .then(res => res.text()) // or res.json()
// .then(res => console.log(res))



})