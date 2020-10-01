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
import Quiz from 'react-quiz-component';
import { quiz } from '../quiz';

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

  font: {
    fontFamily: 'Roboto, sans-serif',
  }

}));

function Home({user}){
  const classes = useStyles();

  return (
    <div className={classes.font}>
      <HeaderBar user={user}/>
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((section, index) => {
              console.log("index " + index)
              return <Grid item key={section} xs={12} sm={6} md={4}>
                  <Cards index={index} section={section} steps={section.steps}/>
              </Grid>
            })}
          </Grid>
        </Container>
        <Quiz quiz={quiz} />
      </main>
      <footer className={classes.footer}>
          <Footer />
          <Copyright />
      </footer>
    </div>
  );
}

export default Home;
