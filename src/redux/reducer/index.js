import {combineReducers} from 'redux';
import {CLEAR_ALL_STATES} from '../action';
import contact from './contact';

const reducer = combineReducers({
  contact,
});

export default (state, action) => {
  let oldState = state;
  if (action.type === CLEAR_ALL_STATES) {
    oldState = undefined;
  }
  return reducer(oldState, action);
};
