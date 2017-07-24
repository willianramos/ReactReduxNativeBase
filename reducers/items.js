import { ADD_ITEM, DELETE_ITEM } from '../constants';
import {RealmManager} from '../realmManager'


const realm = new RealmManager()
const persisted = realm.fetchObjects('Item');

export default function itemsReducer(state = persisted, action) {
  switch (action.type) {
    case ADD_ITEM:
      realm.addObject(action.item, 'Item')

      return realm.fetchObjects('Item');
      
    case DELETE_ITEM:
      realm.deleteObject(action.item)

      return realm.fetchObjects('Item');

    default:
      return state;
  }
}
