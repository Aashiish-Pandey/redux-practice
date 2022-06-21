import React from "react";
import { connect } from "react-redux";
import { buyIcecream ,BuyCake} from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>ItemContainer: {props.item}</h2>
      <button onClick={()=>props.buyItem()}>item Button</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.noOfCakes
    : state.iceCream.noOfIcecream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const dispatchFunction = ownProps.cake? ()=>dispatch(BuyCake()) : ()=>dispatch(buyIcecream())
    return {
        buyItem:dispatchFunction
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
