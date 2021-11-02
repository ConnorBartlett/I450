const { MongoClient } = require("mongodb");
                                              
//atlas connection string, hide in .env before production build
const url = "mongodb+srv://testuser:testpassword@captcha-comments.m9fie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 

const client = new MongoClient(url);
 
 const dbName = "captcha-comments"; //database name
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "comment"
         const col = db.collection("comment");
         // Construct a document for comment                                                                                                                                                              
         let commentDocument = {
             "userName": "temp",
             "date" : new Date(Date.now()), //saves date / time in UTC
             "commentBody":"comment will be saved here as string",
         }
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(commentDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);