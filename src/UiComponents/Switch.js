import React from "react";

import Grid from "@material-ui/core/Grid";
import { Switch } from "@dhis2/ui";

import styled from "styled-components";

const Container = styled.div`
  background-color: #F3F5F7;
  border-radius: 6px;
  padding: 16px;
`;


function SwitchComponent() {
  return (
    <Container>
      <Grid container xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={12}>
            <h4>Switch</h4>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <p>Default</p>
            <Switch
              dataTest="dhis2-uicore-switch"
              label="Switch"
              name="Ex"
              onChange={function onChange() {
                console.log("switch");
              }}
              value="default"
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <p>Checked </p>
            <Switch
              checked
              dataTest="dhis2-uicore-switch"
              label="Switch"
              name="Ex"
              onChange={function onChange() {
                console.log("switch");
              }}
              value="checked"
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <p>Disabled</p>
            <Switch
              dataTest="dhis2-uicore-switch"
              disabled
              label="Switch"
              name="Ex"
              onChange={function onChange() {
                console.log("switch");
              }}
              value="disabled"
            />
            <Switch
              checked
              dataTest="dhis2-uicore-switch"
              disabled
              label="Switch"
              name="Ex"
              onChange={function onChange() {
                console.log("switch");
              }}
              value="disabled"
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <p>Default - Dense</p>
            <Switch
              dataTest="dhis2-uicore-switch"
              dense
              label="Switch"
              name="Ex"
              onChange={function onChange() {
                console.log("switch");
              }}
              value="default"
            />
          </Grid>
      </Grid>
    </Container>
  );
}

export default SwitchComponent;
