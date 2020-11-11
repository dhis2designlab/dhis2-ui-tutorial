import React from "react";

import Grid from "@material-ui/core/Grid";
import { AlertBar } from "@dhis2/ui";

function Alertbar() {
  return (
    <Grid container xs={12} sm={12} md={6}>
      <Grid item xs={12} sm={12} md={12}>
        <h4>AlertBar</h4>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <p>Default</p>
        <AlertBar
          dataTest="dhis2-uicore-alertbar"
          duration={8000}
          onClick={console.log("onclick")}
          icon
        >
          Default - I will autohide
        </AlertBar>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <p>Success</p>
        <AlertBar
          dataTest="dhis2-uicore-alertbar"
          duration={8000}
          icon
          permanent
          success
          onClick={console.log("onclick")}
        >
          Success
        </AlertBar>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <p>Warning</p>
        <AlertBar
          dataTest="dhis2-uicore-alertbar"
          duration={8000}
          icon
          permanent
          warning
          onClick={console.log("onclick")}
        >
          Warning
        </AlertBar>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <p>Critical</p>
        <AlertBar
          critical
          dataTest="dhis2-uicore-alertbar"
          duration={8000}
          icon
          permanent
          onClick={console.log("onclick")}
        >
          Critical
        </AlertBar>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <p>With actions</p>
        <AlertBar
          actions={[
            {
              label: "Save",
              onClick: console.log("save"),
            },
            {
              label: "Cancel",
              onClick: console.log("cancel"),
            },
          ]}
          dataTest="dhis2-uicore-alertbar"
          duration={8000}
          icon
          permanent
          onClick={console.log("onclick")}
        >
          With Actions
        </AlertBar>
      </Grid>
    </Grid>
  );
}

export default Alertbar;
