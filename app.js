const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const volleyball = require("volleyball");
const models = require("./models");
const path = require("path");
const nunjucks = require("nunjucks");

const app = express();

// nunjucks setup
nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
app.set('view cache', false);

// logging
app.use(volleyball);

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routing
app.use(express.static(path.join(__dirname, "/public")));
app.use("/bootstrap", express.static(path.join(__dirname, "/node_modules/bootstrap/dist")));
app.use("/jquery", express.static(path.join(__dirname, "/node_modules/jquery/dist")));
app.use("/", routes);

// error handling
app.use(function(req, res, next) {
    var err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.render("404", { err: err });
});

// database
models.db.sync({ force: false })
    .then(function() {
        app.listen(3000, function() {
            console.log("listening on port 3000");
        });
    });
