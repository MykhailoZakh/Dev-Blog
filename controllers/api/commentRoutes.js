const router = require('express').Router();
const { Comment } = require('../../models');
const isLoged = require('../../utils/isLoged');

// POST method  for http://localhost:3001/api/comments (adding comment to db)
router.post('/', isLoged, async (req, res) => {
    try {
        console.log(`here`);
        const createPost = await Comment.create({
            ...req.body,
            created_by: req.session.user_name
        });
        res.json(createPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET method  for http://localhost:3001/api/comments (printing all comments)
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll()
        res.json(postData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;