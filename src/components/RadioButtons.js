import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Radio } from "@dhis2/ui";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: "75ch",
    marginLeft: "auto",
    marginRight: "auto",
  },
  incorrect: {
    color: 'red !important',
  },
  correct: {
    color: 'green !important',
  },
}));

function RadioButtons({ questions, setPoints, points }) {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState([])
  const [isCorrect, setIsCorrect] = useState([])

  useEffect(() => {
    [...Array(questions.length)].map((_,i) => setIsChecked(state => [...state, -1]))

  }, []);

  const handleClick = e => {
    if(isChecked[e.name] == -1){
      let isCheckedArr = [...isChecked]
      isCheckedArr [e.name] = e.value
      let correctArr = [...isCorrect]
      correctArr[e.name] = questions[e.name].correct == e.value
      if(questions[e.name].correct == e.value){
        setPoints(points + 1)
      }
      setIsChecked(isCheckedArr)  
      setIsCorrect(correctArr)  
    }
  }
  
  return questions.map((value, id) => {
    return (
      <div className={classes.text}>
        {value.question && <h4>{value.question}</h4>}
        {value.answers &&
          value.answers.map((val, i) => { 
            const values = Object.values(val);
            return values.map((answer, index) => {
              return (
                <>
                  <Radio
                    dataTest="dhis2-uicore-radio"
                    label={answer}
                    name={id}
                    id={index}
                    value={index}
                    onChange={handleClick}
                    checked={isChecked[id] == index}
                    className={classNames({
                      [classes.correct]: isCorrect[id] && isChecked[id] == index,
                      [classes.incorrect]: !isCorrect[id] && isChecked[id] == index,
                    })}
                  />
                </>
              );
            });
          })}
      </div>
    );
  });
}

export default RadioButtons;
