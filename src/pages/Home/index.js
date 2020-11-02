import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CourseCard from '../../components/CourseCard.js'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../parts/Header'
import Links from '../../parts/Resources'

import data from "../../data.js"

const useStyles = makeStyles((theme) => ({

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  font: {
    lineHeight: 2,
  },

  header: {
    textAlign: 'center',
  },

  cardGrid: {
    paddingTop: '80px',
    paddingBottom: '80px',
  }
}));

function Home({user}){
  const classes = useStyles();

  return (
    <div className={classes.font}>
      <Header />
      <main>
        <Container className={classes.cardGrid} >
          <Grid container spacing={4}>
            <Grid className={classes.header} item xs={12} sm={12} md={12}><h2>Courses</h2></Grid>
            {data.map((section, index) => {
              console.log("index " + index)
              return <Grid item key={section} xs={12} sm={6} md={4}>
                  <CourseCard index={index} section={section} steps={section.steps}/>
              </Grid>
            })}
          </Grid>
        </Container>
        <Links /> 
      </main>
    </div>
  );
}

export default Home;