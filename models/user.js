const { DataTypes } = require("sequelize")
const db = require("../db")

const User = db.define("user", {
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allosNull: false,
    },
})

module.exports = User