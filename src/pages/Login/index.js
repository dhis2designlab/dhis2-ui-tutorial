import React, { useState, useContext, useCallback } from 'react';

import Container from '@material-ui/core/Container';
import { Input } from '@dhis2/ui-core'
import { Button } from '@dhis2/ui-core'
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../../parts/NavBar'
import { UserContext } from "../../userContext"

import {
  Link,
} from "react-router-dom";
import LoadingScreen from '../../components/Loadingscreen.js';

import { auth } from '../../firebase.js'
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(30),
    fontFamily: 'Roboto, sans-serif',
  },
  input: {
    paddingBottom: theme.spacing(6),
  },
  heading: {
    textAlign: 'center',
    paddingBottom: theme.spacing(6),
  }
}));

function Login({ onClick }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading } = useContext(UserContext)

  function login(username, password) {
    
    auth.signInWithEmailAndPassword(username, password);
  }

  const requestLogin = useCallback((username, password) => {login(username, password);});


  return (
    <>
    <NavBar />
    <Container className={classes.cardGrid} maxWidth="xs">
      <h2 className={classes.heading}>Log In</h2>
      <Input
          className={classes.input}
          dataTest="dhis2-uiwidgets-inputfield"
          label="Default label"
          name="Default"
          placeholder="username"
          onChange={event => {
            setUsername(event.value)
          }}
          />
        <Input
          className={classes.input}
          dataTest="dhis2-uiwidgets-inputfield"
          label="Default label"
          name="Default"
          placeholder="password"
          type="password"
          onChange={event => {
            setPassword(event.value);
          }}

          />
          <Button
            dataTest="dhis2-uicore-button"
            name="Primary button"
            primary
            type="button"
            value="default"
            onClick={() => {
              requestLogin(username, password)
            }}
          >
            Log In
          </Button>
        <p>Do you not have an account? Create an account <Link to={`/signup`}>here</Link></p>
    </Container>
    </>
  );
}


export default Login;
