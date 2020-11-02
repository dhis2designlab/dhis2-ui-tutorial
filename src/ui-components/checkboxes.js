
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Button, Checkbox} from '@dhis2/ui';


function Checkboxes() {
  
return (

    <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={12} sm={12} md={12}>
                <h4>Checkboxes</h4>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    dataTest="dhis2-uicore-button"
                    type="button"
                    >
                    Click me
                </Checkbox>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    dataTest="dhis2-uicore-button"
                    type="button"
                    >
                    Click me
                </Checkbox>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    dataTest="dhis2-uicore-button"
                    type="button"
                    >
                    Click me
                </Checkbox>
            </Grid>
        </Grid>
)}

export default Checkboxes