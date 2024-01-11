const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const isLoged = require('../utils/isLoged')


router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();
        const posts = dbPostData.map(post => post.get({ plain: true }));
        // console.log(posts);
        // res.json(posts);
        res.render('homepage', {
            posts, logged_in: req.session.logged_in
        })
    } catch (error) {
        res.json(error)
    }
});

router.get('/dashboard', isLoged, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }]
        });

        const user = userData.get({ plain: true });
        // console.log(user);
        res.render('dashboard', {
            user,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/dashboard/addpost', isLoged, async (req, res) => {
    try {
        res.render('addPost', {
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/dashboard/post/:id', isLoged, async (req, res) => {
    try {

        const dbPostData = await Post.findByPk(req.params.id);
        const post = dbPostData.get({ plain: true });
        res.render('updatePost', {
            post, logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id);
        const post = dbPostData.get({ plain: true });
        const dbCommentData = await Comment.findAll({ where: { post_id: post.id } })
        const comments = dbCommentData.map(com => com.get({ plain: true }))
        // console.log(post);
        // res.json(posts);
        // console.log(comments);
        res.render('postPage', {
            post, comments, logged_in: req.session.logged_in
        })
    } catch (error) {
        res.json(error)
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.json(error)
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup', {
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;