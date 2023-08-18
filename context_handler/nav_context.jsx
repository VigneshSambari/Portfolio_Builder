"use client"
import React, { createContext, useState } from 'react';

const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [authComponent, setauthComponent] = useState({
    component: null,
  });

  const updateAuthComponent = (newValue) => {
    setauthComponent(newValue);
    console.log(newValue);
  };

  const context = { ...authComponent, updateAuthComponent };

  return <NavContext.Provider value={context}>{children}</NavContext.Provider>;
};

export { NavContext, NavContextProvider };
