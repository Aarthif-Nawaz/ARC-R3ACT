import React from 'react';
import MenuBox from './components/MenuBox';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BugFix from './components/BugFix';
import FeatureRequest from './components/FeatureRequest';
import OverallSentiment from './components/OverallSentiment';
import ViewAllReviews from './components/ViewReviews';
import NavBar from './components/Navbar';
import SearchApps from './components/searchapps';
import LoadingBox from './components/LoadingBox';


function App() {
  return (
    <Router>
      <div>
       
          <NavBar/>
          <Switch>
            <Route path="/" exact component={SearchApps}/>
            <Route path='/loading' component={LoadingBox}/>
            <Route path='/menu' component={MenuBox}/>
            <Route path="/bugfix" component={BugFix}/>
            <Route path="/featureRequest" component={FeatureRequest}/>
            <Route path="/overallSentiment" component={OverallSentiment}/>
            <Route path="/allReviews" component={ViewAllReviews}/>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
