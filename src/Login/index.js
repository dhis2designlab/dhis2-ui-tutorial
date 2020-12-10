import React, { useState, useCallback } from "react";

import { InputField } from "@dhis2/ui";
import { Button } from "@dhis2/ui-core";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";

import { CircularLoader } from "@dhis2/ui";

import { auth } from "../firebase.js";

import styled from "styled-components";

const Main = styled.main`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  background-color: "blue";
  padding-top: 128px;
  @media (max-width: 959px) {
    width: 80%
  }
`;

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
`;

const Heading = styled.h2`
  text-align: center;
  padding-bottom: 6px;
`;

const Error = styled.p`
  color: #b71c1c;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInState, setLoggedInState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = (username, password) => {
    auth.signInWithEmailAndPassword(username, password).catch((error) => {
      let errorMessage = error.message;
      setErrorMessage(errorMessage);
    });
  };

  const requestLogin = useCallback((username, password) => {
    setLoggedInState("logging in");
    login(username, password);
  }, []);

  return (
    <Main>
      {loggedInState === "logging in" && errorMessage === "" ? (
        <Loader>
          <CircularLoader large />
        </Loader>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
          <Heading>Log In</Heading>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <InputField
            dataTest="dhis2-uiwidgets-inputfield"
            placeholder="Type your username"
            label="Username"
            value={username}
            onChange={(event) => {
              setUsername(event.value);
            }}
          />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <InputField
            dataTest="dhis2-uiwidgets-inputfield"
            label="Password"
            placeholder="Type your password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.value);
            }}
          />
           </Grid>
           <Grid item xs={12} sm={12} md={12}>
          <Button
            dataTest="dhis2-uicore-button"
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
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          {errorMessage !== "" && <Error>{errorMessage}</Error>}
          <p>
            Do you not have an account? Create an account{" "}
            <Link to={`/signup`}>here</Link>
          </p>
          </Grid>
        </Grid>
      )}
    </Main>
  );
}

export default Login;
