import { combineReducers } from 'redux';

import counter1 from './counterReducer1';
import counter2 from './counterReducer2';

export default combineReducers({
  counter1, counter2
})