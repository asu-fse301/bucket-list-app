export const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  COMPLETE_ITEM: 'COMPLETE_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  item,
});

export const completeItem = ({ index }) => ({
  type: actionTypes.COMPLETE_ITEM,
  index,
});

export const removeItem = ({ index }) => ({
  type: actionTypes.REMOVE_ITEM,
  index,
});
