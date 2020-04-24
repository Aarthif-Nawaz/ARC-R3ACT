import { useState, useEffect, useCallback } from "react";

function FormValidation(stateSchema = {}, validationSchema = {}, formCallback) {
  const [state, setState] = useState(stateSchema);
  //Disable the button prop and state
  const [disable, setDisable] = useState(true);
  //Checks the validation
  const [isWrong, setIsWrong] = useState(false);

  //Submit button is disabled in intial render.
  useEffect(() => {
    setDisable(true);
  }, []);

  //if the validation done the button will be able to submit
  useEffect(() => {
    if (isWrong) {
      setDisable(validateErrorState());
    }
  }, [state, isWrong]);

  /**
   * Disables the button if there is an error in the state
   * or required feild has no value
   * Used useCall back to avoid memory been leaked
   */
  const validateErrorState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some((key) => {
      const isInputFieldRequired = validationSchema[key].required;
      const stateValue = state[key].value;
      const stateError = state[key].error;
      return (isInputFieldRequired && !stateValue) || stateError;
    });

    return hasErrorInState;
  }, [state, validationSchema]);

  //handles every change in the input
  const handleOnChange = useCallback(
    (event) => {
      setIsWrong(true);
      const name = event.target.name;
      const value = event.target.value;

      let error = "";
      if (validationSchema[name].required) {
        if (!value) {
          error = "This is required field";
        }
      }

      if (
        validationSchema[name].validator !== null &&
        typeof validationSchema[name].validator === "object"
      ) {
        if (value && !validationSchema[name].validator.regEx.test(value)) {
          error = validationSchema[name].validator.error;
        }
      }

      setState((prevState) => ({
        ...prevState,
        [name]: { value, error },
      }));
    },
    [validationSchema]
  );

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!validateErrorState()) {
        formCallback(state);
      }
    },
    [state]
  );
  return { state, disable, handleOnChange, handleOnSubmit };
}
export default FormValidation;
