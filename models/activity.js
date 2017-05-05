const Sequelize = require("sequelize");
// const database = require('./index');

const db = require("./db");

const Activity = db.define('activities', {
    name: Sequelize.STRING,
    age_range: Sequelize.STRING
});

module.exports = Activity;
