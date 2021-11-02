//npm command for installing mongodb driver: npm install mongodb --save

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://testuser:testpassword@captcha-comments.m9fie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("mongoDB is connected");
  // perform actions on the collection object
  client.close();
});

