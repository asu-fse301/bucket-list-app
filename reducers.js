import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const items = (state = [], action) => {
  if (action.type === actionTypes.ADD_ITEM) {
    return [...state, action.item];
  }

  return state;
};

export default combineReducers({
  items,
});
