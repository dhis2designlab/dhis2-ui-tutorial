
import React, {useState} from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@dhis2/ui';
import {
  Link,
} from "react-router-dom";    


const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },

  link: {
    textDecoration: 'none',
  }
}));

function LoadingScreen() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);


  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <h3>dffdsf</h3>
          <p>fdsfdsd</p>
        </CardContent>

        <CardContent className={classes.cardContent}>
          <h3>dffdsf</h3>
          <p>fdsfdsd</p>
        </CardContent>
        <CardContent className={classes.cardContent}>
          <h3>dffdsf</h3>
          <p>fdsfdsd</p>
        </CardContent>
        <CardContent className={classes.cardContent}>
          <h3>dffdsf</h3>
          <p>fdsfdsd</p>
        </CardContent>
        <CardContent className={classes.cardContent}>
          <h3>dffdsf</h3>
          <p>fdsfdsd</p>
        </CardContent>
        <CardActions>
        <Button
            dataTest="dhis2-uicore-button"
            name="Basic button"
            type="button"
       >
            Read more
          </Button>
        </CardActions>
      </Card>
)}

export default LoadingScreen;
