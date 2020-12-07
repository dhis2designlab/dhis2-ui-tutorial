import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Links() {
  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={12}>
            <h2>Resources</h2>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() =>
                handleClick("https://github.com/dhis2/design-system")
              }
            >
              <CardContent>
                <h3>DHIS2 Design System on Github</h3>
                <p>
                  A lot of the content used in these tutorials are taken from
                  the design system on Github. This page contains the must
                  updated version of the Ui guidelines. If you ever are unsure
                  about how to develop layouts in DHIS2, how to use the proper
                  colors or anything related to the UI, then this is the place
                  to go
                </p>
                <a
                  alt="link to github"
                  href="https://github.com/dhis2/design-system"
                >
                  Go to Github
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card onClick={() => handleClick("https://ui.dhis2.nu/demo/")}>
              <CardContent>
                <h3>Overview of all the UI components</h3>
                <p>
                  In Storybook, you will find all the possible UI components
                  that are developed in DHIS2.
                </p>
                <a alt="link to storybook" href="https://ui.dhis2.nu/demo">
                  Go to Storybook
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card onClick={() => handleClick("https://ui.dhis2.nu/#/api")}>
              <CardContent>
                <h3>Api docs</h3>
                <p>
                  The Api documentation contains documentation for all the
                  different UI components. Here you will find all the props you
                  can use in the components and a description of what they mean.
                  You will also see how you can import the different components
                </p>
                <a alt="link to api docs" href="https://ui.dhis2.nu/#/api">
                  >Go to Api docs
                </a>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Links;
