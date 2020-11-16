import React, { useContext } from "react";

import { ModalTitle, ModalContent, Button } from "@dhis2/ui";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: "75ch",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function FinishQuiz({ points, setIndex }) {
  const classes = useStyles();
  return (
    <div className={classes.text}>
      <ModalTitle>Congratulation! You have now finished the quiz!</ModalTitle>
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
    </div>
  );
}

export default FinishQuiz;
