// const Sequelize = require("sequelize");
const db = require("./db");
const Hotel = require("./hotel");
const Activity = require("./activity");
const Place = require("./place");
const Restaurant = require("./restaurant");

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
    db: db,
    Activity: Activity,
    Hotel: Hotel,
    Place: Place,
    Restaurant: Restaurant
}
