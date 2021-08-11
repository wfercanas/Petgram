import React from "react";
import { PhotoCard } from "../PhotoCard";

const ListOfPhotoCard = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6].map((photocard, index) => (
        <PhotoCard key={index} id={index} />
      ))}
    </ul>
  );
};

export { ListOfPhotoCard };
