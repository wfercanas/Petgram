import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

const Detail = () => {
  let { detailId } = useParams();
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};

export { Detail };
