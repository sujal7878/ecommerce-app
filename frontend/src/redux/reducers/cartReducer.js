import { FETCH_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
  items: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        items: action.payload
      };
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
