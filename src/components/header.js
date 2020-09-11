
import React from 'react';


import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <h1>DHIS2 UI tutorial</h1>
          <p>Get on board with the best practices for developing user friendly applications
          for DHIS2 </p>
        </Container>
      </div>
    </>

)}

export default Header;
