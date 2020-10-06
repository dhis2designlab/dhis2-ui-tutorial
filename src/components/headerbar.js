
import React from 'react';

import {
  Link,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    padding: '20px 20px',
    background: '#2d6692',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    minHeight: '15px',
  },
  icon: {
    fill: 'white',
  },
  name: {
    color: 'white',
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
            <span className={classes.name}>{name}</span>
        </Link>
    </div>
  );
}

export default HeaderBar;
