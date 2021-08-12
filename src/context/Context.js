import React, { createContext, useState } from "react";

const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const activateAuth = () => {
    setIsAuth(true);
  };

  const value = {
    isAuth,
    activateAuth,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
