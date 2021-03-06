import React from "react";

import Grid from "@material-ui/core/Grid";
import { ButtonStrip, Button, SplitButton } from "@dhis2/ui";

import styled from "styled-components";

const Container = styled.div`
  background-color: #F3F5F7;
  border-radius: 6px;
  padding: 16px;
`;

function Buttonstrip() {
  return (
    <Container>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <h4>ButtonStrip</h4>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <ButtonStrip dataTest="dhis2-uicore-buttonstrip">
              <Button
                onClick={console.log("click")}
                dataTest="dhis2-uicore-button"
                type="button"
              >
                Save
              </Button>
              <Button
                onClick={console.log("click")}
                dataTest="dhis2-uicore-button"
                type="button"
              >
                Save
              </Button>
              <Button
                onClick={console.log("click")}
                dataTest="dhis2-uicore-button"
                type="button"
              >
                Save
              </Button>
              <SplitButton dataTest="dhis2-uicore-splitbutton">
                Label?
              </SplitButton>
            </ButtonStrip>
          </Grid>
        </Grid>
      </Container>
  );
}

export default Buttonstrip;
