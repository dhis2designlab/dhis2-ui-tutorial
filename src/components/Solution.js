import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { colors } from "@dhis2/ui";

const useStyles = makeStyles((theme) => ({
    solutionDiv: {
      padding: "8px",
      border: "solid",
      borderRadius: "6px",
      borderWidth: "thin",
      marginBottom: "16px",
      marginTop: "16px",
    },
    incorrectDiv: {
      backgroundColor: colors.red100,
      borderColor: colors.red700,
    },
    correctDiv: {
      backgroundColor: colors.green100,
      borderColor: colors.green700,
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


function Solution({ isCorrect, solutionQuiz }) {
    const classes = useStyles();
  return (
    <>
    {isCorrect ? (
        <div
          className={classNames(
            classes.correctDiv,
            classes.solutionDiv
          )}
        >
          <p className={classes.solutionCorrect}>
            <span className={classes.icon}>
              <CheckCircleIcon />
            </span>
            <b>Correct:</b> {solutionQuiz}
          </p>
        </div>
      ) : (
        <div
          className={classNames(
            classes.incorrectDiv,
            classes.solutionDiv
          )}
        >
          <p className={classes.solutionIncorrect}>
            <span className={classes.icon}>
              <CancelIcon />
            </span>
            <b>Incorrect:</b> {solutionQuiz}
          </p>
        </div>
      )}
  </>
  );

}

export default Solution;
