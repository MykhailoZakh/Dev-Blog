const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts);
        // res.json(posts);
        res.render('homepage', {
            posts
        })
    } catch (error) {
        res.json(error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id);
        const post = dbPostData.get({ plain: true });
        console.log(post);
        // res.json(posts);
        res.render('postPage', {
            post
        })
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;