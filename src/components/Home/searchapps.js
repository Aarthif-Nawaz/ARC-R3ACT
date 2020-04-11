import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {appNames} from '../../api/appAPI';
import Autocomplete from './AutoComplete';
import './AutoComplete.css';


import "../../App.css";

function SearchApps() {
  return (
    <div className='container-fluid'>
      <div className='container-fluid'>
       
          <div className='col'>
            <div className='container-fluid' id="header">
              <p>We analyse mobile app reviews.</p>
            </div>
            <div className='container-fluid'>
              <div className="container searchBar">
                <InputGroup className="mb-3 searchInputGroup">
                  <FormControl
                    text="Search for a mobile app"
                    aria-label="search for a mobile app"
                    className="searchPlaceholder"
                  />
                  <InputGroup.Append>
                    <Button className="button searchbtn" variant="outline-secondary">
                      SEARCH
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
               
               
                {/* <div className="input-group md-form form-sm form-2 pl-0 searchInputGroup">
                  <input className="form-control mdb-autocomplete my-0 py-1"  id="form-autocomplete" type="text" placeholder="Search for a mobile app" aria-label="Search"/>
                  <div className="input-group-append ">
                    <span className="input-group-text red lighten-3" id="basic-text1"> <FontAwesomeIcon icon={faSearch}/></span>
                  </div>
                </div> 
             */}
             {/* <Autocomplete className ='searchBar' suggestions={appNames}/> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default SearchApps;
