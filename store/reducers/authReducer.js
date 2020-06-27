import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../types';

const initialState = {
  token: null,
  user: null,
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case AUTHENTICATE:
      return {...state, token: action.payload}
    default:
      return state;
  }
};