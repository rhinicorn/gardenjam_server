const router = require("express").Router();
const { PostModel } = require("../models");
const validateJWT = require("../middleware/validate_jwt")

router.post('/createPost', validateJWT, async (req, res) => {
    let { title, content, comments } = req.body.post;
    const { username, id } = req.user
    const postEntry = {
        title,
        content,
        comments,
        postName: username,
        owner: id
    }
    try {
        const newPost = await PostModel.create(postEntry)
        res.status(200).json(newPost)
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

router.get("/all", async (req, res) => {
    try {
        const entries = await PostModel.findAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get("/mine", validateJWT, async (req, res) => {
    const userId = req.user.id;
    try {
        const userPosts = await PostModel.findAll({
            where: {
                owner: userId
            }
        });
        res.status(200).json(userPosts);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.put('/update/:id', validateJWT, async (req, res) => {
    const { title, content, comments, postName } = req.body.post
    const postId = req.params.id
    const userId = req.user.id;
    const query = {
        where: {
            id: postId,
            owner: userId
        }
    }
    const updatedPost = {
        title: title,
        content: content,
        comments: comments,
        postName: postName
    }
    try {
        const update = await PostModel.update(updatedPost, query)
        res.status(200).json(update)
    } catch (err){
        res.status(500).json({ error: err })
    }
})
router.delete("/delete/:id", validateJWT, async (req, res) => {
    const ownerId = req.user.id
    const postId = req.params.id
    try {
        const query = {
            where: {
                id: postId,
                owner: ownerId
            }
        }
        await PostModel.destroy(query)
        res.status(200).json({ message: "Post Entry Removed"})
    } catch (err) {
        res.status(500).json({ error: err})
    }
})
module.exports = router;