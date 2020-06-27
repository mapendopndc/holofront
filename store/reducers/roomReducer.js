import { CREATE_ROOM } from '../types';

const initialState = {
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROOM:
      return {...state, data: action.payload}
    default:
      return state;
  }
};