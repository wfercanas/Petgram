import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

const FavButton = ({ liked, likes, handleClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <StyledButton onClick={handleClick}>
      <Icon size="32px" />
      {likes} likes!
    </StyledButton>
  );
};

export { FavButton };

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
