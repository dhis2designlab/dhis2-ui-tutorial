import React from "react";

import Grid from "@material-ui/core/Grid";
import { LinearLoader } from "@dhis2/ui";

import styled from "styled-components";

const Container = styled.div`
  background-color: #F3F5F7;
  border-radius: 6px;
  padding: 16px;
`;


function Linearloader() {
  return (
    <Container>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <h4>LinearLoader</h4>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <LinearLoader
              amount={60}
              dataTest="dhis2-uicore-linearloader"
              margin="12px"
              width="300px"
            />
          </Grid>
      </Grid>
    </Container>
  );
}

export default Linearloader;
