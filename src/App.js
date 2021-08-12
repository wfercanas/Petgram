import React from "react";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pet/:categoryId" exact component={Home} />
          <Route path="/detail/:detailId" exact component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export { App };
