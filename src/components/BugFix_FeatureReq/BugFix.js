import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import BFTrans from "./BFTrans";
import BFSolid from "./BFSolid";
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
        <BFSolid
          description="Location cannot be found"
          keywords={["location", "lost"]}
          points="5.0"
        />
        <BFTrans
          description="Doesn't work in huewei P40 Lite E"
          keywords={["doesnt", "work", "huewei P40 Lite E"]}
          points="4.7"
        />
        <BFSolid
          description="Points doesn't add to up"
          keywords={["points", "add"]}
          points="3.8"
        />
        <BFTrans
          description="App crashes suddenly"
          keywords={["App", "crash"]}
          points="3.7"
        />
      </div>
      <Footer />
    </div>
  );
}

export default BugFix;
