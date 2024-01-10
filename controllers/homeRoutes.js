const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();
        const posts = dbPostData.map(post => post.get({ plain: true }));
        // console.log(posts);
        // res.json(posts);
        res.render('homepage', {
            posts
        })
    } catch (error) {
        res.json(error)
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id);
        const post = dbPostData.get({ plain: true });
        const dbCommentData = await Comment.findAll({ where: { post_id: post.id } })
        const comments = dbCommentData.map(com => com.get({ plain: true }))
        // console.log(post);
        // res.json(posts);
        console.log(comments);
        res.render('postPage', {
            post, comments
        })
    } catch (error) {
        res.json(error)
    }
});

router.get('/login', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();
        const posts = dbPostData.map(post => post.get({ plain: true }));
        // console.log(posts);
        // res.json(posts);
        res.render('login', {
            posts
        })
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;