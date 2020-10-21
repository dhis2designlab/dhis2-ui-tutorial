
import React, { useContext, useState} from 'react';

import { useParams } from "react-router-dom";

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
import FinishQuiz from './finishQuiz';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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

  title: {
    textAlign: 'center',
  },
  
  buttons: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '15%',
  },

  button: {
    margin: '5px',
  },

  list: {
    listStyleType: 'none',
  },

  listElement: {
    paddingBottom: '16px',
  }

}));


function Course() {
 const classes = useStyles(); 
 let { id } = useParams();

 const {currentUser, setCurrentUser, setCompletedCourses} = useContext(UserContext)

  const [ indexState, setIndex ] = useState(0)
  const [ points, setPoints ] = useState(0)
  const [ finished, setFinished ] = useState(false)
  const [isChecked, setIsChecked] = useState([]);  

  const quizData = quiz_data.map(q => q);
  console.log(quizData[id])

  const {title, about, topics, quizId} = quizData[id]

  const {question, alternatives, information, image, correct, iframe, sections, images } = quizData[id].steps[indexState]

  const handleClick=() =>{
    setIndex(indexState + 1)
  }

  const handleStartOver = () => {
    setIndex(0)
    setPoints(0)
    setFinished(false)
  }

  const handleBackClick = () => {
    if(indexState - 1>= 0){
        setFinished(false)
        setIndex(indexState - 1)
    }
}
  //TODO: FIX THIS.
  const handleNextClick = ()=> {
    if(isChecked.includes(correct)){
      setPoints(points+1)
}
    if(indexState + 1 < quizData[id].steps.length){
        setIndex(indexState + 1)
    }
    else {
      console.log(currentUser.uid)
      console.log(id)
      db.collection("users").doc(currentUser.uid).collection("points").doc(quizId).set({
        name: title,
        id: id,
        points: points

      });

      setFinished(true)
     }

  
}

  const handleSingleCheck = e => {
    const name = e.name;
    if (isChecked.includes(name[0])) {
      setIsChecked(isChecked.filter(checked_name => checked_name !== name[0]));
      return;
    }
    isChecked.push(name[0]);
    setIsChecked([...isChecked]);
  };

  return (
    <div>
    <main>
      <p>go back to mainpage</p>
      <Container className={classes.cardGrid} maxWidth="md"> 
        <Grid container spacing={4}>
          {indexState == 0 ? 
          <>
          <Grid  item xs={12} sm={12} md={12}>
             <h2 className={classes.title}>{title}</h2>
          </Grid>
          <Grid  item xs={12} sm={8} md={8}>
             <p> {about}</p>
          </Grid>
          <Grid  item xs={12} sm={4} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <ul className={classes.list}>
                  <li className={classes.listElement}><b>Expected duration:</b> 20 minutes</li>
                  <li className={classes.listElement}><b>Key:</b> Blabla</li>
                  <li className={classes.listElement}><b>Key:</b> Blabla</li>
                  <li className={classes.listElement}><b>Key:</b> Blabla</li>
              </ul>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>{topics ? <><p>The topics that will be covered in this module:</p><ul>
            {topics.map(index => <li>{index.title}</li>)}
            </ul></> : null}
            </Grid>
          <Button
            dataTest="dhis2-uicore-button"
            onClick={handleNextClick}
            primary
            type="button"
            >
            Start Course
        </Button>
        </>: <Grid  item xs={12} sm={12} md={12}>
                {finished ? <FinishQuiz  setIndex={handleStartOver} points={points}/> :
                <>
                <Questions images={images} sections={sections} frame={iframe} isChecked={isChecked} handleSingleCheck={handleSingleCheck} alternatives={alternatives} image={image} question={question} information={information}/>
                <div className={classes.buttons}>
                  <Button
                      className={classes.button}
                      dataTest="dhis2-uicore-button"
                      onClick={handleBackClick}
                      secondary
                      type="button"
                      >
                      Back
                  </Button>
                  <Button
                      className={classes.button}
                      dataTest="dhis2-uicore-button"
                      onClick={handleNextClick}
                      secondary
                      type="button"
                      >
                      Next
                  </Button>
                </div>
                </>
     } </Grid>}
        </Grid>
      </Container>
    </main>
</div>
  );
}

export default Course;
