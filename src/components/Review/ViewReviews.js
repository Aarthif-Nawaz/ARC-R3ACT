import React, { useEffect, useState  } from 'react';
import Review from './Review';
import LoadingBox from '../Error/LoadingBox';
import ErrorPage from '../Error/Crashed';
import Footer from "../NavigationBar/Footer";


function ViewAllReviews(){
   
    // const[isLoaded,setIsLoaded] = useState(false);
    // const [error, setError] = useState(null);
    // const[items,setItems] = useState([]);


    // useEffect(() =>{
        
    //     fetch("http://localhost:5000/reviews/com.whatsapp")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setIsLoaded(true);
    //             setItems(result);
    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //     )
    // },[]);

    // if(error){
    //     return <ErrorPage errorDet={error.message}/>;
    // }else if(!isLoaded){
    //     return <LoadingBox/>;
    // }else{
        return(
            <div>
                <div class="bgimg-5">
                    <div class="caption">
                        <span className="border">
                            Reviews addressing "High Energy Consumption"
                        </span>
                    </div>
                </div>
                 <div>
                     {/* <ul>
                        {items.map((item) =>(
                                <li key={item._id} style={{listStyleType:'none'}}>
                                    <div className={'descrip-'+(item._id%2 ? '4' : '5')}> */}
        
                                        {/* author={item.userName} date={item.date} score={item.rating} text={item.text} */}
                                       
                                        <Review author="Amy" date="2020-03-09" score={3} text="Good"/> 
                                        
                                       
                                    {/* </div>
                                    
                                
                                </li>
                            ))}
                     </ul>   */}
                </div>
                <Footer />
        </div>

     );
    }
//}
export default ViewAllReviews;
