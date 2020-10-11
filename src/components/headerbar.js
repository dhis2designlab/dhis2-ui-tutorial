
import React from 'react';

import {
  Link,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import logo from "../images/dhis2-logo.png";
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  nav: {
    background: 'white',
    height: '45px',
    position: 'fixed',
    width: '100%',
    boxShadow: '0 2px 4px -1px rgba(0,0,0,0.25)',
  },
  icon: {
    fill: 'white',
  },
  name: {
    color: 'black',
    textAlign: 'right',
  },
  link: {
    textDecoration: 'none',
    maxHeight: '45px',
    marginTop: 'auto',
    marginBottom: 'auto',

  },
  img: {
    maxHeight: '30px',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingLeft: '45px',

  }
}));


function HeaderBar({user}) {
  const classes = useStyles();
  const name = user ? 'Logged in as ' + user.username : ''

  return (

    <Grid container className={classes.nav}>
      <Grid className={classes.img} xs={5} sm={5} md={5}>
        <img src={logo} className={classes.img}/>
      </Grid>
      <Grid xs={5} sm={5} md={5}>
        <Link className={classes.link} to={`/settings`}>
            <div className={classes.name}>{name}</div>
        </Link>
        </Grid>
    </Grid>
  );
}

export default HeaderBar;
