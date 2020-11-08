
import React from 'react';

import Grid from '@material-ui/core/Grid';

import Buttons from '../../components/Buttons.js'
import Checkboxes from '../../components/Checkboxes.js'
import InputField from '../../components/Inputfield.js'

import Buttonstrip from '../../components/Buttonstrip.js'

import DropdownButton from '../../components/DropdownButton.js'
import Fieldgroup from '../../components/Fieldgroup.js'
import LinearLoader from '../../components/LinearLoader'
import Pagination from '../../components/Pagination.js'
import Radio from '../../components/Radio.js'
import SingleSelect from '../../components/SingleSelect.js'
import Switch from '../../components/Switch.js'
import TabBar from '../../components/TabBar.js'
import TextArea from '../../components/TextArea.js'

function QuizUiComponents() {
  
  return (
    <Grid container style={{marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
      <Grid item xs={12} sm={6} md={6}>
        <Buttons />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <InputField />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Buttonstrip />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Checkboxes />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <DropdownButton />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Switch />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <SingleSelect /> 
        </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Pagination />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Radio />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <LinearLoader />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <TabBar />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <TextArea />
      </Grid>
    
    </Grid>
  );
}

export default QuizUiComponents;
