import React, { useContext } from "react";
import { Context } from "../context/Context";
import { UserForm } from "../components/UserForm/index.js";
import { RegisterMutation } from "../container/RegisterMutation";

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(activateAuth);
          };

          const errorMsg = error && "El usuario ya existe o hay algún problema";

          return (
            <UserForm
              disabled={loading}
              onSubmit={onSubmit}
              error={errorMsg}
              title="Registrarse"
            />
          );
        }}
      </RegisterMutation>
      <UserForm handleSubmit={activateAuth} title="Iniciar Sesión" />
    </>
  );
};

export { NotRegisteredUser };
