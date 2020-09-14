import React, { useState, useEffect, useCallback } from 'react';

import Signup from './components/signup.js'
import Login from './components/login.js'
import Logout from './components/logout.js'
import Home from './components/home.js'
import Settings from './components/settings.js'

import HeaderBar from './components/headerbar.js'
import { AlertBar } from '@dhis2/ui'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";


import data from "./data.js"
import { db, auth } from './firebase';

db.collection("times").add({
  title: "Rubiks jkjlnncubgfdgfdge",
})


function onAuthStateChange(callback) {
  return auth.onAuthStateChanged(user => {
    if (user) {
      callback({loggedIn: true, username: 'test' });
    } else {
      callback({loggedIn: false, username: ''});
    }
  });
}


function signup(email, pass){
  auth.createUserWithEmailAndPassword(email, pass)
      .then(res => {
        console.log("Sign-out Success", res)
        console.log(email)
      })
      .catch(err => {
        console.error(err)
      })
  }

function App() {
  const [user, setUser] = useState({ loggedIn: false, username: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  function login(username, password) {
    auth.signInWithEmailAndPassword(username, password);

  }

  function logout() {
    auth.signOut();
}

  function signup(email, pass){
    auth.createUserWithEmailAndPassword(email, pass)
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
                      !user.loggedIn ? (
                         <Signup onClick={requestSignup} />
                       ) : (
                          <Redirect to="/home" />
                       )
                       )}/>

               <Route path="/login" render={() => (
                   !user.loggedIn ? (
                       <Login onClick={requestLogin}/>
                   ) : (
                     <Redirect to="/home" />
                   )
                   )}/>

               <Route path="/logout" render={() => (
                   !user.loggedIn ? (
                      <Redirect to="/signup" />
                   ) : (
                     <Logout onClick={requestLogout}/>
                   )
                   )}/>
                <Route path="/home" render={() => (
                        !user.loggedIn ? (
                          <Redirect to="/signup"/>
                        ) : (
                          <Home user={user.loggedIn}/>
                        )
                        )}/>
                <Route path="/settings" render={() => (
                        !user.loggedIn ? (
                          <Redirect to="/signup"/>
                        ) : (
                          <Settings onClick={requestLogout}/>
                        )
                        )}/>
             </Switch>
           </div>
         </Router>
     </React.Fragment>
}


export default App;
