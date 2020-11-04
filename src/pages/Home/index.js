import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CourseCard from '../../parts/CourseCard'
import Header from '../../parts/Header'
import Links from '../../parts/Resources'

import data from "../../data.js"
import styles from "./styles.module.css"


function Home({user}){

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12}><h2 className={styles.header}>Courses</h2></Grid>
            {data.map((section, index) => {
              return <Grid item key={section} xs={12} sm={6} md={4}>
                  <CourseCard index={index} section={section} steps={section.steps}/>
              </Grid>
            })}
          </Grid>
        </div>
        <Links /> 
      </main>
    </div>
  );
}

export default Home;