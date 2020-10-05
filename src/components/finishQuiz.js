import React from 'react';

import { ModalTitle, ModalContent, Button} from '@dhis2/ui';


function FinishQuiz({points, setIndex}) {
    console.log("Finish quiz points " + points)
    
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
