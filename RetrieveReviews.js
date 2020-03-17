// Authour - Aarthif Nawaz 
// Purpose - To retrive reviews of a particular app that is searched and store it into the database
// Dependecies Needed 
const http = require('http')
const gplay = require('google-play-scraper');
const MongoClient = require('mongodb').MongoClient;
const hostname = '127.0.0.1'
const port = 3000


// The URl Needed for the Connection
const uri = "mongodb+srv://User:1234@r3act-rludw.mongodb.net/test?retryWrites=true&w=majority";
 
// Connecting the Client to MongoDB Server
const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true});

// Declaring of the Variables
var userNames = [];
var dates = [];
var reviews = [];
var versions = [];
var resultArr = [];
function getReviews(){
  gplay.search({
    term: 'Ola', // This is the place where a post request should be made from the client side (React) and that string that is got from there should be placed here and then the relevent details will be saved onto the database
    num: 1 // Only the releveant seacrh term should be searched for
  }).then(e =>{
    gplay.reviews({
      appId: e[0].appId, // Get the App Id of the Searched term
      lang : 'en', // Language should only be in english
      num : 10000 // Get Reviews up to 10,000
    }).then(text => {
      for(var idx in text) {
        var item = text[idx];
        for(var key in item) {
          if(key=='text'){
            var value = item[key];
            reviews.push(value)
          }
          else if(key=='userName'){
            var user = item[key];
            userNames.push(user)
          }
          else if(key=='date'){
            var datesTobeAdded = item[key]
            dates.push(datesTobeAdded)
          }
          else if(key=='version'){
            var versionNo = item[key]
            versions.push(versionNo);
          }  
        }
      }
      // Push all the relevent details needed by a review into the array
      for(var k=0;k<userNames.length;k++){
        var review = {
          appName : 'OLA Cabs',
          userName: userNames[k],
          date: dates[k],
          text: reviews[k],
          version : versions[k]
        };
        resultArr.push(review);
      }
      //console.log(resultArr)
    })
  }).catch(e => {
    console.log("No Such App was found !")
  });
}

getReviews() // Run the function in order to get the array of reviews
// Function to run the mongodb server
async function main(){
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        let dates = new Date()
        console.log(new Date())
        //await deleteListingsScrapedBeforeDate(client,new Date())
  
        await createMultipleListings(client,resultArr)
        //setTimeout(createMultipleListings, 1500, client,resultArr);
        
  } catch (e) {
    console.error(e);
  } finally {
    //await createMultipleListings(client,resultArr)
    await client.close();
  }
}
// Timeout function to wait till the array is filled with values and not empty
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function deleteListingsScrapedBeforeDate(client,date) {
  result = await client.db("arc").collection("MobileApplicationReviews")
      .deleteMany({ "last_scraped": { $lt: date} });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}


// Posting the reviews extracted to the database
async function createMultipleListings(client, newListings){
  await timeout(100000); //Since the reviews need to go into the array/ memory and then to the database it takes approximately 1.6 mins 
  //console.log("Timeout finished")
  const result = await client.db("arc").collection("MobileAppReviews").insertMany(newListings); // Post all the reviews to the Database

  //console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
  //console.log(result.insertedIds);
 

}


main().catch(console.error);



// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })
