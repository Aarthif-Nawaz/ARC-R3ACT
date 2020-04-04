import React from 'react';
import MenuBox from './components/Menu/MenuBox';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BugFix from './components/BugFix_FeatureReq/BugFix';
import FeatureRequest from './components/BugFix_FeatureReq/FeatureRequest';
import OverallSentiment from './components/OverallSentiment/OverallSentiment';
import ViewAllReviews from './components/Review/ViewReviews';
import NavBar from './components/NavigationBar/Navbar';
import HomePage from './components/Home/HomePage';
import ErrorCrash from './components/Error/Crashed';
import LoadingBox from './components/Error/LoadingBox';

function App() {
  return (
    <Router>
      {/* <div> */}
       
         <NavBar/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path='/loading' component={LoadingBox}/>
            <Route path='/menu' component={MenuBox}/>
            <Route path="/bugfix" component={BugFix}/>
            <Route path="/featureRequest" component={FeatureRequest}/>
            <Route path="/overallSentiment" component={OverallSentiment}/>
            <Route path="/allReviews" component={ViewAllReviews}/>
            <Route path="/error" exact component={ErrorCrash}/>
            <Route path="/loading" exact component={LoadingBox}/>
        </Switch>
      {/* </div> */}
      
    </Router>
  );
}

export default App;