import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function BFDescripBox(props){
    const keywords = props.keywords;
    let history = useHistory();
    function handleClick(){
        history.push("/allReviews")
    }
    return(
        
        <div className='container-fluid'>
            <div className="center-content">
                <div className='row m-1 '>

                <div className="col"><p>Description</p></div>
                <div className="col">{props.description}</div>
                
                    
                </div>
                <div className='row m-1'>
                    <div className='col'><p>Keywords</p></div>
                    <div className='col'>
                        {keywords.map((key)=>
                            <Button variant='secondary' className='m-2 bugDescripBtn'>{key}</Button>
                    )}   
                    </div>
                </div>  
                <div className='row m-1'>
                    <div className='col'><p>Bug sentiment</p></div>
                    <div className='col'>{props.points}</div>
                </div> 
                </div>            
                <div className='container text-right'>
                    <Button variant='secondary' className='mx-2 bugDescripBtn' onClick={handleClick}>View Reviews</Button>
                </div>
            
        </div>
    );
}
export default BFDescripBox;