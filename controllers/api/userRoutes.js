const router = require('express').Router();
const { User, Post } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const postData = await User.findAll({
            include: [{ model: Post }]
        });
        res.json(postData);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// POST method  for http://localhost:3001/api/users/signup (adding user to db and creating seesion info)
router.post('/signup', async (req, res) => {
    try {
        const createUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = createUser.id;
            req.session.logged_in = true;
            req.session.user_name = createUser.name;

            res.json(createUser);
        });


    } catch (error) {
        res.status(400).json(error);
    }
})

// POST method  for http://localhost:3001/api/users/login (checking user if he is in db and creating seesion info)
router.post('/login', async (req, res) => {
    try {
        console.log(req.body)
        const userData = await User.findOne({ where: { name: req.body.username } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.user_name = userData.name;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// POST method  for http://localhost:3001/api/users/logut (romove users session info from db)
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
