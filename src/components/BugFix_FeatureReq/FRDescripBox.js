import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";

function FRDescripBox(props){
    const keywords = props.keywords;
    let history = useHistory();
    function handleClick(){
        history.push("/allReviews")
    }
    return(
        
        <div className='container-fluid'>
            <div className="center-content">
            
            <div className='row m-1'>
                <div className='col'><p>Keywords</p></div>
                <div className='col'>
                    {keywords.map((key)=>
                         <div variant='secondary' className='m-2 frKeywordBtn'>{key}</div>
                )}   
                </div>
            </div>  
            <div className='row m-1'>
                <div className='col'><p>Feature sentiment</p></div>
                <div className='col'>{props.points}</div>
            </div>           
            </div>
           
            <div className='container text-right'>
                <Button variant='secondary' className='mx-2 descrip-button' onClick={handleClick}>View Reviews</Button>
            </div>
                
        </div>
    );
}
export default FRDescripBox;