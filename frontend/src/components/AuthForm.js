import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../redux/actions/authActions';

function AuthForm({ isRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      dispatch(register(email, password));
    } else {
      dispatch(login(email, password));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
    </form>
  );
}

export default AuthForm;
