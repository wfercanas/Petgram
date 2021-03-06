import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  align-items: center;
  color: ${({ status }) => (status === "off" ? "#888" : "#000")};
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%auto;
`;

export { StyledNav, StyledLink };
