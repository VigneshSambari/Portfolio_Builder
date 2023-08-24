"use client"

import { apiRoutes } from '@constants/routeHelpers';
import React, { createContext, useState } from 'react';

const SignUpFieldsContext = createContext();

const SignUpFieldsContextProvider = ({ children }) => {
  const [signUpComponent, setSignUpComponent] = useState({
    email: null,
    password: null,
    firstName: null,
    lastName: null,
  });

  const [ error, setError ] = useState(null);

  const onSubmit = async ({callback}) => {
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
      
    }
    catch(err){
      setError(err.message);
    }
  }

  const updateSignUpComponent = (newValue) => {
    setSignUpComponent(newValue);
  };

  const context = { signUpComponent, updateSignUpComponent, onSubmit, error };

  return <SignUpFieldsContext.Provider value={context}>{children}</SignUpFieldsContext.Provider>;
};

export { SignUpFieldsContext, SignUpFieldsContextProvider };
