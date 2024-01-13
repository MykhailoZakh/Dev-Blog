const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentsRoute = require('./commentRoutes');

// linkage http://localhost:3001/api/ to all api routes enpoints
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentsRoute);

module.exports = router;
