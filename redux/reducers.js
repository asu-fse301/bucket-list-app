import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return [...state, action.item];
    case actionTypes.COMPLETE_ITEM:
      const { completed, ...rest } = state[action.index];

      return [
        ...state.slice(0, action.index),
        { ...rest, completed: true },
        ...state.slice(action.index + 1),
      ];
    case actionTypes.REMOVE_ITEM:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case actionTypes.UPDATE_ITEM:
      return [
        ...state.slice(0, action.index),
        action.item,
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

export default combineReducers({
  items,
});
