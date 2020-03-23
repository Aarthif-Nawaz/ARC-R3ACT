const MongoClient = require('mongodb').MongoClient;

const express = require("express");
const router = express.Router();


// GET
router.get("/bugfix", async (req, res) => {
    getBugFix();
    // const uri = "mongodb+srv://User:<password>@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // await client.connect(err => {
    //     const collection = client.db("Safiyyah_ARC").collection("Reviews");
    //     var query = { cluster: "Bug_fix" };
    //     collection.find(query).toArray(function (err, result) {
    //         if (err) throw err;
    //         console.log(result.length);
    //     });
    //     client.close();
    // });
});

// async function getBugFix() {
//     await client.connect(err => {
//         const collection = client.db("Safiyyah_ARC").collection("Reviews");
//         var query = { cluster: "Bug_fix" };
//         collection.find(query).toArray(function (err, result) {
//             if (err) throw err;
//             console.log(result.length);
//         });
//         client.close();
//     }
// }

module.exports = router;