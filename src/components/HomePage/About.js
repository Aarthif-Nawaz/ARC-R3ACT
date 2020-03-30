import React from "react";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <Container fluid>
      <div class="bgimg-1">
     
        <div class="caption">
          <span class="border">Application Review Classifier</span>
        </div>
      </div>

      
      <div className="descrip-1">
     
        <h3 style={{textAlign:'center'}}>How to use ARC?</h3>
        <p>
          Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed
          posuere mollis ullamcorper libero ante lectus, blandit pellentesque a,
          magna turpis est sapien duis blandit dignissim. Viverra interdum mi
          magna mi, morbi sociis. Condimentum dui ipsum consequat morbi,
          curabitur aliquam pede, nullam vitae eu placerat eget et vehicula.
          Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at,
          sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque
          risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend,
          aenean maecenas vulputate, non id vehicula lorem mattis, ratione
          interdum sociis ornare. Suscipit proin magna cras vel, non sit platea
          sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.
        </p>
      </div>

      <div class="bgimg-2">
     
        <div class="caption">
          <span
            class="border"
            style={{backgroundColor:'transparent',fontSize:'2vw',color:'#f7f7f7'}}
          >
            App review analysis in minutes, not days…
          </span>
        </div>
      </div>

     
      <div style={{position:'relative'}}>
     
        <div className="descrip-2">
          <p>
            See what app store reviews are about without lifting a finger. Make
            better, faster decisions about your product roadmap, based on the
            feedback and sentiment of real users.
          </p>
        </div>
      </div>

      <div class="bgimg-3">
      
        <div class="caption">
        
          <span
            class="border"
            style={{backgroundColor:'transparent',fontSize:'2vw',color:'#f7f7f7'}}
          >
            …without losing sight of the big picture!
          </span>
        </div>
      </div>

    
      <div style={{position:'relative'}}>
      
        <div className="descrip-3" >
          <p>
            ARC provides fully automated, easy-to-understand sentiment analysis
            for mobile app reviews. Measure trends in user sentiment, review
            volume and star rating over time so you can see what users think of
            changes you make to your apps.
          </p>
        </div>
      </div>

      <div class="bgimg-1">
   
        <div class="caption">
          <span class="border">Unlock your data with ARC!</span>
        </div>
      </div>
    </Container>
  );
}
export default About;
