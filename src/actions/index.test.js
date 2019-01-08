import { addMessage, addUser } from '../actions';
import * as types from '../constants/ActionTypes';

describe('adding a message', () => {
  it('should create an action to add message with id 0', () => {
    const message = 'Something';
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'Me',
      id: 0,
    };
    expect(addMessage(message, 'Me')).toEqual(action);
  });
});

describe('adding a second message', () => {
  it('should create an action to add message with id 1', () => {
    const message = 'More something';
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'Me',
      id: 1,
    };
    expect(addMessage(message, 'Me')).toEqual(action);
  });
});

describe('adding a user', () => {
  it('should create an user with id 0', () => {
    const name = 'Ben';
    const action = {
      type: types.ADD_USER,
      name,
      id: 0,
    };
    expect(addUser(name)).toEqual(action);
  });
});

describe('adding a second user', () => {
  it('should create an user with id 1', () => {
    const name = 'Alice';
    const action = {
      type: types.ADD_USER,
      name,
      id: 1,
    };
    expect(addUser(name)).toEqual(action);
  });
});
