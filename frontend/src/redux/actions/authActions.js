import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from './types';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  } catch (err) {
    console.error(err);
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/register', { email, password });
    dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => ({ type: LOGOUT });
