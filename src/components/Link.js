import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

//import storybook from "../images/sb.png";
import { Button } from "@dhis2/ui";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";

import github from "../images/github_logo.png";
import storybook from "../images/storybook.svg";
import api from "../images/api.png";

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

function Link({title, info, link, img}) {
  const handleClick = () => {
    window.open(link);
  };
  const classes = useStyles();
  console.log(img)
  return (
    <Grid spacing={16} item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={img}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <h3>{title}</h3>
          <p>{info}</p>
        </CardContent>
        <CardActions>
          <Button
            dataTest="dhis2-uicore-button"
            name="Basic button"
            type="button"
            onClick={handleClick}
          >
            Go to Storybook
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Link;
