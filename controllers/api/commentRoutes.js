const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// // Get all comments
// router.get('/', withAuth,async (req, res) => {
//   try {
//     const commentData = await Comment.findAll({
//       include: [
//         { model: User, attributes: ['name'] },
//         { model: Post, attributes: ['id', 'title', 'body'] }
//       ]
//     });
//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Create a new comment

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      post_id: req.session.post_id,
      user_id: req.session.user_id
    });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }

  });

module.exports = router