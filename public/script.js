const URL = 'http://192.168.2.106:3000/api';

function handleListeners() {
  document.getElementById('saveBtn').addEventListener('click', () => {
    newPost();
  });
}

// GET ALL
async function updatePosts() {
  const res = await fetch(`${URL}/all`);
  const data = await res.json();

  let postsElements = ''; 
  let posts = JSON.parse(data);

  posts.forEach(post => {
    let postElement = `<div id="posts">
                        <div id=${post.id} class="card">
                          <div class="card-header">
                            <h3>${post.title}</h3>
                          </div>
                          <div class="card-body">
                            <p>${post.description}</p>
                          </div>
                        </div>
                      </div>`;

    postsElements += postElement;
  });
  
  document.getElementById('posts').innerHTML = postsElements;
}

// POST
async function newPost() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('desc').value;
  let post = { title, description };
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(post)
  }

  await fetch(`${URL}/new`, options);
  updatePosts();
  document.getElementById('title').value = '';
  document.getElementById('desc').value = '';
}

function init() {
  handleListeners();
  updatePosts();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});