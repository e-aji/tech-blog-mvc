const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new comment

router.post('/', withAuth, async (req, res) => {
    
    const newData = {
      body: req.body.body,
      post_id: req.session.post_id
    };
    
    try {
      const newComment = await Post.create(newData);
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }

  });

module.exports = router