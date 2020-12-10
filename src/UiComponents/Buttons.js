import React from "react";

import Grid from "@material-ui/core/Grid";

import { Button } from "@dhis2/ui";
import styled from "styled-components";

const Container = styled.div`
  background-color: #F3F5F7;
  border-radius: 6px;
  padding: 16px;
`;


function Buttons() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <h4>Buttons</h4>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Basic button</p>
          <Button dataTest="dhis2-uicore-button" type="button">
            Click me
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Primary button</p>
          <Button dataTest="dhis2-uicore-button" primary type="button">
            Click me
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Secondary button</p>
          <Button dataTest="dhis2-uicore-button" secondary type="button">
            Click me
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Destructive button</p>
          <Button dataTest="dhis2-uicore-button" destructive type="button">
            Click me
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Disabled button</p>
          <Button dataTest="dhis2-uicore-button" disabled type="button">
            Click me
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Small button</p>
          <Button dataTest="dhis2-uicore-button" small type="button">
            Click me
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Large button</p>
          <Button dataTest="dhis2-uicore-button" large type="button">
            Click me
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Buttons;
