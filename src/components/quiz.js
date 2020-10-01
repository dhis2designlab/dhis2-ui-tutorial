import React, {useState} from 'react';

import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button, Checkbox} from '@dhis2/ui';

const quiz = [
    {
        title: "Title",
        about: "Content and communitcation",
        steps: [
            {
                header: "header1",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: a answer", "b: ffsdfs", "c: jaja"],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'c',
            },
            
        ]
    },
    {
        title: "Layout, Spacing and Stacking",
        about: "this is a quiz about blablabl",
        steps: [
            {
                header: "header1",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: a answer", "b: ffsdfs", "c: jaja"],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'c',
            },
            
        ]
    },
    {
        title: "Forms",
        about: "this is a quiz about blablabl",
        steps: [
            {
                header: "header1",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: a answer", "b: ffsdfs", "c: jaja"],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'c',
            },
            
        ]
    },
    {
        title: "Color",
        about: "this is a quiz about blablabl",
        steps: [
            {
                header: "This is a quiz about color",
                question: "This is a quiz about color?",
                information: "In section we will take you through how to use colors when desiging for DHIS2",
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: a answer", "b: ffsdfs", "c: jaja"],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'c',
            },
            
        ]
    },
    {
        title: "Typography",
        about: "this is a quiz about blablabl",
        steps: [
            {
                header: "header1",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: a answer", "b: ffsdfs", "c: jaja"],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'c',
            },
            
        ]
    },
    {
        title: "Icons",
        about: "this is a quiz about blablabl",
        steps: [
            {
                header: "header1",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: a answer", "b: ffsdfs", "c: jaja"],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ "a: fdfd", "b: ffsdfs", "c: jaja"],
                correct: 'c',
            },
            
        ]
    }
]


function Quiz(props) {

  const { isOpen, setIsOpen, index } = props

  const [ indexState, setIndex ] = useState(0)

  const currentQuiz = quiz.map(ba => ba);

  console.log(currentQuiz[0].steps)

  console.log("index " + index)

  const header = currentQuiz[index].steps[indexState].header
  const question = currentQuiz[index].steps[indexState].question
  const alternatives = currentQuiz[index].steps[indexState].alternatives
  const information = currentQuiz[index].steps[indexState].information
  

const handleClick = event => {
    console.log(event)
    setIsOpen(false)
}

const handleBackClick = event => {
    console.log(event)
    if(indexState - 1>= 0){
        setIndex(indexState - 1)
    }
}

const handleNextClick = event => {
    console.log(event)
    console.log(currentQuiz[index].steps.length)
    if(indexState + 1 < currentQuiz[index].steps.length){
        setIndex(indexState + 1)
    }
   
}

  return (
    <div>
        {isOpen ? <Modal
  dataTest="dhis2-uicore-modal"
  position="top"
  small
>
  <ModalTitle dataTest="dhis2-uicore-modaltitle">
    {question}
  </ModalTitle>
  <ModalContent dataTest="dhis2-uicore-modalcontent">
    {information ? <p>{information}</p> : <p></p>}
    {alternatives ? alternatives.map((alt, index) => {
        console.log(alt)
        return <Checkbox
        dataTest="dhis2-uicore-checkbox"
        label={alt}
        name="Ex"
        onChange={console.log("click")}
        value="default"
      />
      
    }): <p></p>}
  </ModalContent>
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
</Modal> : <p>Not clicked</p>}
    </div>

)
}
export default Quiz;
