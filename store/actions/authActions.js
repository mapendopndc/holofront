import axios from 'axios';
import { AUTHENTICATE, REGISTER, ROOMS } from '../types';

// login user
export const authenticate = (userInfo) => {
  return (dispatch) => {
    axios.post('https://holospaceapp.com/api/user/login', userInfo)
      .then(res => {
        console.log(res.data)
        dispatch({type: AUTHENTICATE, payload: res.data})
        return res.data
      })
      .then(data => {
        return axios({
          url: 'https://holospaceapp.com/api/user/' + data.user_id,
          method: "GET",
          headers: {
            Authorization: "Bearer " + data.token
          }
        })
      })
      .then(res => {
        dispatch({type: ROOMS, payload: res.data.userRooms})
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