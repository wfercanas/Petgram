import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

const Detail = () => {
  let { detailId } = useParams();
  return <PhotoCardWithQuery id={detailId} />;
};

export { Detail };
