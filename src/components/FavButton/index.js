import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
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
