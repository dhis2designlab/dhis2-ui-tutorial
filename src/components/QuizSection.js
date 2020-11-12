import React from "react";

import Questions from "./Questions.js";
import { Button } from "@dhis2/ui";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "15%",
  },

  button: {
    margin: "5px",
  },
}));

function QuizSection({
  images,
  sections,
  iframe,
  isChecked,
  handleSingleCheck,
  alternatives,
  image,
  question,
  information,
  components,
  handleBackClick,
  handleNextClick,
  correct,
  points,
  setPoints
}) {
  const classes = useStyles();
  console.log(iframe);
  return (
    <>
      <Questions
        correct={correct}
        images={images}
        sections={sections}
        iframe={iframe}
        isChecked={isChecked}
        handleSingleCheck={handleSingleCheck}
        alternatives={alternatives}
        image={image}
        question={question}
        information={information}
        components={components}
        points={points}
        setPoints={setPoints}
      />
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          dataTest="dhis2-uicore-button"
          onClick={handleBackClick}
          secondary
          type="button"
        >
          Back
        </Button>
        <Button
          className={classes.button}
          dataTest="dhis2-uicore-button"
          onClick={handleNextClick}
          secondary
          type="button"
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default QuizSection;
