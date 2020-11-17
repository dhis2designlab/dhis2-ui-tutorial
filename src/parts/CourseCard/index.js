import React, { useState, useContext, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Info } from "@dhis2/ui-icons";
import Check from "@material-ui/icons/CheckCircle";

import { Button } from "@dhis2/ui";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { UserContext } from "../../userContext";

function CourseCard({ section, index }) {
  const { completedCourses } = useContext(UserContext);

  const { title, short_info, quizId } = section;

  console.log(quizId)

  let courseCompleted = false;

  completedCourses.map((course) => {
    console.log(course.name);
    if (course.name == title) {
      courseCompleted = true;
    }
  });
  console.log(quizId)
  return (
    <Link
      className={styles.link}
      key={index}
      to={{
        pathname: `/course/${index}`,
      }}
    >
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardMedia}
          image={quizId}
          title="Image title"
        />
        <CardContent className={styles.cardContent}>
          <h3>{title}</h3>
          {courseCompleted && (
            <>
              <Check style={{ fill: "#43a047" }} /> <span>Completed</span>
            </>
          )}
          <p>{short_info}</p>
        </CardContent>
        <CardActions>
          <a>Read more</a>
        </CardActions>
      </Card>
    </Link>
  );
}

export default CourseCard;
