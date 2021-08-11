import React from "react";

import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCard } from "./container/ListOfPhotoCard";
import { Logo } from "./components/Logo";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard categoryId={1} />
    </>
  );
};

export { App };
