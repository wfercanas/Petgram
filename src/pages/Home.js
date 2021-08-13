import React from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../container/ListOfPhotoCard";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";

const Home = () => {
  let { categoryId } = useParams();
  return (
    <Layout
      title={"Fotos de mascotas"}
      subtitle={"Encuentra fotos bonitas de muchas mascotas"}
    >
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </Layout>
  );
};

export { Home };
