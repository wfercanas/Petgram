import React from "react";
import { FavsWithQuery } from "../container/GetFavorites";
import { Layout } from "../components/Layout";

const Favs = () => {
  return (
    <Layout title={"Tus favoritos"} subtitle={"Tus mascotas favoritas"}>
      <FavsWithQuery />
    </Layout>
  );
};

export { Favs };
