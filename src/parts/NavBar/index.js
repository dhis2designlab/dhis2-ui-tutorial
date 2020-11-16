import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/dhis2-logo.png";
import Grid from "@material-ui/core/Grid";
import { Settings } from "@dhis2/ui-icons";
import { LinearLoader } from "@dhis2/ui";

import styles from "./styles.module.css";

function NavBar({ user, nrCourses, nrCompletedCourses, loggedIn }) {
  const name = user ? user.username : "";
  const completionRate = Math.floor((nrCompletedCourses / nrCourses) * 100);
 
  return (
    <Grid container className={styles.nav}>
      <Grid item className={styles.img} xs={4} sm={4} md={4}>
        <Link
          className={styles.link}
          to={{
            pathname: `/home`,
          }}
        >
          <img src={logo} className={styles.logo} />
        </Link>
      </Grid>
      {loggedIn ? <><Grid item className={styles.settings} xs={4} sm={4} md={4}>
        <div style={{ margin: "auto", textAlign: "center" }}>
        <p>Course completion ({completionRate}%)</p>
          <LinearLoader
            amount={completionRate}
            dataTest="dhis2-uicore-linearloader"
            width="300px"
          />
        </div>
      </Grid>
      <Grid item className={styles.settings} xs={4} sm={4} md={4}>
        <Link className={styles.link} to={`/settings`}>
          <p className={styles.name}>{name}</p>
          <Settings className={styles.icon} />
        </Link>
      </Grid></> : <Grid item className={styles.login} xs={6} sm={6} md={6}><Link
          className={styles.login}
          to={{
            pathname: `/login`,
          }}
        >
        <p>login</p>
        </Link></Grid>}
    </Grid>
  );
}

export default NavBar;
