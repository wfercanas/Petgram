import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledTitle,
  StyledError,
} from "./styles";

const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <StyledForm disabled={disabled} onSubmit={handleSubmit}>
        <StyledTitle>{title}</StyledTitle>
        <StyledInput
          disabled={disabled}
          type="text"
          placeholder="Email"
          {...email}
        />
        <StyledInput
          disabled={disabled}
          type="password"
          placeholder="Password"
          {...password}
        />
        <StyledButton disabled={disabled}>{title}</StyledButton>
      </StyledForm>
      {error && <StyledError>{error}</StyledError>}
    </>
  );
};

export { UserForm };
