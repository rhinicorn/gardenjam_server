const router = require("express").Router();
const { Post } = require("../models");
// const { UniqueConstraintError } = require("sequelize/lib/errors");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const validateJWT = require("../middleware/validate_jwt")

router.post('/createPost', validateJWT, async (req, res) => {
    let { title, content, comments, postName } = req.body.user;
    // const { username } = req.user
    const postEntry = {
        title,
        content,
        comments,
        postName
    }
    try {
        const newPost = await Post.create(postEntry)
        res.status(200).json(newPost)
    } catch (err) {
        res.status(500).json({ error: err })
    }
    Post.create(postEntry)
});

router.put('/update/:entryId', validateJWT, async (req, res) => {
    const { title, content, comments, postname } = req.body.post
    const postId = req.params.entryId
    const userId = req.user.id;

    const query = {
        where: {
            id: postId,
            owner: userId
        }
    }

    const updatePost = {
        title: title,
        content: content,
        comments: comments,
        postname: postname
    }

    try {
        const update = await Post.update(updatedPost, query)
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

        await Post.destroy(query)
        res.status(200).json({ message: "Post Entry Removed"})
    } catch (err) {
        res.status(500).json({ error: err})
    }
})

module.exports = router;