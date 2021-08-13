import React, { useContext } from "react";
import { Context } from "../context/Context";
import { StyledButton } from "../components/UserForm/styles";

const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <StyledButton onClick={removeAuth}>Cerrar Sesión</StyledButton>
    </>
  );
};

export { User };
