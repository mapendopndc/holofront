import { CREATE_ROOM, ROOMS, INVITE, DEAUTHENTICATE } from '../types';

const initialState = {
  rooms: []
};

export default (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case ROOMS:
      return {rooms: data}
    case CREATE_ROOM:
      return {rooms: [...state.rooms, {users: data.users, _id: data._id, name: data.name}]}
      case INVITE:
        var updatedRooms = state.rooms.map( room => {
          if (room._id === data._id) {
            return {
              ...room,
              users: data.users
            }
          } else {
            return { ...room }
          }
        })
      return {rooms: updatedRooms}
    case DEAUTHENTICATE:
      return {rooms: []}
    default:
      return state;
  }
};