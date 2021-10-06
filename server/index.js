const express = require('express');
const app = express();
const cors = require('cors');
// const sequelize = require('./db')
// var bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config(); 
const dbService = require('./db');
const { response } = require('express');

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => console.log('app is running')); //this console statement is working

app.post('/insert', (req, res) => {

});

// read test
app.get('/home', (req, res) => {
    connection.query("SELECT * FROM ")
    (console.log("this works"));
});