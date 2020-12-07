import React, { useState, useCallback } from "react";

import Container from "@material-ui/core/Container";
import { InputField } from "@dhis2/ui";
import { Button } from "@dhis2/ui-core";

import { Link } from "react-router-dom";

import { CircularLoader } from "@dhis2/ui";

import { auth } from "../firebase.js";

import styled from 'styled-components';

const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
`

const Heading = styled.h2`
    text-align: center;
    padding-bottom: 6px;
`

const Error = styled.p`
    color: #b71c1c;

`
function Login({}) {
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
  });

  return (
    <>
      <Container maxWidth="xs">
        {loggedInState == "logging in" && errorMessage == "" ? (
          <Loader>
            <CircularLoader large />
          </Loader>
        ) : (
          <>
            <Heading>Log In</Heading>
            <InputField
              dataTest="dhis2-uiwidgets-inputfield"
              placeholder="Type your username"
              label="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.value);
              }}
            />
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
            {errorMessage !== "" && (
              <Error>{errorMessage}</Error>
            )}
            <p>
              Do you not have an account? Create an account{" "}
              <Link to={`/signup`}>here</Link>
            </p>
          </>
        )}
      </Container>
    </>
  );
}

export default Login;
