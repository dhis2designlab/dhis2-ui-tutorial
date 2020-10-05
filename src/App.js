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
  const [loading, setLoading] = useState(false);

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


    return <React.Fragment>
          <Router>
           <div>
             <Switch>
               <Route path="/signup" render={() => (
                      !currentUser.loggedIn ? (
                         <Signup onClick={requestSignup} />
                       ) : (
                          <Redirect to="/home" />
                       )
                       )}/>

               <Route path="/login" render={() => (
                   !currentUser.loggedIn ? (
                       <Login onClick={requestLogin}/>
                   ) : (
                     <Redirect to="/home" />
                   )
                   )}/>

               <Route path="/logout" render={() => (
                   !currentUser.loggedIn ? (
                      <Redirect to="/signup" />
                   ) : (
                     <Logout onClick={requestLogout}/>
                   )
                   )}/>
                <Route path="/home" render={() => (
                        !currentUser.loggedIn ? (
                          <Redirect to="/signup"/>
                        ) : (
                          <Home user={currentUser}/>
                        )
                        )}/>
                <Route path="/settings" render={() => (
                        !currentUser.loggedIn ? (
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
