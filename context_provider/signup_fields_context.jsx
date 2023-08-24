"use client"

import { apiRoutes } from '@constants/routeHelpers';
import React, { createContext, useState } from 'react';
import { validateEmail, validatePassword } from './../utils/methods/regex_validators';

const SignUpFieldsContext = createContext();

const SignUpFieldsContextProvider = ({ children }) => {
  const [signUpComponent, setSignUpComponent] = useState({
    email: null,
    password: null,
    firstName: null,
    lastName: null,
  });

  const updateSignUpComponent = (newValue) => {
    setSignUpComponent(newValue);
  };

  const [inputErrors, setInputErrors] = useState({
    email: null,
    password: null,
    firstName: null,
    lastName: null,
  });

  const updateInputErrors = (newValue) => {
    setInputErrors(newValue);
  }

  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  const onSubmit = async ({callback}) => {
    console.log(signUpComponent);
    let emailValid = validateEmail(signUpComponent.email);
    let passwordValid = validatePassword(signUpComponent.password);
    let inValid=false;
   // if(emailValid) {
    //  setInputErrors({
    //    ...inputErrors,
     //   email: emailValid,
     // })
     // inValid=true;
    //}
   // if(passwordValid) {
    //  setInputErrors({
    //    ...inputErrors,
    //    password: passwordValid,
    //  })
    //  inValid=true;
    //}
    if(!signUpComponent.firstName){
      setInputErrors({
        ...inputErrors,
        firstName: "First Name should not be empty!",
      })
      inValid=true;
    }
    if(!signUpComponent.lastName){
      setInputErrors({
        ...inputErrors,
        lastName: "Last Name should not be empty!",
      })
      inValid=true;
    }
    console.log(inputErrors);
    if(inValid) return;

    setIsLoading(true);
    try{
      const res = await fetch(apiRoutes.signUp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpComponent),
      });

      const response = await res.json();

      if (res.ok) {
        updateSignUpComponent({
          email: null,
          password: null,
          firstName: null,
          lastName: null,
        });
        callback();
      } else {
        console.log(response);
        setError(response["message"]);
      }
      setIsLoading(false);
    }
    catch(err){
      setError(err.message);
    }
    
  }


  const context = { signUpComponent, updateSignUpComponent, 
                        onSubmit, error, inputErrors, isLoading, updateInputErrors };

  return <SignUpFieldsContext.Provider value={context}>{children}</SignUpFieldsContext.Provider>;
};

export { SignUpFieldsContext, SignUpFieldsContextProvider };
