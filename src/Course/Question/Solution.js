import React from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { colors } from "@dhis2/ui";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const CorrectDiv = styled.div`
  background-color: ${colors.green100};
  border-color: ${colors.green700};
  border: solid;
  border-radius: 6px;
  border-width: thin;
  padding: 12px;
`;
const IncorrectDiv = styled.div`
  background-color: ${colors.red100};
  border-color: ${colors.red700};
  border: solid;
  border-radius: 6px;
  border-width: thin;
  padding: 12px;
`;
const Correct = styled.p`
  color: ${colors.green700};
`;
const Incorrect = styled.p`
  color: ${colors.red700};
`;

function Solution({ isCorrect, solutionQuiz }) {
  return (
    <Container>
      {isCorrect ? (
        <CorrectDiv>
          <Correct>
            <CheckCircleIcon
              style={{ marginRight: "8px", marginLeft: "8px" }}
            />
            <b>Correct:</b> {solutionQuiz}
          </Correct>
        </CorrectDiv>
      ) : (
        <IncorrectDiv>
          <Incorrect>
            <CancelIcon style={{ marginRight: "8px", marginLeft: "8px" }} />
            <b>Incorrect:</b> {solutionQuiz}
          </Incorrect>
        </IncorrectDiv>
      )}
    </Container>
  );
}

export default Solution;
