const Sequelize = require("sequelize");
// const database = require('./index');
const db = require("./db");

const Place = db.define('places', {
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING(2),
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY(Sequelize.FLOAT)
});

module.exports = Place;
