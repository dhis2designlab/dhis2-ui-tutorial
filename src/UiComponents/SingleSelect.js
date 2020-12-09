import React from "react";

import Grid from "@material-ui/core/Grid";
import { SingleSelect, SingleSelectOption } from "@dhis2/ui";

function SingularSelect() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <h4>SingleSelect</h4>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>With options</p>
          <SingleSelect
            className="select"
            dataTest="dhis2-uicore-singleselect"
            selected=""
            onChange={function onChange() {
              console.log("click");
            }}
          >
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option one"
              value="1"
            />
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option two"
              value="2"
            />
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option three"
              value="3"
            />
          </SingleSelect>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>Disabled</p>
          <SingleSelect
            className="select"
            dataTest="dhis2-uicore-singleselect"
            disabled
            selected=""
            onChange={function onChange() {
              console.log("click");
            }}
          >
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option one"
              value="1"
            />
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option two"
              value="2"
            />
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option three"
              value="3"
            />
          </SingleSelect>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <p>With clear button</p>
          <SingleSelect
            className="select"
            clearText="Clear"
            clearable
            dataTest="dhis2-uicore-singleselect"
            selected="1"
            onChange={function onChange() {
              console.log("click");
            }}
          >
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option one"
              value="1"
            />
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option two"
              value="2"
            />
            <SingleSelectOption
              dataTest="dhis2-uicore-singleselectoption"
              label="option three"
              value="3"
            />
          </SingleSelect>
        </Grid>
    </Grid>
  );
}

export default SingularSelect;
