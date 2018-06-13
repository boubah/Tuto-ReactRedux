import { combineReducers } from 'redux';
import UserReducer from './reducer_users';
import SelectUserReducer from './reducer_user_select';

const rootReducer = combineReducers({
  users : UserReducer,
  activeUser : SelectUserReducer
});

export default rootReducer;
