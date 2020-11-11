import React, { useState } from "react";

import { ModalTitle, ModalContent, Radio } from "@dhis2/ui";

import Grid from "@material-ui/core/Grid";

import { makeStyles, StylesProvider } from "@material-ui/core/styles";

import QuizUiComponents from "../parts/QuizUiComponents";

import CodeSandbox from "simple-codesandbox";

const iframe2 =
  '<iframe src="https://codesandbox.io/embed/n9m2w9q8x0?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="Jest test" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const useStyles = makeStyles((theme) => ({
  border: {
    borderStyle: "solid",
    borderColor: "green",
  },
  question: {
    paddingTop: "8px",
    paddingBottom: "8px",

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "52px",
  },
  text: {
    maxWidth: "75ch",
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
    maxWidth: "130ch",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

//TODO: rewrite messy code
function Questions({
  sections,
  points,
  setPoints,
  correct,
  images,
  question,
  alternatives,
  image,
  information,
  handleSingleCheck,
  isChecked,
  iframe,
  components,
}) {
  const classes = useStyles();

  const [chosenImg, setChosenImg] = useState(false);
  const [radio, setRadio] = useState(false);

  const handleImgClick = (value) => {
    if (value == correct && !chosenImg) {
      setChosenImg(true);
      setPoints(points + 1);
    } else {
      setChosenImg(true);
    }
  };

  return (
    <>
      <div>
        <div className={classes.question}>
          {question && <h1>{question}</h1>}
          <>
            <div className={classes.text}>
              {information && <p>{information}</p>}
              <div>
                {sections &&
                  sections.map((value) => {
                    return (
                      <>
                        <p>{value.text}</p>
                        {value.list && (
                          <ul>
                            {value.list.map((value) => {
                              return <li>{value}</li>;
                            })}
                          </ul>
                        )}
                      </>
                    );
                  })}
              </div>
            </div>

            <div>
              {images &&
                images.map((value, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={6}>
                      <div className={classes.border}>
                        <img
                          onClick={() => handleImgClick(index)}
                          src={value}
                          width="100%"
                        />
                      </div>
                    </Grid>
                  );
                })}
            </div>
            {alternatives &&
              alternatives.map((value, index) => {
                const choice = Object.keys(value);
                const value_choice = Object.values(value);
                return (
                  <>
                    <Radio
                      dataTest="dhis2-uicore-radio"
                      label={value_choice}
                      name={choice}
                      id={index}
                      onChange={handleSingleCheck}
                      checked={isChecked.includes(String(choice))}
                    />
                  </>
                );
              })}
            <div className={classes.media}>
              {image && (
                <img
                  src={image}
                  width="70%"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                  }}
                  alt=""
                />
              )}
              {iframe && <div dangerouslySetInnerHTML={{ __html: iframe }} />}
            </div>
            {components && <QuizUiComponents />}
          </>
        </div>
      </div>
    </>
  );
}

export default Questions;
