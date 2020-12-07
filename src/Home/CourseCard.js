import React, { useContext} from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Check from "@material-ui/icons/CheckCircle";

import { Link } from "react-router-dom";

import { UserContext } from "../userContext";

import styled from "styled-components";


const LinkTo = styled(Link)`
  text-decoration: none;
`;

const CardComponent = styled(Card)`
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }
`;

function CourseCard({ section, index }) {
  const { completedCourses } = useContext(UserContext);

  const { title, short_info, quizId } = section;

  let courseCompleted = false
    
    completedCourses.forEach((course) => {
      if (course.name === title) {
        courseCompleted = true
      }
    }
    );
    

  return (
    <LinkTo
      key={index}
      to={{
        pathname: `/course/${index}`,
      }}
    >
      <CardComponent>
        <CardMedia
          style={{ paddingTop: "56.25%" }}
          image={quizId}
          title="Image title"
        />
        <CardContent>
          <h3>{title}</h3>
          {courseCompleted && (
            <p>
              <Check style={{ fill: "#43a047" }} /> Completed
            </p>
          )}
          <p>{short_info}</p>
        </CardContent>
        <CardActions>
           <p>Read more</p>
        </CardActions>
      </CardComponent>
    </LinkTo>
  );
}

export default CourseCard;
