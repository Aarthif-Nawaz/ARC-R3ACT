import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import BFDescripBox from "./BFDescripBox";
import '../../App.css';
import Footer from "../NavigationBar/Footer";

function BugFix() {
  return (
    <div>
      <div class="bgimg-14">
        <div class="caption">
          <span className="border">
            Bug fixes requested by the users of this app
          </span>
        </div>
      </div>
      <div>
        <div className='descrip-11'>
        <BFDescripBox
         
         description="Location cannot be found"
         keywords={["location", "lost"]}
         points="5.0"
       />
        </div>
        
        <div className='descrip-10'>
        <BFDescripBox
         
         description="Doesn't work in huewei P40 Lite E"
         keywords={["doesnt", "work", "huewei P40 Lite E"]}
         points="4.7"
       />
        </div>

        <div className='descrip-11'>
        <BFDescripBox
         
          description="Points doesn't add to up"
          keywords={["points", "add"]}
          points="3.8"
        />
        </div>
        <div className='descrip-10'>
        <BFDescripBox
         
         description="App crashes suddenly"
         keywords={["App", "crash"]}
         points="3.7"
       />
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default BugFix;