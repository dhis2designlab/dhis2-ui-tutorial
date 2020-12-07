import React, { useContext } from "react";

import Grid from "@material-ui/core/Grid";
import { Button } from "@dhis2/ui-core";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { UserContext } from "../userContext";


function Settings({ onClick }) {
  const { currentUser, completedCourses, setCompletedCourses } = useContext(
    UserContext
  );

  function logout() {
    setCompletedCourses([]);
    onClick();
  }

  return (
    <main>
      <Grid container spacing={4}>
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
          <div>
            <h3>Completed courses</h3>
          </div>
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
    </main>
  );
}
export default Settings;