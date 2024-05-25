import rootReducer from './reducers/root-reducer';
import { thunk } from 'redux-thunk'; // Use import { thunk } or import thunk directly
// import { logger } from 'redux-logger'; // Optional middleware for logging
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };