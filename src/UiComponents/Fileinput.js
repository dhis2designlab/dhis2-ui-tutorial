import React from "react";

import Grid from "@material-ui/core/Grid";
import { Button } from "@dhis2/ui";

import styles from "./styles.module.css";

function Fileinput() {
  return (
    <Grid container xs={12} sm={12} md={12}>
      <Grid item xs={12} sm={12} md={12}>
        <h4>Fileinput</h4>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Button dataTest="dhis2-uicore-button" primary type="button">
          Click me
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Button dataTest="dhis2-uicore-button" secondary type="button">
          Click me
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Button dataTest="dhis2-uicore-button" destructive type="button">
          Click me
        </Button>
      </Grid>
    </Grid>
  );
}

export default Fileinput;
