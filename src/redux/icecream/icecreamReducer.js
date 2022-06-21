import { BUY_ICECREAM } from "./icecreamType";

const initialState = {
  noOfIcecream: 100,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecream: state.noOfIcecream - 10,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
