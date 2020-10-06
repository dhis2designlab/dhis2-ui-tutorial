import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@dhis2/ui';

import storybook from "../images/sb.png";

import github from "../images/github_logo.png";

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto' 
    },
    header: {
        textAlign: 'center'
    }
  
  }));

function Links() {
const classes = useStyles();
  return (
    <Grid container spacing={4}>
        <Grid  item xs={12} sm={4} md={4}>
            <img className={classes.link} src={storybook} width="30%" alt="Storybook"></img>
            <h3 className={classes.header}>Storybook</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
            <Button
                name="Basic button"
                //onClick={() => setIsOpen(!isOpen)}
                //onClick={handleChange}
                type="button">
                Go to Storybook
            </Button>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
            <img className={classes.link} src={github} width="30%" alt="Github"></img>
            <h3 className={classes.header} >Github</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium voluptatem accusantium doloremque laudantium</p>
            <Button
                name="Basic button"
                //onClick={() => setIsOpen(!isOpen)}
                //onClick={handleChange}
                type="button">
                Go to Github
            </Button>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
            <img className={classes.link} src={github} width="30%" alt="Github"></img>
            <h3 className={classes.header}>Blabla</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <Button
                name="Basic button"
                //onClick={() => setIsOpen(!isOpen)}
                //onClick={handleChange}
                type="button">
                Go to X
            </Button>
        </Grid>
  </Grid>  

)}

export default Links;
