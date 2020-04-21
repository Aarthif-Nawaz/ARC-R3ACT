import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory,Link } from "react-router-dom";


function SearchDescripBox(props) {
    
   

    return (
        <div class="searchBox">
            <div className='row'>
                <div className='col-3'>
                    <div className='row-6 m-2'>
                        <img className="searchAppsImages" src={props.icon}/>
                    </div>
                    <div className='row-3 ml-2'>
                         <h3 className='sentimentInfo' style={{ fontSize: "2vw",color:"#fff", paddingTop:20 }}>{props.title}</h3>{" "}
                    </div>
                    <div className='row-3 ml-2'style={{marginTop:"1vw"}}>
    <p className='sentimentInfo'>{props.developer}</p>
                    </div>

                </div>
                <div className='col-4 sentimentInfo'>
                    <div className='row m-3'>
                        <div style={{ fontStyle: "italic" }}>"summary"</div>
                    </div>
                    <div className='row m-3'>
                        Installs  : {props.installs}
                   </div>
                    <div className='row m-3'>
                        Rating : {props.rating}
                  </div>
                    <div className='row m-3'>
                        Price : {props.price}
                  </div>
                </div>
                <div className='col-2 container text-right' style={{marginRight:"18vw", marginTop:"10%"}}>
                {/* <Link to={{pathname:match.params.app+'/menu'}}> <Button variant='secondary' className='mx-2 searchDescripBtn' onClick="" style={{fontSize:"1.5vw"}}>Select</Button></Link> */}
                </div>
            </div>

        </div>
    );
}
export default SearchDescripBox;
