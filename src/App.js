import React, { useState, useEffect } from 'react';

import Signup from './components/signup.js'
import Login from './components/login.js'
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
import { db } from './firebase';

db.collection("times").add({
  title: "Rubiks jkjlnncubgfdgfdge",
})

function App() {
  return (
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
  );
}

export default App;
