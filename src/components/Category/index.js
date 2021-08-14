import React from "react";

import { StyledLink, StyledImage } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
  return (
    <StyledLink to={path}>
      <StyledImage src={cover} />
      {emoji}
    </StyledLink>
  );
};

export { Category };
