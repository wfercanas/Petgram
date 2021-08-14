import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Context } from "./context/Context";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./pages/NotFound";

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pet/:categoryId" exact component={Home} />
          <Route path="/detail/:detailId" exact component={Detail} />
          <Route path="/login" exact>
            {!isAuth ? <NotRegisteredUser /> : <Redirect to="/" />}
          </Route>
          <Route path="/favs" exact>
            {!isAuth ? <Redirect to="/login" /> : <Favs />}
          </Route>
          <Route path="/user" exact>
            {!isAuth ? <Redirect to="/login" /> : <User />}
          </Route>
          <Route default component={NotFound} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export { App };
