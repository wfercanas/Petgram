import React from "react";
import { StyledNav, StyledLink } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

const NavBar = () => {
  const SIZE = "24px";
  return (
    <StyledNav>
      <StyledLink to="/">
        <MdHome size={SIZE} />
      </StyledLink>
      <StyledLink to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </StyledLink>
      <StyledLink to="/user">
        <MdPersonOutline size={SIZE} />
      </StyledLink>
    </StyledNav>
  );
};

export { NavBar };
