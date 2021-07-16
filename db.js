const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:a369df69f7cd4aa9a8e6052759f4d4b9@localhost:5432/blue-project')

module.exports = sequelize