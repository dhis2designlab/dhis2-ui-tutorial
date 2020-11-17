import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  correct: {
    borderStyle: "solid",
    borderColor: "green",
  },
  incorrect: {
    borderStyle: "solid",
    borderColor: "red",
  },
}));

function Images({
  images,
  handleImgClick,
  chosenValue,
  isCorrect,
  isIncorrect,
}) {
  const classes = useStyles();

  return (
  <Grid spacing={4} container>{images.map((value, index) => {
    return (
      <Grid item xs={6} sm={6} md={6}>
        <div
          className={classNames({
            [classes.correct]: isCorrect && index == chosenValue,
            [classes.incorrect]: isIncorrect && index == chosenValue,
          })}
        >
          <img onClick={() => handleImgClick(index)} src={value} width="100%" />
        </div>
      </Grid>
    );
   
  })
 
}
</Grid>
  )
}
export default Images;
