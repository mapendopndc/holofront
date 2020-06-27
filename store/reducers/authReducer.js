import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../types';

const initialState = {
  token: null,
  user_id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {...state, token: action.payload.token, user_id: action.payload.user_id}
    default:
      return state;
  }
};