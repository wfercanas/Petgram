import styled from "styled-components";

const StyledImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

const StyledImg = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

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

export { StyledImgWrapper, StyledImg, StyledButton };
