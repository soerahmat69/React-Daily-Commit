// rootReducer.js
import { combineReducers } from 'redux';
import { CounterReducer, CounterReducerText,LoginAuth } from './CounterReducerX';

const rootReducer = combineReducers({
  counter: CounterReducer,
  Textset: CounterReducerText,
  isLogin: LoginAuth,
  // add other reducers here
});

export default rootReducer;
