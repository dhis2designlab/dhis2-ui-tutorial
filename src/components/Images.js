import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import classNames from "classnames";
import { colors } from '@dhis2/ui';

const useStyles = makeStyles((theme) => ({
  correct: {
    borderStyle: "solid",
    borderColor: "green",
  },
  incorrect: {
    borderStyle: "solid",
    borderColor: "red",
  },
  solutionDiv: {
    padding: '16px',
    border: 'solid',
    borderRadius: '6px',
    borderWidth: 'thin',
    fontWeight: '500',
  },
  incorrectDiv: {
    backgroundColor: colors.red100,
    color: colors.red700,  
    borderColor: colors.red700,
  },
  correctDiv: {
    backgroundColor: colors.green100,
    color: colors.green700,
    borderColor: colors.green700,
  },
  hover: {
    "&:hover": {
      borderColor: colors.grey500,
      borderStyle: 'solid',

    },
  }

}));

function Images({
  images,
  handleImgClick,
  chosenValue,
  isCorrect,
  isIncorrect,
  solutionImg,
}) {
  const classes = useStyles();
  console.log(solutionImg)
  return (
    <Grid spacing={4} container>
      {images.map((value, index) => {
        return (
          <Grid item xs={6} sm={6} md={6}>
            <div
              className={classNames({
                [classes.correct]: isCorrect && index == chosenValue,
                [classes.incorrect]: isIncorrect && index == chosenValue,
                [classes.hover]: !isIncorrect && !isCorrect,
              })}
            >
              <img
                onClick={() => handleImgClick(index)}
                src={value}
                style={{maxWidth: '100%'}}
              />
            </div>
          </Grid>
        );
      })}
      {chosenValue !== -1 && <>{isIncorrect && <p className={classNames(classes.solutionDiv, classes.incorrectDiv)}>Incorrect: {solutionImg}</p>}</>}
      {chosenValue !== -1 && <>{isCorrect && <p className={classNames(classes.solutionDiv, classes.correctDiv)}>Correct: {solutionImg}</p>}</>}
    </Grid>
  );
}
export default Images;
