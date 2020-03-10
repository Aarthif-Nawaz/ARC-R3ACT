import React from 'react';
import Review from './Review';
import Container from 'react-bootstrap/Container';

function ViewAllReviews(){
    return(
        <Container>
            <Review author="Ashen Kalupahana" date="2020-03-08T12:50:43.728Z" score={5} text="Good..."/>
            <Review author="Piyumila Nava" date="2020-03-08T11:48:12.768Z" score={1} text="New update is really dissatisfied That doesn't even show restaurants nearby my hm"/>
            <Review author="Ruwan Chandra" date="2020-03-08T00:44:26.230Z" score={2} text="Please do not just bundle each and every function you have to single app. Let users to download additional packs to if they want. Otherwise introduce lite versions of each app."/>
            <Review author="Manoj Samarakoon" date="2020-03-07T12:45:38.960Z" score={4} text="The app gets stuck all the time! And it affects the riders in their day to day activities. It also doesn't help in tracking the driver. Please fix these"/>
            <Review author="Hiroshima Shamalee" date="2020-03-06T08:34:59.340Z" score={5} text="App is always hangsup. When I'm going to. Book a trip after selecting the location app is restarting. Again i tried to do the process. Result is same. Plz fix it."/>
           
        </Container>
        
    );
}
export default ViewAllReviews;
