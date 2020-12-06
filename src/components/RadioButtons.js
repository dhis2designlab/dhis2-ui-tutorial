import React, { useEffect, useState } from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import { Radio } from "@dhis2/ui";
import classNames from "classnames";
import { colors } from "@dhis2/ui";
import { pink } from "@material-ui/core/colors";

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
    padding: "16px",
    border: "solid",
    borderRadius: "6px",
    borderWidth: "thin",
    fontWeight: "500",
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
}));

function RadioButtons({ questions, setPoints, points }) {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState([]);
  const [isCorrect, setIsCorrect] = useState([]);
  console.log("Questions " + questions[0]);

  useEffect(() => {
    [...Array(questions.length)].map((_, i) =>
      setIsChecked((state) => [...state, -1])
    );
  }, []);

  const handleClick = (e) => {
    if (isChecked[e.name] == -1) {
      let isCheckedArr = [...isChecked];
      isCheckedArr[e.name] = e.value;
      let correctArr = [...isCorrect];
      correctArr[e.name] = questions[e.name].correct == e.value;
      if (questions[e.name].correct == e.value) {
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
            console.log(values);
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
                    checked={isChecked[id] == index}
                    className={classNames({
                      [classes.correct]:
                        isCorrect[id] && isChecked[id] == index,
                      [classes.incorrect]:
                        !isCorrect[id] && isChecked[id] == index,
                    })}
                  />
                  {value.solutionQuiz && isChecked[id] == index ? (
                    <>
                      {isCorrect[id] ? (
                        <p
                          className={classNames(
                            classes.correctDiv,
                            classes.solutionDiv
                          )}
                        >
                          Correct {value.solutionQuiz}
                        </p>
                      ) : (
                        <p
                          className={classNames(
                            classes.incorrectDiv,
                            classes.solutionDiv
                          )}
                        >
                          Incorrect {value.solutionQuiz}
                        </p>
                      )}
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
