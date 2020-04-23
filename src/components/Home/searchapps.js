import React,{useState} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { appNamesJson } from '../../api/appApiJson';
import { Component } from 'react';
import Autocomplete from 'react-autocomplete';
    
import "../../App.css";
import { Link } from "react-router-dom";
import Search from '../Search/Search';

// class SearchAppsClass extends Component {

  
  function SearchAppsClass() {

    const[appName,setSearch] = useState("");

    return (
      <div className='container-fluid'>
        <div className='container-fluid'>
          <div className='col'>
            <div className='container-fluid' id="header">
              <p>We analyse mobile app reviews.</p>
            </div>
            <div className='container-fluid'>
           
              <div className="container searchBar">
               
                  <div class="input-group mb-3 searchInputGroup">
                    <input 
                       type="text"
                        className="form-control searchPlaceholder" 
                        placeholder="Search for a mobile app" 
                        aria-label="search for a mobile app" 
                        aria-describedby ="basic-addon2"
                        value={appName}
                        onChange={e=> setSearch(e.target.value)}
                      />
                    <div class="input-group-append">
                     <Link to={{pathname:'/search/'+appName}}> <button class="button searchbtn" type="submit" variant="outline-secondary">SEARCH</button></Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

// function appData() {
//   return appNamesJson;
// }

// function renderAppName(state, val) {
//   return (
//     state.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
//   );
// }
export default SearchAppsClass;
