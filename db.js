const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:b52a7eb4a96745e2b4da3be91145af0e@localhost:5432/blue-badge');

module.exports = sequelize;