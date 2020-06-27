import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';


const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

export const wrapper = createWrapper(initStore)