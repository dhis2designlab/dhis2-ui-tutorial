import React from "react";

import Grid from "@material-ui/core/Grid";

import Buttons from "../../UiComponents/Buttons.js";
import Checkboxes from "../../UiComponents/Checkboxes.js";
import InputField from "../../UiComponents/Inputfield.js";

import Buttonstrip from "../../UiComponents/Buttonstrip.js";

import DropdownButton from "../../UiComponents/DropdownButton.js";
import LinearLoader from "../../UiComponents/LinearLoader.js";

import Radio from "../../UiComponents/Radio.js";
import SingleSelect from "../../UiComponents/SingleSelect.js";
import Switch from "../../UiComponents/Switch.js";
import TabBar from "../../UiComponents/TabBar.js";
import TextArea from "../../UiComponents/TextArea.js";

function QuizUiComponents() {
  return (
    <Grid
      container
      spacing={3}
      style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: "36px"}}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Buttons />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <InputField />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Buttonstrip />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Checkboxes />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <DropdownButton />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Switch />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <SingleSelect />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Radio />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <LinearLoader />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TabBar />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextArea />
      </Grid>
    </Grid>
  );
}

export default QuizUiComponents;
