import React, {useState} from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Input } from '@dhis2/ui-core'
import { Button } from '@dhis2/ui-core'
import { makeStyles } from '@material-ui/core/styles';
import Login from './login.js'
import {fire } from '../firebase'

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

function Signup({onClick}) {
  const classes = useStyles();
  const [username, setUsername] = useState("h");
  const [password, setPassword] = useState("h");

  const handleSubmit = async(e) => {
  e.preventDefault();
  // Sign up code here.
}


  return (
    <Container className={classes.cardGrid} maxWidth="xs">
      <h2 className={classes.heading}>Signup</h2>
      <input
      onChange={event => {
        setUsername(event.target.value);
      }}
    />
    <input
      type="password"
      onChange={event => {
        setPassword(event.target.value);
      }}
    />
    <button
      onClick={() => onClick(username, password)}
    >
      Login
    </button>
        <p>Do you already have an account? Sign in <Link to={`/login`}>here</Link></p>
    </Container>
  );
}

export default Signup;

/**<Input
  className={classes.input}
  dataTest="dhis2-uiwidgets-inputfield"
  label="Default label"
  name="Default"

  placeholder="username"
  />
<Input
  className={classes.input}
  dataTest="dhis2-uiwidgets-inputfield"
  label="Default label"
  name="Default"

  placeholder="password"
  />
  <Button
    dataTest="dhis2-uicore-button"
    name="Primary button"
    onClick={console.log("Hei")}
    primary
    type="button"
    value="default"
  >
    Sign in
  </Button>**/
