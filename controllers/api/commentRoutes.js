const router = require('express').Router();
const { Comment } = require('../../models');
const isLoged = require('../../utils/isLoged');

router.post('/', isLoged, async (req, res) => {
    try {

        const createPost = await Comment.create({
            ...req.body,
            created_by: req.session.user_name,
            user_id: req.session.user_id
        });
        res.json(createPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;