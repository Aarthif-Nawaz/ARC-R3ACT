// Authour - Aarthif Nawaz
// Purpose -  To make an asynchronous call to the databse while recieving a user input
function doSomething() {

      // callback sets the received data to a global variable
  function callBack(d) {
      window.data = d;
  }
      // start the async
  myAsynchronousCall(param1, parma2, callBack);

}

  // start the function
doSomething();

  // make sure the global is clear
window.data = null

  // start polling at an interval until the data is found at the global
var intvl = setInterval(function() {
    if (window.data) { 
        clearInterval(intvl);
        
    }
}, 1000);

async function myAsynchronousCall(client,newMany, callBack){
    
    const result = await client.db("arc").collection("MobileAppReviews").insertMany(newListings);

  console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
  console.log(result.insertedIds);
 

}
