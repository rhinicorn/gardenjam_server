const { DataTypes } = require("sequelize")
const db = require("../db")

const Post = db.define("post", {
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allosNull: false,
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postName: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = Post