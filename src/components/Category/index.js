import React from "react";

import { StyledAnchor, StyledImage } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
  return (
    <StyledAnchor href={path}>
      <StyledImage src={cover} />
      {emoji}
    </StyledAnchor>
  );
};

export { Category };
