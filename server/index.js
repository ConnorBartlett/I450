//Server side index
//npm install --save mongoose

//imports .env file
require('dotenv').config();

//defining variables for dependencies
const express = require('express'); //imports express
const app = express(); //creates instance of express as 'app'
const cors = require('cors'); //npm install cors --save
const router = require('express').Router(); //creates an instance of express router
const path = require('path'); //included module to avoid concatenation when joining paths

//defining vars for associated files
const dbService = require('./db');
const api = require('./api/api');

//express
app.use(require('./middleware/headers'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '/public'))); //gives express access to entire directory via "/public" appended on directory environment var.

app.use('/api', api); //localhost:3000/api

// app.use('/getcomment', getComment); //localhost:3000/getcomment

console.log("dir name is: " +  __dirname);

app.listen(`${process.env.PORT}`, () => console.log(`Server is running on port: ${process.env.PORT}`)); //this console statement is working

//URL routes and their corrisponding actions
/* When the url alligns with the below, the associated controller is called */
//app.use('/getcomment', getComment);


module.exports = router; //required export