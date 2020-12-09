import React from "react";

import Grid from "@material-ui/core/Grid";
import { Radio } from "@dhis2/ui";

function RadioButton() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <h4>Radio</h4>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Default</p>
          <Radio
            dataTest="dhis2-uicore-radio"
            label="Radio"
            name="Ex"
            value="default"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Checked</p>
          <Radio
            checked
            dataTest="dhis2-uicore-radio"
            label="Radio"
            name="Ex"
            value="checked"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Disabled</p>
          <Radio
            dataTest="dhis2-uicore-radio"
            disabled
            label="Radio"
            name="Ex"
            value="disabled"
          />
          <Radio
            checked
            dataTest="dhis2-uicore-radio"
            disabled
            label="Radio"
            name="Ex"
            value="disabled"
          />
        </Grid>
    </Grid>
  );
}

export default RadioButton;
