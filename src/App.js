import React, { useCallback, useContext } from "react";

import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Course from "./Course";

import Settings from "./Settings";
import ScrollToTop from "./scrollToTop.js";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import GlobalStyle from "./theme/globalStyles";

import NavBar from "./shared/NavBar.js";
import Copyright from "./shared/Copyright.js";
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
        <GlobalStyle />
        <NavBar
          user={currentUser}
          nrCourses={7}
          nrCompletedCourses={completedCourses.length}
          loggedIn={user}
        />
        <ScrollToTop>
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
        </ScrollToTop>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
