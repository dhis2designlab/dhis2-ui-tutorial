
import React from 'react';

import {
  Link,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import { Account } from '@dhis2/ui-icons'
const useStyles = makeStyles((theme) => ({
  nav: {
    padding: '20px 20px',
    background: '#2d6692',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right'
  },
  icon: {
    fill: 'white',
  }
}));


function HeaderBar() {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <div>
        <Link to={`/settings`}><Account className={classes.icon}/></Link>
      </div>
    </div>
  );
}

export default HeaderBar;
