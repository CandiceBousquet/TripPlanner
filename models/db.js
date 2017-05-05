const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/TripPlanner", {
    logging: true
});

module.exports = db;
