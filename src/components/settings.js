import React from 'react';

import HeaderBar from './headerbar.js'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@dhis2/ui-core'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    fontFamily: 'Roboto, sans-serif',

  },
}));


function Settings({ onClick, user }) {
  const classes = useStyles();

  return (
    <>
      <HeaderBar user={user}/>
      <Container className={classes.cardGrid} maxWidth="md">
          <h1>Settings</h1>
          <p>You are logged in</p>
          <Button
            dataTest="dhis2-uicore-button"
            name="Primary button"
            primary
            type="button"
            value="default"
            onClick={onClick}
          >
            Log out
          </Button>
      </Container>
    </>

)
}
export default Settings;
