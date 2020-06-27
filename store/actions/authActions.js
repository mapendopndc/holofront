import axios from 'axios';
import { AUTHENTICATE, REGISTER } from '../types';

// login user
export const authenticate = (userInfo) => {
  return (dispatch) => {
    axios.post('https://holospaceapp.com/api/user/login', userInfo)
      .then(res => {
        console.log(res.data)
        dispatch({type: AUTHENTICATE, payload: res.data})
      })
      .catch(err => {
        console.log(err)
      });
  };
};

// register user
export const register = (userInfo) => {
  return (dispatch) => {
    axios.post('https://holospaceapp.com/api/user/signup', userInfo)
      .then(res => {
        console.log(res)
        dispatch({type: REGISTER, payload: res.data})
      })
      .catch(err => {
        console.log(err)
      });
  };
};