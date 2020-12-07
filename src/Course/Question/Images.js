import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { colors } from "@dhis2/ui";

import Solution from "./Solution.js";

const useStyles = makeStyles((theme) => ({
  correct: {
    borderStyle: "solid",
    borderColor: colors.green700,
  },
  incorrect: {
    borderStyle: "solid",
    borderColor: colors.red700,
  },

  hover: {
    "&:hover": {
      borderColor: colors.grey500,
      borderStyle: "solid",
    },
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
                [classes.correct]: isCorrect && index === chosenValue,
                [classes.incorrect]: isIncorrect && index === chosenValue,
                [classes.hover]: !isIncorrect && !isCorrect,
              })}
            >
              <img
                onClick={() => handleImgClick(index)}
                src={value}
                style={{ maxWidth: "100%" }}
                alt="question"
              />
            </div>
          </Grid>
        );
      })}
      {chosenValue !== -1 && (
        <Solution
          isCorrect={isCorrect ? isCorrect : isIncorrect}
          solutionQuiz={solutionImg}
        />
      )}
    </Grid>
  );
}
export default Images;
