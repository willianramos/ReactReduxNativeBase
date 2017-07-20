import { ADD_ITEM, DELETE_ITEM } from '../constants';

export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state, 
        action.item
      ];
      
    case DELETE_ITEM:
      return state.filter( p => p !== action.item);

    default:
      return state;
  }
}
