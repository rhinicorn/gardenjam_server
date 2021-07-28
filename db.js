const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIRONMENT === 'production'
});

module.exports = sequelize;
<<<<<<< HEAD
=======

>>>>>>> 9276bee335742fd7d8b46e9e65ba362cde1ba30a
