import React, {useState} from 'react';

import Container from '@material-ui/core/Container';
import { Input } from '@dhis2/ui-core'
import { Button } from '@dhis2/ui-core'
import { makeStyles } from '@material-ui/core/styles';
import HeaderBar from './headerbar.js'

import {
  Link,
} from "react-router-dom";

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

function Signup({onClick}) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <HeaderBar />
    <Container className={classes.cardGrid} maxWidth="xs">
      <h2 className={classes.heading}>Sign Up</h2>
      <Input
        className={classes.input}
        dataTest="dhis2-uiwidgets-inputfield"
        label="Default label"
        name="Default"
        placeholder="username"
        onChange={event => {
          setUsername(event.value);
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
          onClick={() => onClick(username, password)}
          primary
          type="button"
          value="default"
        >
          Sign Up
        </Button>
        <p>Do you already have an account? Sign in <Link to={`/login`}>here</Link></p>
    </Container>
    </>
  );
}

export default Signup;
