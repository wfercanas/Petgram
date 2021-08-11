import React from "react";
import { ListOfPhotoCardComponent } from "../components/ListOfPhotoCard";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const query = gql`
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

const ListOfPhotoCard = ({ categoryId }) => {
  return (
    <Query query={query} variables={{ categoryId }}>
      {({ loading, error, data = {} }) => {
        const { photos = [] } = data;
        console.log(photos);
        return <ListOfPhotoCardComponent photos={photos} />;
      }}
    </Query>
  );
};

export { ListOfPhotoCard };
