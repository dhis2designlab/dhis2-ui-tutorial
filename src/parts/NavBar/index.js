
import React from 'react';

import {
  Link,
} from "react-router-dom";

import logo from "../../images/dhis2-logo.png";
import Grid from '@material-ui/core/Grid';
import { Settings } from '@dhis2/ui-icons';

import styles from "./styles.module.css";



function NavBar({user}) {

  const name = user ? user.username : ''

  return (
    <Link className={styles.link}
    to={{
      pathname: `/home`,
    }}> 
    <Grid container  spacing={2} className={styles.nav}>
      <Grid  className={styles.img} xs={5} sm={5} md={5}>
        <img src={logo} className={styles.logo}/>
      </Grid>
      <Grid className={styles.settings} xs={5} sm={5} md={5}>
        <Link className={styles.link} to={`/settings`}>
          <p className={styles.name}>{name}</p>
          <Settings className={styles.icon}/>  
        </Link>
        </Grid>
    </Grid>
    </Link>
  );
}

export default NavBar;

