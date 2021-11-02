const express = require('express');
const app = express();
const cors = require('cors'); //npm install cors --save
var bodyParser = require('body-parser');
//const dotenv = require('dotenv');
//dotenv.config(); 
const dbService = require('./db');
const { response } = require('express');

const postComment = require('./post-comment');
const getComment = require('./read-comment');

app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log('app is running')); //this console statement is working

app.post('/insert', (req, res) => {

});

// read test
app.get('/', (req, res) => {
    res.send(getComment);
});