import React from 'react';
import AuthForm from '../components/AuthForm';

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <AuthForm isRegister={true} />
    </div>
  );
}

export default Register;
