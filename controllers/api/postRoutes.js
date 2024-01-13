const router = require('express').Router();
const { Post } = require('../../models');
const isLoged = require('../../utils/isLoged');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll()
        res.json(postData);
    } catch (error) {
        res.status(500).json(error);
    }
});
// POST method  for http://localhost:3001/api/posts (adding post to db)
router.post('/', isLoged, async (req, res) => {
    try {

        const createPost = await Post.create({
            ...req.body,
            created_by: req.session.user_name,
            user_id: req.session.user_id
        });
        res.json(createPost);
    } catch (error) {
        res.status(500).json(error);
    }
})

// PUT method  for http://localhost:3001/api/posts (update post in db choosing by its id)
router.put('/:id', isLoged, async (req, res) => {
    try {
        console.log(req.body);
        const updatedPost = await Post.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            });
        if (!updatedPost) {
            res.status(404).json({
                message: `No tag found with this id!`
            });
            return;
        };

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE method  for http://localhost:3001/api/posts (DELETE post from db choosing by its id)
router.delete('/:id', isLoged, async (req, res) => {

    try {
        const deletePost = await Post.destroy({
            where: { id: req.params.id }
        });
        if (!deletePost) {
            res.status(404).json({
                message: `No tag found with this id!`
            });
            return;
        }
        res.json(deletePost);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;