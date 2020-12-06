import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Link from "../../components/Link.js";
import { Button } from "@dhis2/ui";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";

import github from "../../images/github_logo.png";
import storybook from "../../images/storybook.svg";
import styles from "./styles.module.css";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  link: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    textAlign: "center",
  },

  cont: {
    paddingTop: "40px",
    paddingBottom: "40px",
  },
}));

function Links() {
  const handleClick = (link) => {
    window.open(link);
  };
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={12} className={styles.header}>
            <h2>Resources</h2>
          </Grid>
          <Grid spacing={16} item xs={12} sm={6} md={4}>
            <Card
              onClick={() =>
                handleClick("https://github.com/dhis2/design-system")
              }
              className={styles.card}
            >
              <CardContent className={classes.cardContent}>
                <h3>DHIS2 Design System on Github</h3>
                <p>
                  A lot of the content used in these tutorials are taken from
                  the design system on Github. This page contains the must
                  updated version of the Ui guidelines. If you ever are unsure
                  about how to develop layouts in DHIS2, how to use the proper
                  colors or anything related to the UI, then this is the place
                  to go
                </p>
                <a>Go to Github</a>
              </CardContent>
            </Card>
          </Grid>
          <Grid spacing={16} item xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleClick("https://ui.dhis2.nu/demo/")}
              className={styles.card}
            >
              <CardContent className={classes.cardContent}>
                <h3>Overview of all the UI components</h3>
                <p>
                  In Storybook, you will find all the possible UI components
                  that are developed in DHIS2.
                </p>
                <a>Go to Storybook</a>
              </CardContent>
            </Card>
          </Grid>
          <Grid spacing={16} item xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleClick("https://ui.dhis2.nu/#/api")}
              className={styles.card}
            >
              <CardContent className={classes.cardContent}>
                <h3>Api docs</h3>
                <p>
                  The Api documentation contains documentation for all the
                  different UI components. Here you will find all the props you
                  can use in the components and a description of what they mean.
                  You will also see how you can import the different components
                </p>
                <a>Go to Api docs</a>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Links;
