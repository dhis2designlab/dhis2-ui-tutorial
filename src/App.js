import React, { useState, useEffect, useCallback } from 'react';

import Signup from './components/signup.js'
import Login from './components/login.js'
import Logout from './components/logout.js'
import Home from './components/home.js'

import { HeaderBar } from '@dhis2/ui-widgets'

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
      callback({loggedIn: true });
    } else {
      callback({loggedIn: false});
    }
  });
}
function login(username, password) {
  auth.signInWithEmailAndPassword(username, password);
}

function logout() {
  auth.signOut();
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
  const [user, setUser] = useState({ loggedIn: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

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


  if(! user.loggedIn){
    return <React.Fragment>
          <HeaderBar appName="Example!" />
          <Router>
           <div>
             <Switch>
               <Route path="/signup">
                 <Signup onClick={requestSignup}/>
               </Route>
               <Route path="/login">
                 <Login onClick={requestLogin}/>
               </Route>

               <Route path="/home">
                 <Home />
               </Route>
               <Route path="/">
                 <Redirect to="/signup" />
               </Route>
             </Switch>
           </div>
         </Router>
     </React.Fragment>
   }

  else {
    console.log("user logged in");
    return <Logout onClick={requestLogout} />
  }

}

export default App;


/**return (
  <React.Fragment>
      <HeaderBar appName="Example!" />
      <Router>
       <div>
         <Switch>
           <Route path="/signup">
             <Signup />
           </Route>
           <Route path="/login">
             <Login />
           </Route>
           <Route path="/home">
             <Home />
           </Route>
           <Route path="/">
             <Redirect to="/signup" />
           </Route>
         </Switch>
       </div>
     </Router>
 </React.Fragment>
);**/
