const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// Parsing requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Parsing  requests as content-type = application/json
app.use(bodyParser.json())

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
    res.json({"message": "Welcome to this new API"});
});

// Application port that will be listen
const PORT = process.env.PORT ? process.env.PORT : 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
