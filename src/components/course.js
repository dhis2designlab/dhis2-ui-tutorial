
import React, { useContext, useState} from 'react';

import { useParams } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@dhis2/ui';
import { quiz_data } from '../quiz.js';
import { UserContext } from "../userContext"

import FinishQuiz from './finishQuiz';
import IntroductionCourse from './IntroductionCourse';
import QuizSection from './quizSection';


import { db } from '../firebase'


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: '50em',

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

 const { currentUser } = useContext(UserContext)

  const [ indexState, setIndex ] = useState(0)
  const [ points, setPoints ] = useState(0)
  const [ finished, setFinished ] = useState(false)
  const [isChecked, setIsChecked] = useState([]);  

  const quizData = quiz_data.map(q => q);


  const {title, about, topics, quizId} = quizData[id]

  const {question, alternatives, information, image, correct, iframe, sections, images, components } = quizData[id].steps[indexState]

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
      <Container className={classes.cardGrid}> 
        <Grid container spacing={4}>
          {indexState == 0 ? 
          <IntroductionCourse handleNextClick={handleNextClick} title={title} topics={topics} about={about} />
          : <Grid  item xs={12} sm={12} md={12}>
                {finished ? <FinishQuiz  setIndex={handleStartOver} points={points}/> :
               <QuizSection handleBackClick={handleBackClick} handleNextClick={handleNextClick}  images={images} sections={sections} frame={iframe} isChecked={isChecked} handleSingleCheck={handleSingleCheck} alternatives={alternatives} image={image} question={question} information={information} components={components}/>
     } </Grid>}
        </Grid>
      </Container>
    </main>
</div>
  );
}

export default Course;
