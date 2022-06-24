import iceCreamReducer from "./icecream/icecreamReducer";
import cakeReducer from "./cake/cakeReducer";
import userReducer from "./user/userReducer"

import { combineReducers } from "redux";

const rootreducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user:userReducer
});

export default rootreducer;
