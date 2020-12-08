import React, { useContext } from "react";

import Grid from "@material-ui/core/Grid";
import { Button } from "@dhis2/ui-core";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import allCorrectBadge from "../images/allCorrectBadge.png";
import finishedAllBadge from "../images/finishedAllBadge.png";
import firstCourseBadge from "../images/firstCourseBadge.png"
import fourthCourseBadge from "../images/fourthCourseBadge.png"

import allCorrectGrayscale from "../images/allCorrectGrayscale.png";
import finishedAllGrayscale from "../images/finishedAllGrayscale.png";
import firstCourseGrayscale from "../images/firstCourseGrayscale.png"
import fourthCourseGrayscale from "../images/fourthCourseGrayscale.png"

import { UserContext } from "../userContext";

import styled from "styled-components";

const Main = styled.main`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 128px;
`;

// TODO: Simplify code
function Settings({ onClick }) {
  const { currentUser, completedCourses, setCompletedCourses } = useContext(
    UserContext
  );

  function logout() {
    setCompletedCourses([]);
    onClick();
  }
 
  const firstCourse = completedCourses?.length >= 1
  const fourthCourse = completedCourses?.length >= 4
  const finishedAll = completedCourses?.length >= 8
  console.log("finished " + finishedAll)
  console.log(completedCourses.length)
  const allCorrect = false
  const hasReceivedBadge = firstCourse || fourthCourse || finishedAll || allCorrect
  
  return (
    <Main>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <div>
            <h1>Settings</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div>
            <p>
              <b>Email:</b> {currentUser.email}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div>
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
        <Grid item xs={12} sm={12} md={12}>
            <h2>Completed courses</h2>
            {completedCourses.length < 1 && <Grid item xs={12} sm={12} md={12}><p>You have not completed any courses yet. Go to the home page to complete some!</p></Grid>}
        </Grid>
        {completedCourses.map((index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  style={{ height: 0, paddingTop: "56%" }}
                  image={index.courseImg}
                  title="Image title"
                />
                <CardContent>
                  <h3>{index.name}</h3>
                  <p>Points received: {index.points}</p>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Grid container>
      <Grid item xs={12} sm={12} md={12}>
            <h2>Received badges</h2>
        </Grid>
        {!hasReceivedBadge && <p>You have not received any badges yet.</p>}
        {firstCourse && 
          <Grid  item xs={12} sm={6} md={4}>
          <img width='100%' src={firstCourseBadge} alt="first course badge"/>
          <h5>Your first course</h5>
          <p>Badge for completing your first course</p>
          </Grid>
        } 
        {fourthCourse &&
          <Grid item xs={12} sm={6} md={4}>
            <img width='100%' src={fourthCourseBadge} alt="fourth course badge"/>
            <h5>Your fourth course</h5>
            <p>Badge for having completed more than four courses</p>
          </Grid>
        }
        {allCorrect &&
          <Grid item xs={12} sm={6} md={4}>
            <img width='100%' src={allCorrectBadge} alt="first course badge"/>
            <h5>All correct</h5>
            <p>Badge for getting all correct on a course</p>
          </Grid>
        }
        {finishedAll && 
        <Grid item xs={12} sm={6} md={4}>
          <img width='100%' src={finishedAll ? finishedAllBadge : finishedAllGrayscale} alt="first course badge"/>
          <h5>Completing all courses</h5>
          <p>Badge for completing all the courses</p>
        </Grid>
        }
      <Grid item xs={12} sm={12} md={12}>
            <h2>Possible badges</h2>
        </Grid>
      {!firstCourse &&
      <Grid  item xs={12} sm={6} md={4}>
         <img width='100%' src={firstCourseGrayscale} alt="first course badge"/>
         <h5>Your first course</h5>
         <p>Badge for completing your first course</p>
        </Grid>
      }
      {!fourthCourse &&
        <Grid item xs={12} sm={6} md={4}>
          <img width='100%' src={fourthCourse ? fourthCourseBadge : fourthCourseGrayscale} alt="fourth course badge"/>
          <h5>Your fourth course</h5>
          <p>Badge for having completed more than four courses</p>
        </Grid>
       }
      {!allCorrect &&
        <Grid item xs={12} sm={6} md={4}>
          <img width='100%' src={allCorrect ? allCorrectBadge : allCorrectGrayscale} alt="first course badge"/>
          <h5>All correct</h5>
          <p>Badge for getting all correct on a course</p>
        </Grid>
      }
      {!finishedAll &&
        <Grid item xs={12} sm={6} md={4}>
          <img width='100%' src={finishedAll ? finishedAllBadge : finishedAllGrayscale} alt="first course badge"/>
          <h5>Completing all courses</h5>
          <p>Badge for completing all the courses</p>
      </Grid>
      }
      </Grid>
    </Main>
  );
}
export default Settings;
