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
router.put("/:id", withAuth, async (req, res) => {
  try {
      const updatePost = await Post.update(
          {
              title: req.body.title,
              body: req.body.body,
              user_id: req.session.user_id,
          },
          {
              where: {
                  id: req.params.id,
              },
          }
      );
      res.status(200).json(updatePost); 
  } catch (err) {
      res.status(400).json(err);
  }
});

// Create a new post
router.post('/', withAuth, async (req, res) => {
   try { 
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id
    });

      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }

  });


// Delete a post by its `id` value
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const deletePost = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!deletePost) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(deletePost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;