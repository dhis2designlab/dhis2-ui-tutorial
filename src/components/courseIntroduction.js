
import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './copyright.js'
import Footer from './footer.js'
import HeaderBar from './headerbar.js'
import { Button } from '@dhis2/ui';


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
  },

  title: {
    textAlign: 'center',
  }

}));


function Course({user}) {
 const classes = useStyles(); 

  return (
    <div className={classes.font}>
    <HeaderBar user={user}/>
    <main>
      <p>go back to mainpage</p>
      <Container className={classes.cardGrid} maxWidth="md"> 
        <Grid container spacing={4}>
          <Grid  item xs={12} sm={12} md={12}>
             <h2 className={classes.title}>Course name</h2>
          </Grid>
          <Grid  item xs={6} sm={6} md={6}>
             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
          </Grid>
          <Grid  item xs={6} sm={6} md={6}>
            <ul>
                <li><b>Key:</b> Blabla</li>
                <li><b>Key:</b> Blabla</li>
                <li><b>Key:</b> Blabla</li>
                <li><b>Key:</b> Blabla</li>
            </ul>
          </Grid>
          <Button
            dataTest="dhis2-uicore-button"
            //onClick={handleClick}
            secondary
            type="button"
            >
            Start Course
        </Button>
        </Grid>
      </Container>

    </main>
    <footer className={classes.footer}>
        <Footer />
        <Copyright />
    </footer>
</div>
  );
}

export default Course;
