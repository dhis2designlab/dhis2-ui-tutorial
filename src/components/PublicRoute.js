import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  onClick,
  restricted,
  ...rest
}) => {
  console.log("loggedIn " + isLoggedIn);
  console.log(Component);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} onClick={onClick} />
        )
      }
    />
  );
};

export default PublicRoute;
