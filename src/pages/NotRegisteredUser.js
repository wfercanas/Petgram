import React, { useContext } from "react";
import { Context } from "../context/Context";
import { UserForm } from "../components/UserForm/index.js";
import { RegisterMutation } from "../container/RegisterMutation";

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(activateAuth);
          };
          return <UserForm onSubmit={onSubmit} title="Registrarse" />;
        }}
      </RegisterMutation>
      <UserForm handleSubmit={activateAuth} title="Iniciar Sesión" />
    </>
  );
};

export { NotRegisteredUser };
