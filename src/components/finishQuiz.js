import React, {useContext} from 'react';

import { ModalTitle, ModalContent, Button} from '@dhis2/ui';
import { UserContext } from '../userContext'


function FinishQuiz({points, setIndex}) {
    const {currentUser} = useContext(UserContext)
  
  return (
    <>
        <ModalTitle>
            Congratulation! You have now finished the quiz! 
        </ModalTitle>
        <ModalContent>
            <p>You got {points} point</p>
            <Button
            dataTest="dhis2-uicore-button"
            onClick={setIndex}
            primary
            type="button"
            >
            Start over
        </Button>
        </ModalContent>
    </>
  );
}

export default FinishQuiz;
