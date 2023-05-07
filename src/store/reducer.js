import { combineReducers } from 'redux';

import { filterReducer } from './filter/slice';
import { phoneReducer } from './phone/slice';

export const reducer = combineReducers({
  contacts: phoneReducer,
  filter: filterReducer,
});
