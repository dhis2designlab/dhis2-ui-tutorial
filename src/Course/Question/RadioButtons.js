import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Radio } from "@dhis2/ui";
import classNames from "classnames";
import { colors } from "@dhis2/ui";
import Solution from "./Solution.js";

const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: "75ch",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "32px",
  },
  incorrect: {
    color: "red !important",
  },
  correct: {
    color: "green !important",
  },
  radioButton: {
    marginBottom: "16px",
  },
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

function RadioButtons({ questions, setPoints, points }) {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState([]);
  const [isCorrect, setIsCorrect] = useState([]);

  useEffect(() => {
    [...Array(questions.length)].map((_, i) =>
      setIsChecked((state) => [...state, -1])
    );
  }, [questions.length]);

  const handleClick = (e) => {
    if (isChecked[e.name] === -1) {
      let isCheckedArr = [...isChecked];
      isCheckedArr[e.name] = e.value;
      let correctArr = [...isCorrect];
      correctArr[e.name] = questions[e.name].correct === e.value;
      if (questions[e.name].correct === e.value) {
        setPoints(points + 1);
      }
      setIsChecked(isCheckedArr);
      setIsCorrect(correctArr);
    }
  };

  return questions.map((value, id) => {
    return (
      <div className={classes.text}>
        {value.question && <h4>{value.question}</h4>}
        {value.answers &&
          value.answers.map((val, i) => {
            const values = Object.values(val);

            return values.map((answer, index) => {
              return (
                <div className={classes.radioButton}>
                  <Radio
                    dataTest="dhis2-uicore-radio"
                    label={answer}
                    name={id}
                    id={index}
                    value={index}
                    onChange={handleClick}
                    checked={isChecked[id] === index}
                    className={classNames({
                      [classes.correct]:
                        isCorrect[id] && isChecked[id] === index,
                      [classes.incorrect]:
                        !isCorrect[id] && isChecked[id] === index,
                    })}
                  />
                  {value.solutionQuiz && isChecked[id] === index ? (
                    <>
                      <Solution
                        solutionQuiz={value.solutionQuiz}
                        isCorrect={isCorrect[id]}
                      />
                    </>
                  ) : null}
                </div>
              );
            });
          })}
      </div>
    );
  });
}

export default RadioButtons;
