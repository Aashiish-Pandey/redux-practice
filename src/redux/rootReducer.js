import iceCreamReducer from "./icecream/icecreamReducer";
import cakeReducer from "./cake/cakeReducer";

import { combineReducers } from "redux";

const rootreducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootreducer;
