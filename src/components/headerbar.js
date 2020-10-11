
import React from 'react';

import {
  Link,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

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
  }
}));


function HeaderBar({user}) {
  const classes = useStyles();
  const name = user ? 'Logged in as ' + user.username : ''

  return (
    <div className={classes.nav}>
        <Link className={classes.link} to={`/settings`}>
            <div className={classes.name}>{name}</div>
        </Link>
    </div>
  );
}

export default HeaderBar;
