const express = require("express");
const router = express.Router();
var models = require("../models");
var Place = models.Place;
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

router.get("/", function(req, res, next) {
    const allHotels = Hotel.findAll();
    const allRestaurants = Restaurant.findAll();
    const allActivities = Activity.findAll();
    Promise.all([allHotels, allRestaurants, allActivities])
        .then(function(resultArr) {
            let i = { hotels: resultArr[0], restaurants: resultArr[1], activities: resultArr[2] };
            console.log(resultArr);
            res.render("index", i);
        })
        .catch(next);
});

router.get("/contact", function(req, res, next) {
    res.render("contact", {});
})






module.exports = router;