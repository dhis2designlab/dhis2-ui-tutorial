import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  onClick,
  ...rest
}) => {
  return (
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
