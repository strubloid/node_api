'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Parsing requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parsing  requests as content-type = application/json
app.use(bodyParser.json());

// Mongoose Connection
const databaseUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL : 'mongodb://localhost/api'
mongoose.connect(databaseUrl, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Starting the Database Connection
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', error => console.log('connected to mongoose database'));

// define a simple route
app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to this new API"
    });
});

// app.use(bodyParser);
app.post('/test', (req, res) => {
    res.json({
        'test' : true
    });
});

module.exports.handler = serverless(app);


