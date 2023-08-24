"use client"

import React, { createContext, useState } from 'react';
import { signIn } from "next-auth/react";

const SignInFieldsContext = createContext();

const SignInFieldsContextProvider = ({ children }) => {
  const [signInComponent, setSignInComponent] = useState({
    email: null,
    password: null,
  });

  const [ error, setError ] = useState(null);

  async function onSubmit({callback}){
    try{
      setError(null);
      const response = await signIn(
        "credentials",
        {
          email: signInComponent.email,
          password: signInComponent.password,
          redirect: false,
        }
      );
      if(response.profile.email){
         return;
      }
      setError(response.profile.message);
    }
    catch(err){
      setError(err.message);
    }
  }

  const updateSignInComponent = (newValue) => {
    setSignInComponent(newValue);
  };

  const context = { signInComponent, updateSignInComponent, onSubmit, error };

  return <SignInFieldsContext.Provider value={context}>{children}</SignInFieldsContext.Provider>;
};

export { SignInFieldsContext, SignInFieldsContextProvider };
