
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Png2 from "../images/header_img.png";


import { Button } from '@dhis2/ui';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    paddingTop: '128px',
    paddingBottom: '64px',
    paddingLeft: '128px',
    paddingRight: '128px',
  },

  title: {
    textAlign: 'center',
  },

}));

function Header() {
  const classes = useStyles();

  return (
      <div className={classes.heroContent}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <h1 className={classes.title}>DHIS2 UI tutorial</h1>
            <p classname={classes.testing}>In these tutorials you will get design knowledge about how to develop applications in align with the UI guidelines. In addition to some theoretical material, you will also be given real life code examples that you can try out directly in the browser</p>
            <Button
                dataTest="dhis2-uicore-button"
                primary
                type="button"
                >
                Go to courses
           </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
              <img src={Png2} style={{maxWidth: '100%'}}/>
          </Grid>
          </Grid>
      </div>
)}

export default Header;
