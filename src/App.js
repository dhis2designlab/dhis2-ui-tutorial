import React, { useCallback, useContext, useState } from "react";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Course from "./pages/Course";

import Settings from "./pages/Settings";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import NavBar from "./parts/NavBar";
import Footer from "./parts/Footer";
import Copyright from "./components/Copyright";
import { UserContext } from "./userContext";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { auth } from "./firebase";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {
  const { currentUser, completedCourses } = useContext(UserContext);

  const classes = useStyles();

  function logout() {
    auth.signOut();
  }

  const requestLogout = useCallback(() => {
    logout();
  }, []);

  const user = currentUser == null ? false : currentUser.loggedIn;

  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar
          user={currentUser}
          nrCourses={7}
          nrCompletedCourses={completedCourses.length}
          loggedIn={user}
        />
        <Switch>
          <PublicRoute
            isLoggedIn={user}
            path="/signup"
            component={Signup}
            exact
          />
          <PublicRoute
            isLoggedIn={user}
            path="/login"
            component={Login}
            exact
          />
          <Route path="/home" component={Home} exact />
          <Redirect from="/" to="/home" exact />
          <PrivateRoute
            isLoggedIn={user}
            path="/settings"
            component={Settings}
            onClick={requestLogout}
            exact
          />
          <Route path="/course/:id" component={Course} />
        </Switch>
        <footer className={classes.footer}>
          <Footer />
          <Copyright />
        </footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
