import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import messages from './messages';

const rootReducer = combineReducers({
  messages,
  routing: routerReducer,
});

export default rootReducer;
