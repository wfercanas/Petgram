import React from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../container/ListOfPhotoCard";

const Home = () => {
  let { categoryId } = useParams();
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </>
  );
};

export { Home };
