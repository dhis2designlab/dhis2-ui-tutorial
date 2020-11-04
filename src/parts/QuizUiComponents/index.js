
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
    <Grid container>
        <Buttons />
        <InputField />
        <Buttonstrip />
        <Checkboxes />
        <DropdownButton />
        <Switch />
        <SingleSelect /> 
        <Pagination />
        <Radio />
        <LinearLoader />
        <TabBar />
        <TextArea />
    
    </Grid>
  );
}

export default QuizUiComponents;
