const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll()
        res.json(postData);
    } catch (error) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;