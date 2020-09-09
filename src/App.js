import React from 'react';

import Header from './components/header.js'
import Cards from './components/card.js'
import Copyright from './components/copyright.js'
import Footer from './components/footer.js'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import data from "./data.js"


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

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data.sections.map((section, index) => {
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
    </React.Fragment>
  );
}

export default App;

  //<TourView value={isOpen} steps={section.steps} handleChange={handleChange}/>
