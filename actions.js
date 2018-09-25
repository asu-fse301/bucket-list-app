export const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
};

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  item,
});
