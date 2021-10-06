const  = require(''); //db type
const dotenv = require('dotenv'); //add .env
dotenv.config();

const connection = .createConnection({ //db type
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected"); //this console statement is working
  connection.query("SELECT * FROM ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});