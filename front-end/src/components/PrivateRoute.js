import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/userReducer";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const isLoggedIn = user.isLoggedIn;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getUser })(PrivateRoute);
