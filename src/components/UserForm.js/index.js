import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { StyledForm, StyledInput, StyledButton, StyledTitle } from "./styles";

const UserForm = ({ handleSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder="Email" {...email} />
        <StyledInput type="password" placeholder="Password" {...password} />
        <StyledButton>{title}</StyledButton>
      </StyledForm>
    </>
  );
};

export { UserForm };
