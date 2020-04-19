import React from 'react';
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

class SearchAppsClass extends Component {

  state = { val: '' };
  render() {
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
                {/* <Autocomplete
                  className="searchPlaceholder"
                  value={this.state.val}
                  items={appData()}
                  getItemValue={item => item.name}
                  shouldItemRender={renderAppName}
                  renderMenu={item => (
                    <div className="dropdown">
                      {item}
                    </div>
                  )}
                  renderItem={(item, isHighlighted) =>
                    <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                      {item.name}
                    </div>
                  }
                  onChange={(event, val) => this.setState({ val })}
                  onSelect={val => this.setState({ val })}
                /> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function appData() {
  return appNamesJson;
}

function renderAppName(state, val) {
  return (
    state.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
  );
}
export default SearchAppsClass;
