import { ADD_ITEM, DELETE_ITEM } from './constants';

export const addItemAction = (item) => ({
  type: 'ADD_ITEM',
  item,
});

export const deleteItemAction = (item) => ({
  type: 'DELETE_ITEM',
  item,
});
