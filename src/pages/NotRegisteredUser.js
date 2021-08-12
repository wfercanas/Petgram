import React, { useContext } from "react";
import { Context } from "../context/Context";
import { UserForm } from "../components/UserForm.js";

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <UserForm handleSubmit={activateAuth} title="Registrarse" />
      <UserForm handleSubmit={activateAuth} title="Iniciar Sesión" />
    </>
  )
};

export { NotRegisteredUser };
