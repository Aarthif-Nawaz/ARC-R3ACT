/* 
  Page      - Form.js page
  Function  - Form component in Contact.js page
  Author    - Sajani Sihara, Ridmi Amasha
*/

import React, { useRef } from "react";
import FormValidation from "./FormValidation.js";

function Form() {
  const stateSchema = {
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    message: { value: "", error: "" },
    phone: { value: "", error: "" },
  };

  //Validations done in the input text fields
  const validationStateSchema = {
    name: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid name format.",
      },
    },
    email: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        error: "Invalid email format.",
      },
    },
    message: {
      required: true,
    },
    phone: {
      required: false,
      validator: {
        regEx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        error: "Invalid phone format.",
      },
    },
  };
  //sending data to the server
  function OnSubmitForm(state) {
    const data = {
      name: state.name.value,
      email: state.email.value,
      message: state.message.value,
      phone: state.phone.value,
    };
    const url = "http://localhost:5000/contactus";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

    alert("Thank u for your valuable message! We also keep time to read yours");
  }

  const { state, handleOnChange, handleOnSubmit, disable } = FormValidation(
    stateSchema,
    validationStateSchema,
    OnSubmitForm
  );

  const errorStyle = {
    color: "red",
    fontSize: "12px",
  };
  return (
    <form onSubmit={handleOnSubmit}>
      {/*Input field to add the name */}
      <input
        className="commentInput"
        type="text"
        id="name"
        name="name"
        value={state.name.value}
        onChange={handleOnChange}
        placeholder="Your Name *"
        required
      ></input>
      {state.name.error && <p style={errorStyle}>{state.name.error}</p>}

      <br></br>
      <br></br>

      {/*Input field to add the email address */}
      <input
        className="commentInput"
        type="email"
        id="email"
        name="email"
        value={state.email.value}
        onChange={handleOnChange}
        placeholder="Email Address *"
        required
      ></input>
      {state.email.error && <p style={errorStyle}>{state.email.error}</p>}

      <br></br>
      <br></br>

      {/*Input field to add the phone number */}
      <input
        className="commentInput"
        type="text"
        name="phone"
        value={state.phone.value}
        onChange={handleOnChange}
        placeholder="Phone Number"
      ></input>
      {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}

      <br />
      <br />

      {/*Input field to add the comment/message */}
      <input
        className="commentInput"
        type="text"
        name="message"
        value={state.message.value}
        onChange={handleOnChange}
        placeholder="Message *"
        required
      ></input>
      {state.message.error && <p style={errorStyle}>{state.message.error}</p>}

      <br></br>
      <br></br>

      {/*Clicking this button will send the comment to the database with the user info */}
      <input
        className="commentSubmit"
        type="submit"
        placeholder="GET IN TOUCH"
        disabled={disable}
      />
    </form>
  );
}
export default Form;
