import React, {useState, useContext} from 'react';


import { Modal, ModalActions, ButtonStrip, Button} from '@dhis2/ui';

import { makeStyles } from '@material-ui/core/styles';
import { quiz_data } from '../quiz.js';
import FinishQuiz from './finishQuiz';
import Questions from './questions';
import { UserContext } from "../userContext"

import { db } from '../firebase'


const useStyles = makeStyles((theme) => ({
    modal: {
      minWidth: "100px !important",
    },
  
  }));


function Quiz({isOpen, setIsOpen, index}) {

  const classes = useStyles();  
  
  const {currentUser, setCurrentUser} = useContext(UserContext)

  const [ indexState, setIndex ] = useState(0)
  const [ points, setPoints ] = useState(0)
  const [ finished, setFinished ] = useState(false)
  const [isChecked, setIsChecked] = useState([]);  

  const currentQuiz = quiz_data.map(q => q);

  const {question, alternatives, information, image, correct } = currentQuiz[index].steps[indexState]

    const handleClick = event => {
        setIsOpen(false)
    }

    const handleBackClick = () => {
        if(indexState - 1>= 0){
            setFinished(false)
            setIndex(indexState - 1)
        }   
    }

    const handleSingleCheck = e => {
        const name = e.name;
        if (isChecked.includes(name[0])) {
           setIsChecked(isChecked.filter(checked_name => checked_name !== name[index]));
          return;
        }
        isChecked.push(name[0]);
        setIsChecked([...isChecked]);
      };
    
    const handleNextClick = ()=> {
        if(indexState + 1 < currentQuiz[index].steps.length){
            setIndex(indexState + 1)
        }
        else {
           let ref = db.collection('users').doc(currentUser.uid)

           let present = false

           for(let points in currentUser.points){
               if(currentQuiz[index].title == currentUser.points[points].title){
                   present = true
                   return;
               }
           }

           if(!present){
            currentUser.points.push({title: currentQuiz[index].title, points: points})
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

    const handleStartOver = () => {
        setIndex(0)
        setFinished(false)
    }

  return (
    <div> 
        {isOpen ? <Modal
        dataTest="dhis2-uicore-modal"
        className={classes.modal}
        position="top"
        >
        <div>
        {finished ? <FinishQuiz  setIndex={handleStartOver} points={points}/> :
        <>
        <Questions isChecked={isChecked} handleSingleCheck={handleSingleCheck} alternatives={alternatives} image={image} question={question} information={information}/>
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
        </>}
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
        </ButtonStrip>
        </ModalActions></div>
    </Modal> : <></>}

        </div>

    )
}

export default Quiz;


    /** for(let p in currentUser.points){
             console.log("index " + p)
             if(p !== undefined){
                console.log(currentUser.points[p].title)
                console.log(currentQuiz[index].title)
                if(currentUser.points[p].title == currentQuiz[index].title){
                    newPoints.push({title: currentQuiz[index].title, points: points})
                }
                else{
                    console.log(currentUser.points[p].title)
                    newPoints.push({title: currentQuiz[index].title, points: 4})
                }
             }
            } 


        
         console.log(newPoints)
            ref.update({
                points: newPoints
            })
            .then(function() {
                setCurrentUser({...currentUser, points: newPoints})
                setFinished(true)
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });    
        } */
    