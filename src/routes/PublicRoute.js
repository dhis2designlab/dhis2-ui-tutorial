import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  onClick,
  restricted,
  ...rest
}) => {
  return (
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
