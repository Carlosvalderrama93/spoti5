import React, { useContext } from "react";

import LoginForm from "../login/LoginForm";
import LoginAlternative from "../login/LoginAlternative";
import IconLogo from "../icons/IconLogo";
import Title from "../Title";
import { Navigate } from "react-router-dom";
import { AuthState } from "../../utils/auth/AuthProvider";

export default function Login() {
  const authState = useContext(AuthState);
  if (authState.token) {
    return <Navigate to="/" />;
  }
  return (
    <section className="login">
      <div className="login-form">
        <IconLogo className="logo" />
        <Title className="titulo30">Log in to continue.</Title>
        <LoginForm />
        <div className="line-divider">OR</div>
        <LoginAlternative />
      </div>
    </section>
  );
}
