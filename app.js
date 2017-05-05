const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const volleyball = require("volleyball");
const models = require("./models");
const path = require("path");

const app = express();

// logging
app.use(volleyball);

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routing
app.use(express.static(path.join(__dirname, "/public")));
app.use("/", routes);

// database
models.db.sync({ force: true })
    .then(function() {
        app.listen(3000, function() {
            console.log("listening on port 3000");
        });
    });
