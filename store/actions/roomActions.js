import axios from 'axios';
import { CREATE_ROOM, INVITE } from '../types';

// create room
export const create_room = (roomData, token) => {
  
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
        dispatch({type: CREATE_ROOM, payload: res.data.createdRoom})
      })
      .catch(err => {
        console.log(err)
      });
  };
};

// invite friend to room
export const invite = (email, roomInfo, token) => {
  
  return (dispatch) => {
    axios.get('http://localhost:8082/user/id/' + email)
      .then(res => {
        console.log(res)
        console.log (token)
        return axios({
          url: 'http://localhost:8082/rooms/' + roomInfo._id,
          method: "PATCH",
          headers: {
            Authorization: "Bearer " + token
          },
          data: [
            { "propName": "users", "value": [...roomInfo.users, res.data.userId] }
          ]
        })
      })
      .then(res => {
        console.log(res)
        dispatch({type: INVITE, payload: {users: res.data.users, _id: roomInfo._id}})
      })
      .catch(err => {
        console.log(err)
      });
  };
};