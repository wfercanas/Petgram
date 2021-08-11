import React from "react";
import { PhotoCard } from "../PhotoCard";

const ListOfPhotoCardComponent = ({ photos }) => {
  return (
    <ul>
      {photos && photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  );
};

export { ListOfPhotoCardComponent };
