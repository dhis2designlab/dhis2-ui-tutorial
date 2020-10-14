
import React from 'react';

import {
  Link,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import logo from "../images/dhis2-logo.png";
import Grid from '@material-ui/core/Grid';
import { Settings } from '@dhis2/ui-icons';


const useStyles = makeStyles((theme) => ({
  nav: {
    background: 'white',
    height: '85px',
    position: 'fixed',
    boxShadow: '0 2px 4px -1px rgba(0,0,0,0.25)',
  },
  icon: {
    width: '40px',
  },
  settings: {
    textAlign: 'right',
    display: 'inline-block',
    margin: 'auto',
  },
  name: {
    color: 'black',
    textAlign: 'right',
    display: 'inline-block',
  },
  link: {
    textDecoration: 'none',
    textAlign: 'left',

  },
  img: {
    margin: 'auto',
  },
  logo: {
    maxHeight: '30px',
  }

}));


function HeaderBar({user}) {
  const classes = useStyles();
  const name = user ? user.username : ''

  return (
    <Grid container  spacing={2} className={classes.nav}>
      <Grid item className={classes.img} xs={5} sm={5} md={5}>
        <img src={logo} className={classes.logo}/>
      </Grid>
      <Grid item className={classes.settings} xs={5} sm={5} md={5}>
        <Link className={classes.link} to={`/settings`}>
          <p className={classes.name}>{name}</p>
          <Settings className={classes.icon}/>  
        </Link>
        </Grid>
    </Grid>
  );
}

export default HeaderBar;
