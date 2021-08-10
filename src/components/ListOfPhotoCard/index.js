import React from "react";
import { PhotoCard } from "../PhotoCard";

const ListOfPhotoCard = () => {
  return (
    <ul>
      {[1, 2, 3].map((photocard) => (
        <PhotoCard />
      ))}
    </ul>
  );
};

export { ListOfPhotoCard };
