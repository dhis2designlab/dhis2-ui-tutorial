import React, { useState, useCallback } from "react";

import { InputField } from "@dhis2/ui";
import { Button } from "@dhis2/ui-core";

import { CircularLoader } from "@dhis2/ui";
import Grid from "@material-ui/core/Grid";

import { auth } from "../firebase.js";
import { Link } from "react-router-dom";
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

const Error = styled.p`
  color: #b71c1c;
`;

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupState, setSignupState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signup = (username, password) => {
    auth.createUserWithEmailAndPassword(username, password).catch((error) => {
      let errorMessage = error.message;
      setErrorMessage(errorMessage);
    });
  };

  const requestsignup = useCallback((username, password) => {
    setSignupState("signing in");
    signup(username, password);
  }, []);

  return (
    <Main>
      {signupState === "signing in" && errorMessage === "" ? (
         <Loader>
            <CircularLoader large />
        </Loader>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <h2>Sign Up</h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <InputField
            name="Default"
            label="Username"
            value={username}
            placeholder="Type your username"
            onChange={(event) => {
              setUsername(event.value);
            }}
          />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <InputField
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
            name="Primary button"
            onClick={() => {
              requestsignup(username, password);
            }}
            primary
            type="button"
            value="default"
          >
            Sign Up
          </Button>
          </Grid>
         
          <Grid item spacing={3} xs={12} sm={12} md={12}>
          {errorMessage !== "" && <Error>{errorMessage}</Error>}
          <p>
            Do you already have an account? Sign in{" "}
            <Link to={`/login`}>here</Link>
          </p>
          </Grid>
          </Grid>
      
      )}
    </Main>
  );
}

export default Signup;
