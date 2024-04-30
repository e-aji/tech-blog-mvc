const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');


const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });
  
//     const users = await User.bulkCreate(userData, {
//       individualHooks: true,
//       returning: true,
//     });
  
//     const posts = [];

//     for (const post of postData) {
//       const newPost = await Post.bulkcreate(postData, {
//         ...post,
//         user_id: users[Math.floor(Math.random() * users.length)].id,
//       });
//       posts.push(newPost);
//     }

//     for (const comment of commentData) {
//       const newComment = await Comment.bulqcreate(commentData, {
//         ...comment,
//         post_id: posts[Math.floor(Math.random() * posts.length)].id,
//         user_id: users[Math.floor(Math.random() * users.length)].id,
//       });
//       comments.push(newComment);
//     }
  
//     process.exit(0);

//   };

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  } catch (err) {
    console.log(err);
  };

  try {
    await Post.bulkCreate(postData);
  } catch (err) {
    console.log(err);
  };

  try {
    await Comment.bulkCreate(commentData);
  } catch (err) {
    console.log(err);
  };

  process.exit(0);
}


seedDatabase();