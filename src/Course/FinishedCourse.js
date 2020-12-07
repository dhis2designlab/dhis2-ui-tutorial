import React from "react";

import { ModalTitle, ModalContent, Button } from "@dhis2/ui";
import styled from "styled-components";

const Container = styled.div`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 128px;
`;

function FinishedCourse({ points, setIndex }) {
  return (
    <Container>
      <ModalTitle>Congratulation! You have now finished the quiz!</ModalTitle>
      <ModalContent>
        <p>You got {points} points</p>
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
