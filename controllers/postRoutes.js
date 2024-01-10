const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk({
            where: { id: req.params.id }
        });
        const post = dbPostData.map(post => post.get({ plain: true }));
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