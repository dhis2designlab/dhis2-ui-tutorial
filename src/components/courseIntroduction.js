
import React, { useContext, useState} from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './copyright.js'
import Footer from './footer.js'
import HeaderBar from './headerbar.js'
import { Button } from '@dhis2/ui';
import { quiz_data } from '../quiz.js';
import { UserContext } from "../userContext"
import Questions from './questions';

import { db } from '../firebase'


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


function CourseIntroduction() {
 const classes = useStyles(); 

 const {currentUser, setCurrentUser} = useContext(UserContext)

  const [ indexState, setIndex ] = useState(0)
  const [ points, setPoints ] = useState(0)
  const [ finished, setFinished ] = useState(false)
  const [isChecked, setIsChecked] = useState([]);  

  const currentQuiz = quiz_data.map(q => q);

  const {title, about, topics} = currentQuiz[0]
  console.log(indexState)
  console.log(title);
  console.log(about)


 // const {question, alternatives, information, image, correct } = currentQuiz[0].steps[indexState]

 const handleClick=() =>{
  setIndex(indexState + 1)
 }

  
  return (
    <div className={classes.font}>
    <HeaderBar user={currentUser}/>
    <main>
      <p>go back to mainpage</p>
      <Container className={classes.cardGrid} maxWidth="md"> 
        <Grid container spacing={4}>
          {indexState == 0 ? 

          <>
          <Grid  item xs={12} sm={12} md={12}>
             <h2 className={classes.title}>{title}</h2>
          </Grid>
          <Grid  item xs={6} sm={6} md={6}>
             <p>{about}</p>
          </Grid>
          <Grid  item xs={6} sm={6} md={6}>
            <ul>
                <li><b>Key:</b> Blabla</li>
                <li><b>Key:</b> Blabla</li>
                <li><b>Key:</b> Blabla</li>
                <li><b>Key:</b> Blabla</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>{topics ? <><p>The topics that will be covered in this module:</p><ul>
            {topics.map(index => <li>{index.title}</li>)}
            </ul></> : null}
            </Grid>
          <Button
            dataTest="dhis2-uicore-button"
            onClick={handleClick}
            secondary
            type="button"
            >
            Start Course
        </Button>
        </>:  <p>hei</p>}
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

export default CourseIntroduction;
