const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/', projectRoutes);

module.exports = router;
