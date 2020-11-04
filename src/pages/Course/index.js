
import React, { useContext, useState} from 'react';

import { useParams } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import { quiz_data } from '../../quiz.js';
import { UserContext } from "../../userContext"

import FinishQuiz from '../../components/FinishQuiz';
import IntroductionCourse from '../../components/IntroductionCourse';
import QuizSection from '../../components/QuizSection';

import styles from "./styles.module.css"

import main from "../../styles.module.css"

import { db } from '../../firebase'


function Course() {

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
      <div className={main.container}> 
        <Grid container spacing={4}>
          {indexState == 0 ? 
          <IntroductionCourse handleNextClick={handleNextClick} title={title} topics={topics} about={about} />
          : <Grid  item xs={12} sm={12} md={12}>
                {finished ? <FinishQuiz  setIndex={handleStartOver} points={points}/> :
               <QuizSection handleBackClick={handleBackClick} handleNextClick={handleNextClick}  images={images} sections={sections} frame={iframe} isChecked={isChecked} handleSingleCheck={handleSingleCheck} alternatives={alternatives} image={image} question={question} information={information} components={components}/>
     } </Grid>}
        </Grid>
      </div>
    </main>
</div>
  );
}

export default Course;