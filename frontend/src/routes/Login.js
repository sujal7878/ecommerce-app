import React from 'react';
import AuthForm from '../components/AuthForm';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <AuthForm isRegister={false} />
    </div>
  );
}

export default Login;
