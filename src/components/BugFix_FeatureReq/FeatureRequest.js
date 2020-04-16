import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import DescriptionBox from './DescripBoxTrans';


function FeatureRequest() {
  return (
    
    <div>
      <center><h1>FeatureRequest</h1></center>
      <DescriptionBox  description="Edit user details" keywords={['edit','username']} points="5.0"/>
      <DescriptionBox description="Redesign UI" keywords={['design','ui']} points="4.7"/>
      <DescriptionBox description="Login with facebook,Google+ and Twitter" keywords={['login','facebook',"google","twitter"]} points="3.8"/>
      
    </div>
  );
}

export default FeatureRequest;