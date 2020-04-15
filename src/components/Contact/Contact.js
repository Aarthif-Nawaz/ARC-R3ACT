import React,{useState,useEffect,useCallback} from "react";
import Footer from "../NavigationBar/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTwitter , faLinkedin, faGooglePlus  , faInstagram } from '@fortawesome/free-brands-svg-icons'

function useForm(stateSchema={},validationSchema={},formCallback){
  const [state,setState] = useState(stateSchema);
  const [disable,setDisable] = useState(true);
  const [isWrong,setIsWrong] = useState(false);
  
//Submit button is disabled in intial render.
  useEffect(()=>{
    setDisable(true);
  },[]);


//if the validation done the button will be able to submit
useEffect(()=>{
  if(isWrong){
    setDisable(validateErrorState());
  }
},[state,isWrong]);

/**
 * Disables the button if there is an error in the state 
 * or required feild has no value
 * Used useCall back to avoid memory been leaked
*/
const validateErrorState = useCallback(()=>{
  const hasErrorInState = Object.keys(validationSchema).some(key=>{

    const isInputFieldRequired  = validationSchema[key].required;
    const stateValue  = state[key].value;
    const stateError = state[key].error;
   return (isInputFieldRequired && !stateValue) ||stateError;

  });
  
  return hasErrorInState;
},[state,validationSchema]);

//handles every change in the input
const handleOnChange = useCallback(
  event =>{
    setIsWrong(true);
    const name = event.target.name;
    const value = event.target.value;

    let error='';
    if(validationSchema[name].required){
      if(!value){
        error = 'This is required field';
      }
    }
    
    if(validationSchema[name].validator !==null && typeof validationSchema[name].validator === 'object'){
      if(value && !validationSchema[name].validator.regEx.test(value)){
        error= validationSchema[name].validator.error;
      }
    }

    setState(prevState =>({
      ...prevState,
      [name]: {value,error},
    }));
   
  },
  [validationSchema]
);



const handleOnSubmit = useCallback(
  event=> {event.preventDefault();
  if(!validateErrorState()){
    formCallback(state);
  }
 
  },[state]

);
return {state,disable,handleOnChange,handleOnSubmit};
}

//Function Contact
function Contact() {

const stateSchema = {
  name:{value:'',error:''},
  email:{value:'',error:''},
  message:{value:'',error:''},
  phone:{value:'',error:''}
}

const validationStateSchema = {
 name:{
   required :true,
   validator:{
    regEx: /^[a-zA-Z]+$/,
    error: 'Invalid name format.'
   }
 },
 email:{
   required:true,
   validator :{
     regEx : /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
     error: 'Invalid email format.'
   }
 },
 message:{
  required:true
 },
 phone:{
  required:false,
  validator :{
    regEx : /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    error: 'Invalid phone format.'
  }
 }
}
function OnSubmitForm(state){

  alert(state);
}

const{state,handleOnChange,handleOnSubmit,disable} = useForm(
  stateSchema,validationStateSchema,OnSubmitForm
);


const errorStyle ={
  color:'red',
  fontSize:'12px'
}


  return (
    <div className='container-fluid' style={{ boxSizing: "border-box" }}>
      <div class="bgimg-12">
        <div class="caption">
          <span className="border">We are always here to help you.</span>
        </div>
      </div>

      <div class="descrip-1">
        <h3
          style={{
            textAlign: "center",
            fontSize: "2vw",
            fontWeight: 700,
            paddingBottom: 30,
          }}
        >
          Send us your questions here
        </h3>

        <form onSubmit={handleOnSubmit}>
          <input
            class="commentInput"
            type="text"
            id="name"
            name="name"
            value ={state.name.value}
            onChange = {handleOnChange}
            placeholder="Your Name *"
            required
          ></input>
          {state.name.error && <p style={errorStyle}>{state.name.error}</p>}
          <br></br>
          <br></br>
          <input
            class="commentInput"
            type="email"
            id="email"
            name="email"
            value ={state.email.value}
            onChange = {handleOnChange}
            placeholder="Email Address *"
            required
          ></input>
          {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
          <br></br>
          <br></br>
          <input
            class="commentInput"
            type="text"
            name="phone"
            value ={state.phone.value}
            onChange = {handleOnChange}
            placeholder="Phone Number"
          ></input>
          {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
          <br/>
          <br/>
          <input
            class="commentInput"
            type="text"
            name="message"
            value ={state.message.value}
            onChange = {handleOnChange}
            placeholder="Message *"
            required
          ></input>
          {state.message.error && <p style={errorStyle}>{state.message.error}</p>}
          <br></br>
          <br></br>
          <input
            class="commentSubmit"
            type="submit"
            placeholder="GET IN TOUCH"
           disabled={disable}
          />
        </form>
      </div>
 
      <div class="bgimg-13">
        <div class="caption">
          <span
            class="border"
            style={{
              backgroundColor: "#282e34",
              fontSize: "2vw",
              color: "#f7f7f7",
            }}
          >
            Connect with us and start improving your app today.
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="descrip-9">
          <div class="row">
            <div class="col d-flex align-items-stretch">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 30 }}>
                  Social Media
                </h3>

                <div className="text-center text-md-right">
              <a className="fb-ic mr-4">
              <FontAwesomeIcon icon={faFacebook}/>
              </a>

              <a className="tw-ic mr-4">
              <FontAwesomeIcon icon={faTwitter}/>
              </a>

              <a className="gplus-ic mr-4">
              <FontAwesomeIcon icon={faGooglePlus}/>
              </a>

              <a className="li-ic mr-4">
              <FontAwesomeIcon icon={faLinkedin}/>
              </a>

              <a className="ins-ic mr-4">
              <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
              </div>
            </div>
            <div class="col d-flex align-items-stretch">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 30 }}>
                  Address
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight:500
                  }}
                >
                  244/3, Maharagama, Sri Lanka
                
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-stretch">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 30 }}>
                  Mobile Number
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight:500
                  }}
                >
                  + 01 234 567 88
                  
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-stretch">
              <div class="card">
                <h3 style={{ fontWeight: 700, paddingBottom: 30 }}>
                  Email Address
                </h3>
                <p
                  style={{
                    color: "black",
                    textAlign: "justify",
                    fontSize: "1vw",
                    fontWeight:500
                  }}
                >
                  arc.r3act@gmail.com
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}
export default Contact;
