const routes_v1 = require("./src/routes/routes_v1");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4401;
const dbConfig = require('./src/conf/dbConnection');
const logger = require('./src/middleware/logger');
const mysql = require("mysql");

global.export = con = mysql.createConnection(dbConfig.LOCAL);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '50mb', extended: true }));
app.use(logger.logValidate);

app.use("/static", express.static("static"));

app.use("/api/v1", routes_v1);

// Connecting to the database


// Start the web server
app.listen(port);
console.log("App Running on port " + port);