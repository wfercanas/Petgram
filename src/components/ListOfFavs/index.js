import React from "react";
import { StyledGrid, StyledImage, StyledLink } from "./styles";

const ListOfFavs = ({ favs = [] }) => {
  return (
    <StyledGrid>
      {favs.map((fav) => (
        <StyledLink>
          <StyledImage key={fav.id} src={fav.src} />
        </StyledLink>
      ))}
    </StyledGrid>
  );
};

export { ListOfFavs };
