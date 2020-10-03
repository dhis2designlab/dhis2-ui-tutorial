import React from 'react';

import { ModalTitle, ModalContent} from '@dhis2/ui';


function FinishQuiz({points}) {
  return (
    <>
        <ModalTitle>
            Congratulation! You have now finished the quiz! 
        </ModalTitle>
        <ModalContent>
            <p>You got {points} point</p>
        </ModalContent>
    </>
  );
}

export default FinishQuiz;
