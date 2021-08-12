import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding-top: 8px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`;

export { StyledButton };
