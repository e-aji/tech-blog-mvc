const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: Comment}],
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single post
router.get('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
          include: [{ model: Comment }],
        });
    
        if (!postData) {
          res
            .status(404)
            .json({ message: "No post has been found with that id!" });
          return;
        }

        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

// Update a post by its `id` value
router.put("/", withAuth, async (req, res) => {
    try {
      const newData =
        {
          title: req.body.title,
          body: req.body.body,
        };

      const postData = await Post.update(newData,
        {
          where: {
            post_id: req.params.post_id, // 
          },
        });
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Create a new post
router.post('/', withAuth, async (req, res) => {
    
    const newData = {
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id
    };
    
    try {
      const newPost = await Post.create(newData);
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }

  });


// Delete a post by its `id` value
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No posy found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;