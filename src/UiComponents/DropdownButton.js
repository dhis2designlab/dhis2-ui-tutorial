import React from "react";

import Grid from "@material-ui/core/Grid";
import { DropdownButton } from "@dhis2/ui";


function Dropdownbutton() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <h4>DropdownButton</h4>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <p>Default</p>
          <DropdownButton
            component={<span>Simplest thing</span>}
            dataTest="dhis2-uicore-dropdownbutton"
            name="default"
            value="nothing"
          >
            Label me!
          </DropdownButton>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <p>Primary</p>
          <DropdownButton
            component={<span>Simplest thing</span>}
            dataTest="dhis2-uicore-dropdownbutton"
            name="default"
            primary
            value="nothing"
          >
            Label me!
          </DropdownButton>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <p>Secondary</p>
          <DropdownButton
            component={<span>Simplest thing</span>}
            dataTest="dhis2-uicore-dropdownbutton"
            name="default"
            secondary
            value="nothing"
          >
            Label me!
          </DropdownButton>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <p>Destructive</p>
          <DropdownButton
            component={<span>Simplest thing</span>}
            dataTest="dhis2-uicore-dropdownbutton"
            destructive
            name="default"
            value="nothing"
          >
            Label me!
          </DropdownButton>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <p>Disabled</p>
          <DropdownButton
            component={<span>Simplest thing</span>}
            dataTest="dhis2-uicore-dropdownbutton"
            disabled
            name="default"
            value="nothing"
          >
            Label me!
          </DropdownButton>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <p>Small</p>
          <DropdownButton
            component={<span>Simplest thing</span>}
            dataTest="dhis2-uicore-dropdownbutton"
            name="default"
            small
            value="nothing"
          >
            Label me!
          </DropdownButton>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <p>Large</p>
          <DropdownButton
            component={<span>Simplest thing</span>}
            dataTest="dhis2-uicore-dropdownbutton"
            large
            name="default"
            value="nothing"
          >
            Label me!
          </DropdownButton>
        </Grid>
    </Grid>
  );
}

export default Dropdownbutton;
