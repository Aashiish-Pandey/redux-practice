import React from "react";
import { BuyCake } from "../redux/index";
import { useSelector, useDispatch } from "react-redux";

function HooksCakeContainer() {
  let noOfCakes = useSelector((state) => state.cake.noOfCakes);
  let dispatch = useDispatch();
  return (
    <div>
      <h2>Hooks No Of Cakes:{noOfCakes}</h2>
      <button onClick={()=>dispatch(BuyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
