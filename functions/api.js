const express = require("express");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const serverless = require("serverless-http");

const app = express();

// Parsing requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parsing  requests as content-type = application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
  res.json({
    "message": "Welcome to this new API"
  });
});


module.exports.handler = serverless(app);
