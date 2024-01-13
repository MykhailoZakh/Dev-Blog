const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const isLoged = require('../utils/isLoged')


//GET method for http://localhost:3001/ (printing posts on homepage)
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts, logged_in: req.session.logged_in
        })
    } catch (error) {
        res.json(error)
    }
});

// GET method for http://localhost:3001/dashboard (checking if user is loged in to app. If yes retrive his posts )
router.get('/dashboard', isLoged, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }]
        });

        const user = userData.get({ plain: true });
        res.render('dashboard', {
            user,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET method for http://localhost:3001/dashboard (user can create new post)
router.get('/dashboard/addpost', isLoged, async (req, res) => {
    try {
        res.render('addPost', {
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET method for http://localhost:3001/dashboard/post/id (user can update or delete his post)
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
// GET method for http://localhost:3001/post/id (giving one post per page and print all comments to this post ,only user can add comment)
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

// GET method for http://localhost:3001/login (user can log in to app)
router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.json(error)
    }
});

// GET method for http://localhost:3001/login (user can sign up  to app)
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