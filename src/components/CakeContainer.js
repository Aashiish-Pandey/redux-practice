import React from "react";
import { BuyCake } from "../redux/index";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes :{props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(BuyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
