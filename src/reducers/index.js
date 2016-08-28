import { combineReducers } from 'redux';
import usersReucer from './users';
const rootReducer = combineReducers({
  users: usersReucer
});

export default rootReducer;
