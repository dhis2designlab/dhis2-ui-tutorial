import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Input } from '@dhis2/ui-core'
import { Button } from '@dhis2/ui-core'
import { makeStyles } from '@material-ui/core/styles';
import Login from './login.js'

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

function Signup() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="xs">
      <h2 className={classes.heading}>Signup</h2>
      <Input
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
        </Button>
        <p>Do you already have an account? Sign in <Link to={`/login`}>here</Link></p>
    </Container>
  );
}

export default Signup;
