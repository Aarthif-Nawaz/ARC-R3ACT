import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from "react-router-dom";


function DescripBox(props){
    const keywords = props.keywords;
    let location = useLocation();
    const currentURL = location.pathname;
 
    const para = props.type;
    let url = "";
    
    if(para === "fr"){
         url = 'http://localhost:5000/featurereqs/reviews/com.android.chrome/'+keywords;
         return(
        
            <div className='container-fluid'>
                <div className="center-content">
                  
                    <div className='row m-1'>
                        <div className='col'><p>Keywords</p></div>
                        <div className='col'>
                            
                                <div variant='secondary' className={"m-1 " + (props.type === 'bug' ? "bug" : "fr")+"KeywordBtn"}>{keywords}</div>
                         
                        </div>
                    </div>  
                    <div className='row m-1'>
                        <div className='col'><p>Sentiment</p></div>
                        <div className='col'>{props.points}</div>
                    </div> 
                    </div>            
                    <div className='container text-right'>
                    <Link to={{
                           pathname:currentURL+'/reviews',
                           state:{
                               urlLink:url,
                               keyword:keywords
                           },
                           search:'?keyword='+keywords
                       }}>
                        <Button variant='secondary' className={"mx-2  " + (props.type === 'bug' ? "bug" : "fr")+"DescripBtn"} >View Reviews</Button>
                        </Link>
                    </div>
                
            </div>
        );
    }
    else{
        url = 'http://localhost:5000/bugfixes/reviews/com.android.chrome/'+keywords;
        return(
        
            <div className='container-fluid'>
                <div className="center-content">
                  
                    <div className='row m-1'>
                        <div className='col'><p>Keywords</p></div>
                        <div className='col'>
                           
                        <div variant='secondary' className={"m-1 " + (props.type === 'bug' ? "bug" : "fr")+"KeywordBtn"}>{keywords}</div>
                          
                        </div>
                    </div>  
                    <div className='row m-1'>
                        <div className='col'><p>Bug sentiment</p></div>
                        <div className='col'>{props.points}</div>
                    </div> 
                    </div>            
                    <div className='container text-right'>
                       <Link to={{
                           pathname:currentURL+'/reviews',
                           state:{
                               urlLink:url,
                               keyword:keywords
                           },
                           search:'?keyword='+keywords
                       }}> <Button variant='secondary' className={"mx-2  " + (props.type === 'bug' ? "bug" : "fr")+"DescripBtn"} >View Reviews</Button>
                       </Link>
                    </div>
                
            </div>
        );
    }
    
}
export default DescripBox;