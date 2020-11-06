'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    'rafa' : 'API homepage'
  });
});

router.get('/test', (req, res) => {
  res.json({
    'rafa' : 'API/TEST '
  });
});

app.use(bodyParser.json());
app.use('/api', router);  // path must route to lambda
// app.use('/.netlify/functions/api', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
