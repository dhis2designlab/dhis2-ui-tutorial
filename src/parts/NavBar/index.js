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
      <Grid item xs={4} sm={4} md={4}>
        <Link
          className={styles.link}
          to={{
            pathname: `/home`,
          }}
        >
          <img src={logo} className={styles.logo} />
        </Link>
      </Grid>
      {loggedIn ? (
        <>
          <Grid item className={styles.settings} xs={4} sm={4} md={4}>
          <div className={styles.loader}>
            <div style={{ margin: "auto", textAlign: "center" }}>
              <p>Completion rate: {completionRate}%</p>
              <LinearLoader
                amount={completionRate}
                dataTest="dhis2-uicore-linearloader"
                width="300px"
              />
            </div>
            </div>
          </Grid>
          <Grid item className={styles.settings} xs={4} sm={4} md={4}>
            <Link className={styles.link} to={`/settings`}>
              <p className={styles.name}>{name}</p>
              <Settings className={styles.icon} />
            </Link>
          </Grid>
        </>
      ) : (
        <Grid item className={styles.login} xs={8} sm={8} md={8}>
          <Link
            to={{
              pathname: `/login`,
            }}
          >
            <p>login</p>
          </Link>
        </Grid>
      )}
    </Grid>
  );
}

export default NavBar;
