import {combineReducers} from 'redux';

import persistedReducer from './slices/persistedSlice';
import sessionReducer from './slices/sessionSlice';

export default combineReducers({
  persistedReducer,
  sessionReducer,
});
