import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import { ModalTitle, ModalContent, Radio } from "@dhis2/ui";

const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: "75ch",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function RadioButtons({ questions }) {
  const classes = useStyles();
  return questions.map((value) => {
    return (
      <div className={classes.text}>
        {value.question && <h4>{value.question}</h4>}
        {value.answers &&
          value.answers.map((val) => {
            const values = Object.values(val);
            return values.map((answer, index) => {
              return (
                <>
                  <Radio
                    dataTest="dhis2-uicore-radio"
                    label={answer}
                    name="mame"
                    id={index}
                    onChange={console.log("CLICK")}
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
