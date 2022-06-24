import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  let {} = userData;
  useEffect(() => {
    fetchUsers();
  }, []);
  if (userData.loading) {
    return <h1>Loading.....</h1>;
  } else {
    return userData.users.map((item) => <h3>{item.name}</h3>);
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
