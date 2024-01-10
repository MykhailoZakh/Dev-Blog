const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk({
            where: { id: req.params.id }
        });
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(post);
        // res.json(posts);
        res.render('homepage', {
            posts
        })
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;