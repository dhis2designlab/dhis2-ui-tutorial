
import React, {useState} from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Button } from '@dhis2/ui';
import {
  Link,
} from "react-router-dom";    

import styles from "./styles.module.css"


function CourseCard({section, index}) {

  const [isOpen, setIsOpen] = useState(false);

  const {title, short_info, quizId } = section


  return (
    <Link className={styles.link} key={index}
    to={{
      pathname: `/course/${index}`,
    }}> 
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardMedia}
          image={quizId}
          title="Image title"
        />
        <CardContent className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{short_info}</p>
        </CardContent>
        <CardActions>
          <a>Read more</a>
        </CardActions>
      </Card>
    </Link>
)}

export default CourseCard;
