import React from "react";

import { GlobalStyle } from "./GlobalStyles";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  );
};

export { App };
