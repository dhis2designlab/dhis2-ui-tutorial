import React, {useState} from 'react';

import colors from '../images/colours.png';

import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button, Checkbox} from '@dhis2/ui';

import { makeStyles } from '@material-ui/core/styles';
import {quiz_data} from '../quiz.js';


const useStyles = makeStyles((theme) => ({
    modal: {
      minWidth: "1000px !important",
    },
  
  }));


function Quiz({isOpen, setIsOpen, index}) {

  const [ indexState, setIndex ] = useState(0)

  const [ points, setPoints ] = useState(0)

  const [ finished, setFinished ] = useState(false)

  const [isChecked, setIsChecked] = useState([]);

  const classes = useStyles();


  const currentQuiz = quiz_data.map(ba => ba);

  const question = currentQuiz[index].steps[indexState].question
  const alternatives = currentQuiz[index].steps[indexState].alternatives
  const information = currentQuiz[index].steps[indexState].information
  const image = currentQuiz[index].steps[indexState].image
  const correct = currentQuiz[index].steps[indexState].correct
  const iframe = currentQuiz[index].steps[indexState].iframe

  const handleSingleCheck = e => {
    const name = e.name;
    if (isChecked.includes(name[0])) {
       setIsChecked(isChecked.filter(checked_name => checked_name !== name[0]));
      return;
    }
    isChecked.push(name[0]);
    setIsChecked([...isChecked]);
  };

    const handleAnswer = event => {
        console.log(event)
        console.log(points)
    }

    const handleClick = event => {
        setIsOpen(false)
    }

    const handleBackClick = event => {
        if(indexState - 1>= 0){
            setIndex(indexState - 1)
        }
        setIsChecked([])
    }

    const handleNextClick = event => {
        if(indexState + 1 < currentQuiz[index].steps.length){
            setIndex(indexState + 1)
        }
        else {
            setFinished(true)
        }
        if(isChecked.includes(correct)){
            setPoints(points+1)
        }
        setIsChecked([])
    }


  return (
    <div> 
        {isOpen ? <Modal
  dataTest="dhis2-uicore-modal"

  className={classes.modal}
  position="top"
>
  <ModalTitle  className={classes.modal} dataTest="dhis2-uicore-modaltitle">
        {finished ? <p>Congratulation you have finished the course</p> : question}
  </ModalTitle>
        <ModalContent dataTest="dhis2-uicore-modalcontent">
             {finished ? <p>points: {points}</p>: 
            
            <>{information ? <p>{information}</p> : <p></p>}
            {alternatives ? alternatives.map((value, index) => {
                const choice = Object.keys(value)
                const value_choice = Object.values(value)
                return <><Checkbox
                dataTest="dhis2-uicore-checkbox"
                label={value_choice}
                name={choice}
                onChange={handleSingleCheck}
                checked={isChecked.includes(String(choice))}
            />
            </>
            
                }): <p></p>}
            {alternatives ? <Button
            dataTest="dhis2-uicore-button"
            onClick={handleAnswer}
            secondary
            type="button"
            >
            Check answer
            </Button> : <p></p>}
            {image ? <img src={colors} width="100%" alt="image" /> : <></>}
        </>}</ModalContent>
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
  </ModalActions>
  {iframe ? <div dangerouslySetInnerHTML={{__html: iframe}} /> : <></>}
</Modal> : <p>Not clicked</p>}
    </div>

)
}
export default Quiz;
