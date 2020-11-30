import React, { useState, useContext, useCallback } from "react";

import Container from "@material-ui/core/Container";
import { InputField, Input } from "@dhis2/ui";
import { Button } from "@dhis2/ui-core";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "../../parts/NavBar";
import { UserContext } from "../../userContext";

import { Link } from "react-router-dom";
import LoadingScreen from "../../components/Loadingscreen.js";
import { CircularLoader } from '@dhis2/ui';
import styles from "./styles.module.css";

import { auth } from "../../firebase.js";

function Login({ }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInState, setLoggedInState] = useState("")
  const [errorMessage, setErrorMessage] = useState("");

  const login = (username, password) => {
    auth.signInWithEmailAndPassword(username, password)
    .catch((error) => {

      let errorMessage = error.message;
      setErrorMessage(errorMessage)
      
    });
  }

  const requestLogin = useCallback((username, password) => {
    setLoggedInState("logging in")
    login(username, password);
  });


  return (
    <>
      <Container className={styles.cardGrid} maxWidth="xs">
      {loggedInState == "logging in" && errorMessage == "" ? <div className={styles.loader}><CircularLoader large/></div>:
        <>
        <h2 className={styles.heading}>Log In</h2>
        <InputField
          className={styles.input}
          dataTest="dhis2-uiwidgets-inputfield"
          placeholder="Type your username"
          label="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.value);
          }}
        />
        <InputField
          className={styles.input}
          dataTest="dhis2-uiwidgets-inputfield"
          label="Password"
          placeholder="Type your password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.value);
          }}
        />
        <Button
          dataTest="dhis2-uicore-button"
          className={styles.input}
          name="Primary button"
          primary
          type="button"
          value="default"
          onClick={() => {
            requestLogin(username, password);
          }}
        >
          Log In
        </Button>
        {errorMessage !== "" && <p className={styles.error}>{errorMessage}</p>}
        <p>
          Do you not have an account? Create an account{" "}
          <Link to={`/signup`}>here</Link>
      </p></> }
      </Container>
    </>
  );
}

export default Login;
