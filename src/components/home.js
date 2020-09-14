import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Cards from './card.js'
import { Input } from '@dhis2/ui-core'
import { Button } from '@dhis2/ui-core'
import { makeStyles } from '@material-ui/core/styles';
import Signup from './signup.js'
import Header from './header.js'
import Copyright from './copyright.js'
import Footer from './footer.js'
import HeaderBar from './headerbar.js'

import data from "../data.js"

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Home({user}){
  const classes = useStyles();
  console.log("home " + user)

  return (
    <>
      <HeaderBar user={user}/>
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((section, index) => {
              return <Grid item key={section} xs={12} sm={6} md={4}>
                  <Cards section={section} steps={section.steps}/>
              </Grid>
            })}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Footer />
          <Copyright />
      </footer>
    </>
  );
}

export default Home;
