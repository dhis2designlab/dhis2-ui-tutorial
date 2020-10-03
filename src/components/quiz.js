import React, {useState} from 'react';


import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button, Checkbox} from '@dhis2/ui';

import { makeStyles } from '@material-ui/core/styles';
import {quiz_data} from '../quiz.js';
import FinishQuiz from './finishQuiz';
import Questions from './questions';


const useStyles = makeStyles((theme) => ({
    modal: {
      minWidth: "100px !important",
    },
  
  }));


function Quiz({isOpen, setIsOpen, index}) {

  const classes = useStyles();  

  const [ indexState, setIndex ] = useState(0)

  const [ points, setPoints ] = useState(0)

  const [ finished, setFinished ] = useState(false)  

  const currentQuiz = quiz_data.map(q => q);

  const {question, alternatives, information, image, correct,iframe } = currentQuiz[index].steps[indexState]


    const handleClick = event => {
        setIsOpen(false)
    }

    const handleBackClick = event => {
        if(indexState - 1>= 0){
            setIndex(indexState - 1)
        }   
    }

    const handleNextClick = event => {
        if(indexState + 1 < currentQuiz[index].steps.length){
            setIndex(indexState + 1)
        }
        else {
            setFinished(true)
        }
       /**  if(isChecked.includes(correct)){
            setPoints(points+1)
        }**/  
    }

  return (
    <div> 
        {isOpen ? <Modal
  dataTest="dhis2-uicore-modal"
  className={classes.modal}
  position="top"
>
    <div>
    {finished ? <FinishQuiz  points={points}/> :
  <Questions alternatives={alternatives} image={image} question={question} information={information}/>}
  <ModalActions dataTest="dhis2-uicore-modalactions">
  <ButtonStrip
    dataTest="dhis2-uicore-buttonstrip"
    end
  >
    <Button
      dataTest="dhis2-uicore-button"
      onClick={handleClick}
      secondary
      type="button"
    >
      Close
    </Button>
    <Button
      dataTest="dhis2-uicore-button"
      onClick={handleBackClick}
      primary
      type="button"
    >
      Back
    </Button>
    <Button
      dataTest="dhis2-uicore-button"
      onClick={handleNextClick}
      primary
      type="button"
    >
      Next
    </Button>
  </ButtonStrip>
</ModalActions></div>
</Modal> : <p>Not clicked</p>}

    </div>

)
}
export default Quiz;


//{iframe ? <div dangerouslySetInnerHTML={{__html: iframe}} /> : <></>}</>