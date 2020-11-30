import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import { InputField } from "@dhis2/ui";
import { Button } from "@dhis2/ui-core";
import NavBar from "../../parts/NavBar";


import { CircularLoader } from '@dhis2/ui';

import styles from "./styles.module.css";

import { Link } from "react-router-dom";

function Signup({ onClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupState, setSignupState] = useState("")


  const requestsignup = () => {
    setSignupState("signing in")
    onClick(username, password)
  };

  return (
    <>
      <Container className={styles.cardGrid} maxWidth="xs">
      {signupState == "signing in" ? <div className={styles.loader}><CircularLoader large/></div>:
        <>
        <h2 className={styles.heading}>Sign Up</h2>
        <InputField
          className={styles.input}
          dataTest="dhis2-uiwidgets-inputfield"
          label="Default label"
          name="Default"
          label="Username"
          value={username}
          placeholder="Type your username"
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
          name="Primary button"
          onClick={requestsignup}
          primary
          type="button"
          value="default"
        >
          Sign Up
        </Button>
        <p>
          Do you already have an account? Sign in{" "}
          <Link to={`/login`}>here</Link>
        </p></>}
      </Container>
    </>
  );
}

export default Signup;
