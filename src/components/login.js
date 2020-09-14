import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Input } from '@dhis2/ui-core'
import { Button } from '@dhis2/ui-core'
import { makeStyles } from '@material-ui/core/styles';
import Signup from './signup.js'

import {
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(30),
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
  const [username, setUsername] = useState("h");
  const [password, setPassword] = useState("h");

  return (
    <Container className={classes.cardGrid} maxWidth="xs">
      <h2 className={classes.heading}>Login</h2>
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
              onClick(username, password)
            }}
          >
            Log in
          </Button>
        <p>Do you not have an account? Create an account <Link to={`/signup`}>here</Link></p>
    </Container>
  );
}


export default Login;
