
import React from 'react';

import Grid from '@material-ui/core/Grid';

import Buttons from '../../components/Buttons.js'
import Checkboxes from '../../components/Checkboxes.js'
import InputField from '../../components/Inputfield.js'
import AlertBar from '../../components/Alertbar.js'

function QuizUiComponents() {
  
  return (
    <Grid container>
        <Buttons />
        <Checkboxes />
        <InputField />
        <AlertBar />
    </Grid>
  );
}

export default QuizUiComponents;
