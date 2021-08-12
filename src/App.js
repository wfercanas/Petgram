import React from "react";

import { GlobalStyle } from "./styles/GlobalStyles";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <>
          {detailId ? (
            <PhotoCardWithQuery id={detailId} />
          ) : (
            <>
              <Route path="/" exact component={Home} />
              <Route path="/pet/:categoryId" exact component={Home} />
            </>
          )}
        </>
      </BrowserRouter>
    </>
  );
};

export { App };
