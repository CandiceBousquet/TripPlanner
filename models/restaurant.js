const Sequelize = require("sequelize");
// const database = require('./index');
const db = require("./db");

const Restaurant = db.define('restaurants', {
    name: Sequelize.STRING,
    cuisine: Sequelize.STRING,
    price: Sequelize.INTEGER
});

module.exports = Restaurant;
