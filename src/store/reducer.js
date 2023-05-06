import { combineReducers } from 'redux';
// import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
 import { phoneReducer } from './phone/slice';

export const reducer = combineReducers({
  //  contacts: contactsReducer,
   contacts: phoneReducer ,
  filter: filterReducer,
});
