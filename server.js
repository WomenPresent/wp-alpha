'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
// const config = require('./config');
const db = require('./db');

const app = express();
const router = express.Router();

//var Airtable = require('airtable');
//var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
//    .base(process.env.AIRTABLE_BASE);

// Automatically parse request body as JSON
router.use(bodyParser.json());

//set up pug as the template engine
app.set('view engine', 'pug')

// airtable data
db.listSpeakers(db.base, 3);

// set up url handlers
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    console.log({
	name: req.body.name,
	message: req.body.message
    });
    res.render('index', { title: 'thank you', name: req.body.name, message: req.body.message })
});

// speaker handlers
app.get('/speakers', (req, res) => {
    res.format(

});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

 
