const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongo = require('mongodb');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('client'));

mongo.MongoClient.connect('mongodb://localhost:27017/budgeting', (err, client) => {
    if (err) {
        console.log(`Error connection to db [err=${err}]`);
        return;
    }

    app.listen(8000, function(req, res) {
        console.log('Server has started');
    });
});

