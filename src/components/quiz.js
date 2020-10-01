import React, {useState} from 'react';

import colors from '../images/colours.png';

import { Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Button, Checkbox} from '@dhis2/ui';

const quiz = [
    {
        title: "Title",
        about: "Content and communitcation",
        steps: [
            {
                header: "header1",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
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
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
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
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'c',
            },
            
        ]
    },
    {
        title: "Color",
        about: "this is a quiz about blablabl",
        steps: [
            {
                header: "Color",
                question: "Color",
                information: "In section we will take you through how to use colors when developing applications for DHIS2. Some examples and explanations will be given as well as some coding tasks for you to try out, and some quizzes to check that you have understood the topics correctly",
                correct: 'a',
            },
            {
                header: "DHIS2 color scale",
                question: "DHIS2 color scale",
                information: "The DHIS2 color scale contains 7 colors. Each color has 10 shades. This color system provides enough colors for all situations",
                image: "../images/colours.png",
            },
            {
                header: "General, simplified principles",
                question: "General, simplified principles",
                information: "Each color in the DHIS2 color scale has a purpose. Put simply: Grey: general interface elements, neutral information, Blue: important neutral information, primary actions, Teal: selected or active element, Red: danger, error, destructive action, Yellow: warning, non-blocking error, Green: positive feedback, valid, success",
            },
            {
                header: "Qu",
                question: "Quiz: When should you use the color teal?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'c',
            },
            {
                header: "Qu",
                question: "Quiz: When should you use the color red?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'a',
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
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
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
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'a',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'b',
            },
            {
                header: "header2",
                question: "What is blabla?",
                alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
                correct: 'c',
            },
            
        ]
    }
]


function Quiz(props) {

  const { isOpen, setIsOpen, index } = props

  const [ indexState, setIndex ] = useState(0)

  const [ points, setPoints ] = useState(0)

  const [isChecked, setIsChecked] = useState([]);


  const currentQuiz = quiz.map(ba => ba);

  const question = currentQuiz[index].steps[indexState].question
  const alternatives = currentQuiz[index].steps[indexState].alternatives
  const information = currentQuiz[index].steps[indexState].information
  const image = currentQuiz[index].steps[indexState].image
  const correct = currentQuiz[index].steps[indexState].correct

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
        setPoints(points+1)
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
        setIsChecked([])
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
