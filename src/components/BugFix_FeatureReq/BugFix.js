import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import DescriptionBox from './DescriptionBox';

function BugFix() {
  return (
    
    <div>
      <center><h1>Bug Fixes</h1></center>
      <DescriptionBox  description="Location cannot be found" keywords={['location','lost']} points="5.0"/>
      <DescriptionBox description="Doesn't work in huewei P40 Lite E" keywords={['doesnt','work','huewei P40 Lite E']} points="4.7"/>
      <DescriptionBox description="Points doesn't add to up" keywords={['points','add']} points="3.8"/>
      <DescriptionBox description="App crashes suddenly" keywords={['App','crash']} points="3.7"/>
    </div>
  );
}

export default BugFix;