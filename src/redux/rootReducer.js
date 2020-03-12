
import { combineReducers } from 'redux';

import showReducer from './show/showReducer';

const rootReducer = combineReducers({
  show: showReducer
});

export default rootReducer;