import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import SearchDescripBox from "./SearchDescripBox";
import '../../App.css';
import Footer from "../NavigationBar/Footer";

function Search() {
return(<div>
    <div class="bgimg-18">
      <div class="caption">
        <span className="border">
          Is this the app you are looking for?
        </span>
      </div>
    </div>
    <div>
      <div className='descrip-11'>
      <SearchDescripBox

       keywords={["location"]}
       points="5.0"
     />
      </div>
      
      <div className='descrip-14'>
      <SearchDescripBox

       keywords={["huewei P40 Lite E"]}
       points="4.7"
     />
      </div>

      <div className='descrip-11'>
      <SearchDescripBox
       
        keywords={["points"]}
        points="3.8"
      />
      </div>
      <div className='descrip-14'>
      <SearchDescripBox
       
       description="App crashes suddenly"
       keywords={["App", "crash"]}
       points="3.7"
     />
      </div>
      
    </div>
    <Footer />
  </div>);

}
export default Search;