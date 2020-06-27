import axios from 'axios';
import { AUTHENTICATE } from '../types';

// login user
export const authenticate = (userInfo) => {
  return (dispatch) => {
    axios.post('https://holospaceapp.com/api/user/login', userInfo)
      .then(res => {
        console.log(res.data.token)
        dispatch({type: AUTHENTICATE, payload: res.data.token})
      })
      .catch(err => {
        console.log(err)
      });
  };
};