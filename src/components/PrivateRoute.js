import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  onClick,
  ...rest
}) => {
  console.log("privateRoute " + isLoggedIn);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} onClick={onClick} />
        ) : (
          <Redirect to="/signup" />
        )
      }
    />
  );
};

export default PrivateRoute;
