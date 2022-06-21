import {createStore} from 'redux';
import rootreducer from './rootReducer';
const store = createStore(rootreducer)

console.log(store.getState())
export default store