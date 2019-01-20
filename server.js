const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongo = require('mongodb');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('client'));

mongo.MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log(`Error connection to db [err=${err}]`);
        return;
    }

    app.post('/months', (req, res) => {
        client.db('budgeting').collection('months').insertOne(req.body, (error, result) => {
            if (error) {
                res.sendStatus(500); // internal server error
                return;
            }
            res.sendStatus(204); // no content
        });
    });

    app.get('/months/:year/:month', (req, res) => {
        client.db('budgeting').collection('months').findOne({year: Number(req.params.year), month: Number(req.params.month)}, (error, result) => {
            if (error) {
                res.sendStatus(500);
                return;
            }
            res.json(result);
        });
    });

    app.post('/months/:year/:month/expenses', (req, res) => {

    });

    app.listen(process.env.PORT || 8000, function(req, res) {
        console.log('Server has started');
    });
});

