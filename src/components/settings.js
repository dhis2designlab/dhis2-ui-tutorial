import React, { useContext } from 'react';

import HeaderBar from './headerbar.js'
import Grid from  '@material-ui/core/Grid';
import Container from  '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@dhis2/ui-core'
import { Account } from '@dhis2/ui-icons'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Link,
} from "react-router-dom";    
import { UserContext } from "../userContext"

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: '80px',
    paddingBottom: '80px',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },

  link: {
    textDecoration: 'none',
  },
  icon: {
    minWidth: '300px',
    minHeight: '200px',
  }
}));


function Settings({ onClick, user }) {
  const classes = useStyles();

  let { currentUser } = useContext(UserContext)

  return (
    <main>
      <Container className={classes.cardGrid}>
      <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className={classes.paper}><h1>Settings</h1></div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
                <Account className={classes.icon}/>
                <p>Change avatar</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
              <div>
                <p>Email: {currentUser.email}</p>
                <p>Username: [insert username]</p>
              </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <div className={classes.paper}><h3>Completed courses</h3></div>
          </Grid>
            {currentUser.points.map(index => {
            return <Grid item xs={4} sm={4} md={4}><Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <h3>{index.title}</h3>
              <p>Points: {index.points}</p>
            </CardContent>
          </Card></Grid>
            })}
          <Grid item xs={12} sm={12} md={12}>
          <div className={classes.paper}><h3>Received badges</h3></div>
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
      </Grid>
      </Container>
      </main>
)
}
export default Settings;


/** <CardActions>
              
            <Link className={classes.link} key={index}
                to={{
                  pathname: `/course/${index}`,
                }}> <Button
                dataTest="dhis2-uicore-button"
                name="Basic button"
                  // onClick={handleChange}
                  // value={isOpen}>
                type="button">
                Repeat course
              </Button></Link>
            </CardActions> */