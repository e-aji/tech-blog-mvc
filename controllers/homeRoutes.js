
const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [{model : User, model: Comment}],
        // {model: User, attributes: ['name']},
        // {model: Comment, attributes: ['id', 'content', 'user_id', 'date_created'], include: [{model: User, attributes: ['name']}]},
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      // name: req.session.name,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
        include: [
            {model: User, attributes: ['name']}, 
            {model: Comment, attributes: ['id', 'content', 'user_id', 'date_created'], include: [{model: User, attributes: ['name']}]},
        ],
    });

    const post = postData.get({ plain: true });
    // const postUser = post.user.get({ plain: true });

    res.render('post', {
      ...post,
      // name: req.session.name,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    
    res.status(500).json(err);
  }
});

router.get('/post/:id/edit', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
      id: req.params.id, 
      user_id: req.session.user_id 
      } 
    });

    if (!postData){
      res.redirect('/profile')

      return;
    }

    const post = postData.get({ plain: true });
    // const postUser = post.user.get({ plain: true });

    res.render('edit-post', {
      ...post,
      // name: req.session.name,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
