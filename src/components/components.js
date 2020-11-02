
import React from 'react';

import Grid from '@material-ui/core/Grid';

import Buttons from '../ui-components/buttons.js'
import Checkboxes from '../ui-components/checkboxes'
import InputField from '../ui-components/inputfield'
import AlertBar from '../ui-components/alertbar'

function Components() {
  
  return (
    <Grid container>
        <Buttons />
        <Checkboxes />
        <InputField />
        <AlertBar />
    </Grid>
  );
}

export default Components;
