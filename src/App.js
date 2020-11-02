import React, { useCallback, useContext } from 'react';

import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Course from './pages/Course'

import Logout from './components/logout.js'
import Settings from './pages/Settings'

import NavBar from './parts/NavBar'
import Footer from './components/footer.js'
import Copyright from './components/copyright'
import { UserContext } from "./userContext"
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import { auth } from './firebase';

const useStyles = makeStyles((theme) => ({

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

}));

function App() {
  const { currentUser } = useContext(UserContext)
  const classes = useStyles();

  function login(username, password) {
    
    auth.signInWithEmailAndPassword(username, password);
  }

  function logout() {
    auth.signOut();
  }

  function signup(username, password) {
      auth.createUserWithEmailAndPassword(username, password)
  }

  const requestLogin = useCallback((username, password) => {login(username, password);});

  const requestLogout = useCallback(() => {
    logout();
  }, []);

  

  const requestSignup = useCallback((username, password) => {signup(username, password);});

  const user = currentUser == null ? false : currentUser.loggedIn

    return <React.Fragment>
          <Router>
           <div>
             <NavBar user={currentUser}/>
             <Switch>
               <Route path="/signup" render={() => (
                      !user  ? (
                         <Signup onClick={requestSignup} />
                       ) : (
                          <Redirect to="/home" />
                       )
                       )}/>

               <Route path="/login" render={() => (
                   !user ? (
                       <Login onClick={requestLogin}/>
                   ) : (
                     <Redirect to="/home" />
                   )
                   )}/>

               <Route path="/logout" render={() => (
                   !user ? (
                      <Redirect to="/signup" />
                   ) : (
                     <Logout onClick={requestLogout}/>
                   )
                   )}/>
                <Route path="/home" render={() => (
                        !user ? (
                          <Redirect to="/signup"/>
                        ) : (
                          <Home user={currentUser}/>
                        )
                        )}/>
                <Route path="/settings" render={() => (
                        !user ? (
                          <Redirect to="/signup"/>
                        ) : (
                          <Settings user={currentUser} onClick={requestLogout}/>
                        )
                        )}/>
                 <Route path="/course/:id" children={<Course user={currentUser} />} />
             </Switch>
             <footer className={classes.footer}>
                <Footer />
                <Copyright />
            </footer>
           </div>
         </Router>
     </React.Fragment>
}


export default App
