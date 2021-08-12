import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`;

const StyledForm = styled.form`
  padding: 16px 0;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`;

const StyledButton = styled.button`
  background: #8d00ff;
  border: none;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
`;

export { StyledTitle, StyledForm, StyledInput, StyledButton };
