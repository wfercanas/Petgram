import React from "react";
import { PhotoCard } from "../PhotoCard";

import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);

const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map((photo, index) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent);

export { ListOfPhotoCard };
