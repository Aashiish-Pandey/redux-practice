import React from "react";
import { buyIcecream } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function IceCreamContainer() {
  const icecream = useSelector((state) => state.iceCream.noOfIcecream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>No Of icecream:{icecream}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy 10 icecream</button>
    </div>
  );
}

export default IceCreamContainer;
