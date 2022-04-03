const express = require('express');
const router = express.Router();
const cors = require('cors');
const posts = require('../model/posts');

// middlewares
router.use(express.json());
router.use(cors({ origin: 'http://localhost:3000' }));

router.get('/', (req, res) => res.send('Nada por aqui meu querido...'));

router.get('/all', (req, res) => res.json(JSON.stringify(posts.getAll())));

router.get('/:id', (req, res) => {
  let postId = req.params.id;
  
  res.json(JSON.stringify(posts.getById(postId)));
});

router.post('/new', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send("You've just added a new post!");
});

router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  let description = req.body.description;

  let result = posts.updatePost(id, title, description);

  res.send(result);
});

router.delete('/delete/:id', (req, res) => {
  let id = req.params.id;

  let result = posts.deletePost(id);

  res.send(result);
});

module.exports = router;

// README => There aren't any errors validations yet
// WHICH MEANS IF YOU SEND AN EMPTY TITLE OR DESCRIPTION, YOU'RE GONNA MAKE A MESS =)