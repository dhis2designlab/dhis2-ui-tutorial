import React from "react";

import { ModalTitle, ModalContent, Button } from "@dhis2/ui";
import styled from "styled-components";
import firstCourse from "../images/firstCourse1.png";

const Container = styled.div`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 128px;
`;

function FinishedCourse({ points, setIndex, completedCourses }) {
  console.log("Completed courses " + JSON.stringify(completedCourses))


  return (
    <Container>
      <ModalTitle>Congratulation! You have now finished the quiz!</ModalTitle>
      <ModalContent>
        <p>You got {points} points</p>
        {completedCourses?.length <= 1 && <><p>You get a medal for completing your first course!</p>
        <img src={firstCourse} alt="medal for completion of first course" /></>
        }
       
       
        <Button
          dataTest="dhis2-uicore-button"
          onClick={setIndex}
          primary
          type="button"
        >
          Start over
        </Button>
      </ModalContent>
    </Container>
  );
}

export default FinishedCourse;
