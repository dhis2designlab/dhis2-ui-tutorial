
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

function CourseCard({section, index}) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const {title, short_info, quizId } = section


  return (
    <Link className={classes.link} key={index}
    to={{
      pathname: `/course/${index}`,
    }}> 
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={quizId}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <h3>{title}</h3>
          <p>{short_info}</p>
        </CardContent>
        <CardActions>
          <Button
            dataTest="dhis2-uicore-button"
            name="Basic button"
            type="button"
            value={isOpen}>
            Read more
          </Button>
        </CardActions>
      </Card>
    </Link>
)}

export default CourseCard;
