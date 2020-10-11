
import React from 'react';


import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: '150px',
    paddingBottom: '100px',
    height: '300px',
    fontFamily: 'Roboto, sans-serif',
  },

  title: {
    textAlign: 'center',
    paddingBottom: '35px',
    fontWeight: '700',
    fontFamily: 'Roboto, sans-serif',
  },

  testing: {
    fontSize: '450%',
    fontFamily: 'Roboto, sans-serif',    
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <h1 className={classes.title}>DHIS2 UI tutorial</h1>
          <p classname={classes.testing}>In these tutorials you will get design knowledge about how to develop applications in align with the UI guidelines. In addition to some theoretical material, you will also be given real life code examples that you can try out directly in the browser</p>
        </Container>
      </div>
    </>

)}

export default Header;
