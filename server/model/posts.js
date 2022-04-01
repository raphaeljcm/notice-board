let posts = [
  {
    id: 'daskjdkash',
    title: 'Testing board',
    description: 'Testing description'
  },
];

function getAll() {
  return posts;
}

function getById(postId) {
  const post = posts.find(post => post.id === postId);

  if(!post) {
    return 'Post not found';
  }

  return post;
}

function newPost(title, description) {
  posts.push({ id: generateRandomId(), title, description });
}

function updatePost(id, title, description) {
  const post = posts.find(post => post.id === id);

  if(!post) {
    return 'Post not found';
  }

  const updatedPost = {
    ...post,
    title,
    description 
  }

  posts = posts.map(post => {
    if(post.id === id) {
      post = updatedPost;
    }

    return post;
  });

  return "You've just updated a post";
}

function deletePost(postId) {
  const post = posts.find(post => post.id === postId); 

  if(!post) {
    return 'Post not found';
  }

  posts = posts.filter(post => post.id !== postId);

  return 'Post deleted';
}

function generateRandomId() {
  // workaround to generate an id

  return Math.random().toString(36).substring(2, 9);
}

module.exports = {
  posts,
  getAll,
  getById,
  newPost,
  updatePost,
  deletePost
}