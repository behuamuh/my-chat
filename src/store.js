import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { chat } from './redusers';
import handleNewMessage from './sagas';
import setupSocket from './sockets';
import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(chat, applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

export default store;
