import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function SearchDescripBox(props) {
    let history = useHistory();
    function handleClick(){
        history.push("")
    }

    return (
        <div class="searchBox">
            <div className='row'>
                <div className='col-3'>
                    <div className='row-6 m-2'>
                        <img src="../images/img_parallax4.jpg" style={{ borderRadius: "1.6vw", width: '10vw',height: '10vw' }} />
                    </div>
                    <div className='row-3 ml-2'>
                        <p className='sentimentInfo' style={{ fontSize: "2.5vw" }}>title</p>{" "}
                    </div>
                    <div className='row-3 ml-2'style={{marginTop:"1vw"}}>
                        <p className='sentimentInfo'>developer</p>
                    </div>

                </div>
                <div className='col-4 sentimentInfo'>
                    <div className='row m-3'>
                        <div style={{ fontStyle: "italic" }}>"summary"</div>
                    </div>
                    <div className='row m-3'>
                        Installs  : installs
                   </div>
                    <div className='row m-3'>
                        Rating : rating
                  </div>
                    <div className='row m-3'>
                        Price : price
                  </div>
                </div>
                <div className='col-2 container text-right' style={{marginRight:"18vw", marginTop:"10%"}}>
                    <Button variant='secondary' className='mx-2 searchDescripBtn' onClick="" style={{fontSize:"2vw"}}>Select</Button>
                </div>
            </div>

        </div>
    );
}
export default SearchDescripBox;
