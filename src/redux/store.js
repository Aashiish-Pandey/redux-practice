import {createStore,applyMiddleware} from 'redux';
import rootreducer from './rootReducer';
import thunk from 'redux-thunk'
import{logger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(logger,thunk)))

console.log(store.getState())
export default store