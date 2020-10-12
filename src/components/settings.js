import React, { useContext } from 'react';

import HeaderBar from './headerbar.js'
import Grid from  '@material-ui/core/Grid';
import Container from  '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@dhis2/ui-core'
import { Account } from '@dhis2/ui-icons'
import { UserContext } from "../userContext"

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: '80px',
    paddingBottom: '80px',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));


function Settings({ onClick, user }) {
  const classes = useStyles();

  let { currentUser } = useContext(UserContext)

  return (
      <Container className={classes.cardGrid} >
          <Grid item xs={12}>
            <div className={classes.paper}><h1>Settings</h1></div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}><Account /></div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}><p>Firstname Lastname</p></div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={classes.paper}><p>Completed courses</p></div>
            {currentUser.points.map(index => {
            return <p>{index.title} {index.points}</p>
            })}
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>Badge 2</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>Badge 3</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.paper}>Badge 4</div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={classes.paper}><Button
                dataTest="dhis2-uicore-button"
                name="Primary button"
                primary
                type="button"
                value="default"
                onClick={onClick}
              >
                Log out
              </Button></div>
          </Grid>
      </Container>
)
}
export default Settings;
