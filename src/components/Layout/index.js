import React from "react";
import { Helmet } from "react-helmet";
import { StyledDiv, StyledTitle, StyledSubtitle } from "./styles";

const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <StyledDiv>
        {title && <StyledTitle>{title}</StyledTitle>}
        {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        {children}
      </StyledDiv>
    </>
  );
};

export { Layout };
