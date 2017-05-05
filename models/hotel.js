const Sequelize = require("sequelize");
// const database = require('./index');
const db = require("./db");


const Hotel = db.define('hotels', {
    name: Sequelize.STRING,
    num_stars: Sequelize.FLOAT,
    amenities: Sequelize.STRING
});

module.exports = Hotel;
