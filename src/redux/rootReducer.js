import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer'; // adjust the path if needed

const rootReducer = combineReducers({
  contacts: contactsReducer,
  // other reducers
});

export default rootReducer;
