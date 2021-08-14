import React, { useContext } from "react";
import { Context } from "../context/Context";
import { UserForm } from "../components/UserForm/index.js";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
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
      <LoginMutation>
        {(login, { error, data, loading }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };

          const errorMsg = error && "Credenciales incorrectas";
          return (
            <UserForm
              disabled={loading}
              onSubmit={onSubmit}
              error={errorMsg}
              title="Iniciar Sesión"
            />
          );
        }}
      </LoginMutation>
    </>
  );
};

export { NotRegisteredUser };
