import React, { useState, useEffect, useCallback, useContext } from 'react';

import Signup from './components/signup.js'
import Login from './components/login.js'
import Logout from './components/logout.js'
import Home from './components/home.js'
import Settings from './components/settings.js'
import { UserContext } from "./userContext"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import { auth } from './firebase';


function App() {
  const {currentUser, setCurrentUser} = useContext(UserContext)

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
             </Switch>
           </div>
         </Router>
     </React.Fragment>
}


export default App
