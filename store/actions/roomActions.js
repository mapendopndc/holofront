import axios from 'axios';
import { CREATE_ROOM } from '../types';

// create room
export const create_room = (roomInfo) => {
  return (dispatch) => {
    axios({
        url: 'https://holospaceapp.com/api/rooms',
        method: "POST",
        headers: {
          Authorization: "Bearer " + token
        },
        data: roomData
    })
      .then(res => {
        console.log(res)
        dispatch({type: CREATE_ROOM, payload: res})
      })
      .catch(err => {
        console.log(err)
      });
  };
};