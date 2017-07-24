import { createStore } from 'redux'
import rootReducer from './reducers'
import {RealmManager} from './realmManager'

export default function configureStore() {
  let store = createStore(rootReducer)
  return store
}