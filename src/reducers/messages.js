import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      const { message, author, id } = action;
      return [...state, { message, author, id }];
    default:
      return state;
  }
};

export default messages;
