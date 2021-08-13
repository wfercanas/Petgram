import React, { createContext, useState } from "react";

const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const activateAuth = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  };

  const value = {
    isAuth,
    activateAuth,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
