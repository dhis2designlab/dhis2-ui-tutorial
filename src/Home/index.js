import React from "react";

import Grid from "@material-ui/core/Grid";
import CourseCard from "./CourseCard.js";
import Header from "./Header.js";
import Links from "./Links.js";

import styled from "styled-components";

import data from "../data.js";

const Main = styled.main`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: "blue";
`;

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={12}>
            <h2>Courses</h2>
          </Grid>
          {data.map((section, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <CourseCard
                  index={index}
                  section={section}
                  steps={section.steps}
                />
              </Grid>
            );
          })}
        </Grid>
        <Links />
      </Main>
    </>
  );
}

export default Home;
