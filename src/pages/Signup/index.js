import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import { Input } from "@dhis2/ui-core";
import { Button } from "@dhis2/ui-core";
import NavBar from "../../parts/NavBar";

import styles from "./styles.module.css";

import { Link } from "react-router-dom";

function Signup({ onClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavBar />
      <Container className={styles.cardGrid}>
        <h2 className={styles.heading}>Sign Up</h2>
        <Input
          className={styles.input}
          dataTest="dhis2-uiwidgets-inputfield"
          label="Default label"
          name="Default"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.value);
          }}
        />
        <Input
          className={styles.input}
          dataTest="dhis2-uiwidgets-inputfield"
          label="Default label"
          name="Default"
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPassword(event.value);
          }}
        />
        <Button
          dataTest="dhis2-uicore-button"
          name="Primary button"
          onClick={() => onClick(username, password)}
          primary
          type="button"
          value="default"
        >
          Sign Up
        </Button>
        <p>
          Do you already have an account? Sign in{" "}
          <Link to={`/login`}>here</Link>
        </p>
      </Container>
    </>
  );
}

export default Signup;
