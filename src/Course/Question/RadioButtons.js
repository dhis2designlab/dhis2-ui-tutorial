import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Radio } from "@dhis2/ui";
import classNames from "classnames";

import Solution from "./Solution.js";

import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 16px;
`;

const useStyles = makeStyles((theme) => ({
  incorrect: {
    color: "red !important",
  },
  correct: {
    color: "green !important",
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
      <div>
        {value.question && <h4>{value.question}</h4>}
        {value.answers &&
          value.answers.map((val, i) => {
            const values = Object.values(val);

            return values.map((answer, index) => {
              return (
                <Container>
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
                </Container>
              );
            });
          })}
      </div>
    );
  });
}

export default RadioButtons;
