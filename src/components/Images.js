import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import classNames from "classnames";
import { colors } from "@dhis2/ui";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

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
    padding: "16px",
    border: "solid",
    borderRadius: "6px",
    borderWidth: "thin",
    marginBottom: "16px",
  },
  incorrectDiv: {
    backgroundColor: colors.red100,
    borderColor: colors.red700,
  },
  correctDiv: {
    backgroundColor: colors.green100,
    borderColor: colors.green700,
  },
  hover: {
    "&:hover": {
      borderColor: colors.grey500,
      borderStyle: "solid",
    },
  },
  solutionCorrect: {
    color: colors.green700,
  },
  solutionIncorrect: {
    color: colors.red700,
  },
  icon: {
    marginRight: "8px",
  },
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
                style={{ maxWidth: "100%" }}
              />
            </div>
          </Grid>
        );
      })}
      {chosenValue !== -1 && (
        <>
          {isIncorrect && (
            <div
              className={classNames(classes.solutionDiv, classes.incorrectDiv)}
            >
              <p className={classes.solutionIncorrect}>
                <span className={classes.icon}>
                  <CancelIcon />
                </span>
                <b>Incorrect:</b> {solutionImg}
              </p>
            </div>
          )}
        </>
      )}
      {chosenValue !== -1 && (
        <>
          {isCorrect && (
            <div
              className={classNames(classes.solutionDiv, classes.correctDiv)}
            >
              <p className={classes.solutionCorrect}>
                <span className={classes.icon}>
                  <CheckCircleIcon />
                </span>
                <b>Correct:</b> {solutionImg}
              </p>
            </div>
          )}
        </>
      )}
    </Grid>
  );
}
export default Images;
