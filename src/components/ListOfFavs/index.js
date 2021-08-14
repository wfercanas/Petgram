import React from "react";
import { StyledGrid, StyledImage, StyledLink } from "./styles";
import PropTypes from "prop-types";

const ListOfFavs = ({ favs = [] }) => {
  return (
    <StyledGrid>
      {favs.map((fav) => (
        <StyledLink key={fav.id} to={`/detail/${fav.id}`}>
          <StyledImage src={fav.src} />
        </StyledLink>
      ))}
    </StyledGrid>
  );
};

export { ListOfFavs };

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};
