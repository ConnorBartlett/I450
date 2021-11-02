const { MongoClient, CURSOR_FLAGS } = require("mongodb");
                                              
//atlas connection string, hide in .env before production build
const url = "mongodb+srv://testuser:testpassword@captcha-comments.m9fie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 

const client = new MongoClient(url);
 
 const dbName = "captcha-comments"; //database name

 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         const col = db.collection("comment");

         // Print to the console
         const myDoc = await col.findOne(); //finds single instance
         console.log("1st Comment: " + myDoc.commentBody); //dot notation for selection

        } catch (err) {
         console.log(err.stack);
     }
     finally {
        await client.close();
    }
}
run().catch(console.dir);