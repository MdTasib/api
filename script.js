// load api (1)
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(data => displayUsers(data));

// function displayUsers(users) {
//     const usersName = users.map(users => users.username);
//     const ul = document.getElementById('users-container');
//     for (let i = 0; i < usersName.length; i++) {
//         const userName = usersName[i];
//         const li = document.createElement('li');
//         li.innerText = userName;
//         ul.appendChild(li)
//     }
// }


// post (2)
// document.getElementById('btn').addEventListener('click', function () {
//     const text = document.getElementById('text').value;
//     const content = document.getElementById('content').value;
//     const postInfo = { text: text, content: content }
//     nowPostToServar(postInfo);
// })

// function nowPostToServar(post) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then(data => console.log(data));
// }
