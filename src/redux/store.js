import {createStore,applyMiddleware} from 'redux';
import rootreducer from './rootReducer';
import{logger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(logger)))

console.log(store.getState())
export default store