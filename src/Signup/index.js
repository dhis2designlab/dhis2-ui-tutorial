import React, { useState, useCallback } from "react";

import Container from "@material-ui/core/Container";
import { InputField } from "@dhis2/ui";
import { Button } from "@dhis2/ui-core";

import { CircularLoader } from "@dhis2/ui";

import { auth } from "../firebase.js";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupState, setSignupState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signup = (username, password) => {
    auth.createUserWithEmailAndPassword(username, password).catch((error) => {
      let errorMessage = error.message;
      console.log("error " + errorMessage);
      setErrorMessage(errorMessage);
    });
  };

  const requestsignup = useCallback((username, password) => {
    setSignupState("signing in");
    signup(username, password);
  }, []);

  return (
    <>
      <Container maxWidth="xs">
        {signupState === "signing in" && errorMessage === "" ? (
          <CircularLoader large />
        ) : (
          <>
            <h2>Sign Up</h2>
            <InputField
              dataTest="dhis2-uiwidgets-inputfield"
              name="Default"
              label="Username"
              value={username}
              placeholder="Type your username"
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
              onClick={() => {
                requestsignup(username, password);
              }}
              primary
              type="button"
              value="default"
            >
              Sign Up
            </Button>
            {errorMessage !== "" && <p>{errorMessage}</p>}
            <p>
              Do you already have an account? Sign in{" "}
              <Link to={`/login`}>here</Link>
            </p>
          </>
        )}
      </Container>
    </>
  );
}

export default Signup;
