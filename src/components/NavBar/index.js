import React, { useState } from "react";
import { StyledNav, StyledLink } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const SIZE = "24px";
  const {
    location: { pathname },
  } = useHistory();

  const [activeButtons, setActiveButtons] = useState(() => {
    switch (pathname) {
      case "/":
        return ["on", "off", "off"];
      case "/favs":
        return ["off", "on", "off"];
      case "/user":
        return ["off", "off", "on"];
      default:
        return ["on", "off", "off"];
    }
  });

  const handleClick = (buttonId) => {
    const buttons = activeButtons.map(() => "off");
    buttons[buttonId] = "on";
    setActiveButtons(buttons);
  };

  return (
    <StyledNav>
      <StyledLink
        to="/"
        onClick={() => handleClick(0)}
        status={activeButtons[0]}
      >
        <MdHome size={SIZE} />
      </StyledLink>
      <StyledLink
        to="/favs"
        onClick={() => handleClick(1)}
        status={activeButtons[1]}
      >
        <MdFavoriteBorder size={SIZE} />
      </StyledLink>
      <StyledLink
        to="/user"
        onClick={() => handleClick(2)}
        status={activeButtons[2]}
      >
        <MdPersonOutline size={SIZE} />
      </StyledLink>
    </StyledNav>
  );
};

export { NavBar };
