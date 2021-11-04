//npm command for installing mongodb driver: npm install mongodb --save
//uri saved in .env
require('dotenv').config();

const { MongoClient } = require('mongodb'); 
const router = require('express').Router();
const uri = `${process.env.DATABASE_URI}`; //hidden in .env file
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("mongoDB is connected");
  // perform actions on the collection object
  client.close();
});

module.exports = router; //required export
