import {createStore} from 'redux';
import cakeReducer from './cakeReducer';
const store = createStore(cakeReducer)

console.log(store.getState())
export default store