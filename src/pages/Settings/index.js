import React, { useContext, useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@dhis2/ui-core";
import { Account } from "@dhis2/ui-icons";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { UserContext } from "../../userContext";

import { db } from "../../firebase";

import styles from "./styles.module.css";

function Settings({ onClick }) {
  const { currentUser, completedCourses, setCompletedCourses } = useContext(
    UserContext
  );

  function logout() {
    setCompletedCourses([]);
    onClick();
  }

  return (
    <main>
      <Container className={styles.cardGrid}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className={styles.paper}>
              <h1>Settings</h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.paper}>
              <Account className={styles.icon} />
              <p>Change avatar</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <p>Email: {currentUser.email}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <div className={styles.paper}>
              <h3>Completed courses</h3>
            </div>
          </Grid>
          {completedCourses.map((index) => {
            return (
              <Grid item xs={4} sm={4} md={4}>
                <Card className={styles.card}>
                  <CardMedia
                    className={styles.cardMedia}
                    image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*"
                    title="Image title"
                  />
                  <CardContent className={styles.cardContent}>
                    <h3>{index.name}</h3>
                    <p>Points: {index.points}</p>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}

          <Grid item xs={12} sm={12} md={12}>
            <div className={styles.paper}>
              <h3>Received badges</h3>
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={styles.paper}>Badge 2</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={styles.paper}>Badge 3</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={styles.paper}>Badge 4</div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={styles.paper}>
              <Button
                dataTest="dhis2-uicore-button"
                name="Primary button"
                primary
                type="button"
                value="default"
                onClick={logout}
              >
                Log out
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
export default Settings;