import React, { useEffect, useState  } from 'react';
import Review from './Review';
//import Container from 'react-bootstrap/Container';
import Footer from "../NavigationBar/Footer";
import LoadingBox from '../Error/LoadingBox';
import ErrorPage from '../Error/Crashed';

{/** 
        *{app Name} should change
        * It should accept the parameter from the either bug fix or feature request page
        *Error Page should be connected
        *Loading Page should be connected
     */}
function ViewAllReviews(){
    const[isLoaded,setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const[items,setItems] = useState([]);


    useEffect(() =>{
        
        fetch("http://localhost:5000/reviews/com.whatsapp")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[]);

    if(error){
        return <ErrorPage errorDet={error.message}/>;{/*Error Page should render*/}
    }else if(!isLoaded){
        return <LoadingBox/>;{/*Loading Page should render */}
    }else{
        
             
                
               
    return(  
        <div>
             <div class="bgimg-5">
                <div class="caption">
                <span className="border">
                    Reviews addressing "High Energy Consumption" ...
                </span>
                </div>
            </div>
            
            <ul style={{paddingInlineStart: '0px'}}>
                 {/*Conditional rendering is used */}
                {items.map((item) =>(
                        <li key={item._id} style={{listStyleType:'none'}}>
                            <div>
                             <Review author={item.userName} date={item.date} score={item.rating} text={item.text}/> 
                             </div>
                        </li>
                    ))}
                </ul>
            
             <Footer />
        </div>   
       
     );
         }
}
export default ViewAllReviews;
