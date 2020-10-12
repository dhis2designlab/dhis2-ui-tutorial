
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

}));


function CourseIntroduction() {
 const classes = useStyles(); 
 let { id } = useParams();

 const {currentUser, setCurrentUser} = useContext(UserContext)

  const [ indexState, setIndex ] = useState(0)
  const [ points, setPoints ] = useState(0)
  const [ finished, setFinished ] = useState(false)
  const [isChecked, setIsChecked] = useState([]);  

  const currentQuiz = quiz_data.map(q => q);

  const {title, about, topics} = currentQuiz[id]

  const {question, alternatives, information, image, correct } = currentQuiz[id].steps[indexState]

  const handleClick=() =>{
    setIndex(indexState + 1)
  }

  const handleStartOver = () => {
    setIndex(0)
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
    if(indexState + 1 < currentQuiz[id].steps.length){
        setIndex(indexState + 1)
    }
    else {
       let ref = db.collection('users').doc(currentUser.uid)

       let present = false

       for(let points in currentUser.points){
           if(currentQuiz[id].title == currentUser.points[points].title){
               present = true
               return;
           }
       }

       if(!present){
        currentUser.points.push({title: currentQuiz[id].title, points: points})
        ref.update({
            points: [...currentUser.points]
        }).then(function() {
            setCurrentUser({...currentUser})
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
       }

       setFinished(true)
     }

    if(isChecked.includes(correct)){
        setPoints(points+1)
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
    <div className={classes.font}>
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
            primary
            type="button"
            >
            Start Course
        </Button>
        </>: <Grid  item xs={12} sm={12} md={12}>
                {finished ? <FinishQuiz  setIndex={handleStartOver} points={points}/> :
                <>
                <Questions isChecked={isChecked} handleSingleCheck={handleSingleCheck} alternatives={alternatives} image={image} question={question} information={information}/>
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

export default CourseIntroduction;
