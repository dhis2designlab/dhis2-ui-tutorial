import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Cards from './card.js'
import { makeStyles } from '@material-ui/core/styles';
import Header from './header.js'
import Copyright from './copyright.js'
import Footer from './footer.js'
import HeaderBar from './headerbar.js'
import Links from './links.js'

import data from "../data.js"

const iframe = '<iframe src="https://codesandbox.io/embed/bold-sun-l4upt?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-sun-l4upt" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';
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
          <Links />  
          <Grid container spacing={4}>
            {data.map((section, index) => {
              console.log("index " + index)
              return <Grid item key={section} xs={12} sm={6} md={4}>
                  <Cards index={index} section={section} steps={section.steps}/>
              </Grid>
            })}
          </Grid>
        </Container>
        <div dangerouslySetInnerHTML={{__html: iframe}} />
      </main>
      <footer className={classes.footer}>
          <Footer />
          <Copyright />
      </footer>
    </div>
  );
}

export default Home;
