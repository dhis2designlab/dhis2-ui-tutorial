import React from 'react';

import Grid from '@material-ui/core/Grid';

import storybook from "../images/sb.png";

import github from "../images/github_logo.png";


function Links() {
  return (
    <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
            <img src={storybook} width="50%" alt="Storybook"></img>
            <p>Link to storybook</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <img src={github} width="50%" alt="Github"></img>
            <p>Link to Github</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <img src={storybook} width="50%" alt="storybook"></img>
            <p>Link to blabla</p>
    </Grid>
  </Grid>  

)}

export default Links;
