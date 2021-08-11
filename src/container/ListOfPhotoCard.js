import React from "react";
import { ListOfPhotoCardComponent } from "../components/ListOfPhotoCard";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data = {} }) => {
  const { photos = [] } = data;
  return <ListOfPhotoCardComponent photos={photos} />;
};

const ListOfPhotoCard = ({ categoryId }) => {
  return (
    <Query query={GET_PHOTOS} variables={{ categoryId }}>
      {renderProp}
    </Query>
  );
};

export { ListOfPhotoCard };
