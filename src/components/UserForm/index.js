import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { StyledForm, StyledInput, StyledButton, StyledTitle } from "./styles";

const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

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
