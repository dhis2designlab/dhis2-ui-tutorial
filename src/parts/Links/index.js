import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Link from '../../components/Link.js'

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
    header: {
        textAlign: 'center',
    },
  }));

function Links() {

const classes = useStyles();

  return (
    <div className={classes.cont}> 
        <Container>
            <Grid className={classes.container} container spacing={5}>
                <Grid item xs={12} sm={12} md={12} className={classes.header}>
                    <h2>Resources</h2>
                </Grid>
                <Link />
                <Link />
                <Link />
            </Grid>
        </Container>
    </div>
)}

export default Links;
