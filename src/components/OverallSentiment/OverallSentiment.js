import React,{ useEffect, useState  } from "react";
import LoadingBox from '../Error/LoadingBox';
import ErrorPage from '../Error/Crashed';
import Footer from "../NavigationBar/Footer";

function OverallSentiment() {
   const[isLoaded,setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const[items,setItems] = useState([]);


    useEffect(() =>{
        
        fetch("http://localhost:5000/app/com.ubercab")
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
        return <ErrorPage errorDet={error.message}/>;
    }else if(!isLoaded){
        return <LoadingBox/>;
   }else{
  return (
    <div className="container-fluid">
      <div className="bgimg-16">
        
          {items.map(item =>(
             <div key={item._id} className="sentimentBox">
             <div className='row'>
               <div className='col'>
                 {/* <Container>App Logo</Container> */}
                 <img src={item.icon} style={{width:'200px'}}/>
               </div>
               <div className='col'>
               <div className='row'>
                   <h3 style={{fontSize:"2vw"}}>{items.title}</h3>{" "}
                 </div>
                 <div className='row'>
                     <h4>{item.developer}</h4>
                 </div>
               </div>
             </div>
             <div className='row'>
                 <div class="sentimentInfo">
                 <div className='col'>
                   
                 <div className='row'>{item.summary}</div>
                  <div className='row'>{item.genre}</div>
                  <div className='row'>Reviews : {item.reviews}</div>
                 <div className='row'>{item.installs} Downloads</div>
               </div>
               </div>
               <div className='col'>
                  <h1>{item.scoreText}</h1>
               </div>
             </div>
           </div>
          ))}
         
      </div>
      <Footer />
    </div>
  );
}
}
export default OverallSentiment;
