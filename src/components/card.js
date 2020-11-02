
import React, {useState} from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import ContentCommunication from "../images/com_big.png"
import LayoutSpacingStacking from "../images/color.png"
import Forms from "../images/color.png"
import Color from "../images/color.png"
import Typography from "../images/color.png"
import Icons from "../images/color.png"


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

function Cards({section, index}) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const {title, short_info, quizId } = section
  
  console.log(quizId)
  console.log(section)

  function handleChange(newValue){
    setIsOpen(newValue);
  }


  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          //image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*"
          image={quizId}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <h3>{title}</h3>
          <p>{short_info}</p>
        </CardContent>
        <CardActions>
          <Link className={classes.link} key={index}
            to={{
              pathname: `/course/${index}`,
            }}> <Button
            dataTest="dhis2-uicore-button"
            name="Basic button"
            type="button"
            onClick={handleChange}
            value={isOpen}>
            Read more
          </Button></Link>
        </CardActions>
      </Card>
)}

export default Cards;
