import React, {useContext} from "react";


import Grid from "@material-ui/core/Grid";
import { Button } from "@dhis2/ui";
import styled from "styled-components";
import allCorrectImage from "../images/allCorrectBadge.png";
import finishedAllBadge from "../images/finishedAllBadge.png";
import firstCourseBadge from "../images/firstCourseBadge.png"
import fourthCourseBadge from "../images/fourthCourseBadge.png"


import { UserContext } from "../userContext";


const Container = styled.div`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 128px;
`;

function FinishedCourse({ points, setIndex,totalPoints }) {
  const { currentUser, completedCourses } = useContext(UserContext);
  const firstCourse = completedCourses?.length === 1 && currentUser?.loggedIn
  const fourthCourse = completedCourses?.length === 4 && currentUser?.loggedIn
  const finishedAll = completedCourses?.length >= 7 && currentUser?.loggedIn
  const allCorrectBadge = totalPoints === points && currentUser?.loggedIn

  return (
    <Container>
      <h2>Congratulation! You have now finished the quiz!</h2>
      <Grid container>

        <Grid item xs={12} sm={12} md={12}>
          <p>You got {points} points</p>
        </Grid>
        {firstCourse &&
        <Grid item xs={12} sm={6} md={6}>
          <img width="100%" src={firstCourseBadge} alt="medal for completion of first course" />
          <h5>Completion of your first course</h5>
          <p>You get a medal for completing your first course</p>
        </Grid>
        }
        {fourthCourse && 
        <Grid item xs={12} sm={6} md={6}>
          <img width="100%"  src={fourthCourseBadge} alt="medal for completion of fourth course" />
          <h5>Completion of your fourth course</h5>
          <p>You get a medal for completing your fourth course</p>
        </Grid>
        }
        {finishedAll && 
        <Grid item xs={12} sm={6} md={6}>
          <img width="100%" src={finishedAllBadge} alt="medal for completion of all available courses" />
          <h5>Completing all the courses</h5>
          <p>You get a medal for completing all the available course</p>
        </Grid>
        }
        {allCorrectBadge && 
          <Grid item xs={12} sm={6} md={6}>
              <img width="100%" src={allCorrectImage} alt="medal for getting all correct" />
              <h5>Getting all correct</h5>
              <p>You get a badge for getting all correct on a course</p>
          </Grid>
        }
          <Grid item xs={12} sm={12} md={12}>
            <Button
              dataTest="dhis2-uicore-button"
              onClick={setIndex}
              primary
              type="button"
            >
              Start over
            </Button>
          </Grid>       
      </Grid>
    </Container>
  );
}

export default FinishedCourse;
