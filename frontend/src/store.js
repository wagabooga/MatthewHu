import { createStore } from 'redux';
// this takes all
import rootReducer from './reducers';

export default (initialState) => {
  return createStore(rootReducer, initialState);
}