import axios from 'axios';
import { FETCH_CART, ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const fetchCart = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/cart');
    dispatch({ type: FETCH_CART, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const addToCart = (productId, quantity) => async (dispatch) => {
  try {
    const res = await axios.post('/api/cart', { productId, quantity });
    dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/cart/${productId}`);
    dispatch({ type: REMOVE_FROM_CART, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
