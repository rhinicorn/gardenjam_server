const Sequelize = require('sequelize');

const sequelize = new Sequelize(`postgres://postgres:${process.env.DB_PASSWORD}@localhost:5432/blue-project`);

module.exports = sequelize;

console.log(sequelize)