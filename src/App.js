import React from "react";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NavBar } from "./components/NavBar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const UserLogged = ({ children }) => {
  return children({ isAuth: false });
};

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
          <UserLogged>
            {({ isAuth }) =>
              isAuth ? (
                <>
                  <Route path="/favs" exact component={Favs} />
                  <Route path="/user" exact component={User} />
                </>
              ) : (
                <>
                  <Route path="/favs" component={NotRegisteredUser}></Route>
                  <Route path="/user" component={NotRegisteredUser}></Route>
                </>
              )
            }
          </UserLogged>
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export { App };
