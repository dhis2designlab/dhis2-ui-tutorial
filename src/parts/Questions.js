import React, { useState } from "react";

import { makeStyles, StylesProvider } from "@material-ui/core/styles";

import QuizUiComponents from "./QuizUiComponents";

import BreadCrumb from "../components/BreadCrumb.js";
import Sections from "../components/Sections";
import RadioButtons from "../components/RadioButtons";
import Images from "../components/Images";
import Image from "../components/Image";

const useStyles = makeStyles((theme) => ({
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
}));

function Questions({
  sections,
  points,
  setPoints,
  correct,
  images,
  question,
  image,
  information,
  iframe,
  components,
  questions,
  breadcrumb,
  title,
}) {
  const classes = useStyles();

  const [chosenImg, setChosenImg] = useState("");
  const [chosenValue, setChosenValue] = useState("");

  const handleImgClick = (value) => {
    if (chosenValue !== "") return;

    if (value == correct) {
      setChosenImg("correct");
      setChosenValue(value);
      setPoints(points + 1);
    } else {
      setChosenImg("incorrect");
      setChosenValue(value);
    }
  };

  const isCorrect = chosenImg == "correct";
  const isIncorrect = chosenImg == "incorrect";

  return (
    <>
      <div className={classes.question}>
        <div className={classes.text}>
          <BreadCrumb title={title} breadcrumb={breadcrumb} />
          {question && <h1>{question}</h1>}
          {information && <p>{information}</p>}
          {sections && <Sections sections={sections} />}
          {questions && (
            <RadioButtons
              setPoints={setPoints}
              points={points}
              questions={questions}
            />
          )}
          {images && (
            <Images
              isCorrect={isCorrect}
              isIncorrect={isIncorrect}
              images={images}
              handleImgClick={handleImgClick}
              chosenValue={chosenValue}
            />
          )}
        </div>
        {image && <Image image={image} />}
        {iframe && (
          <div className={classes.media}>
            <div dangerouslySetInnerHTML={{ __html: iframe }} />
          </div>
        )}
        {components && <QuizUiComponents />}
      </div>
    </>
  );
}

export default Questions;

/** {alternatives &&
alternatives.map((value, index) => {
  const choice = Object.keys(value);
  console.log(choice)
  const value_choice = Object.values(value);
  return (
    <>
      <Radio
        dataTest="dhis2-uicore-radio"
        label={value_choice}
        name={choice}
        id={index}
        onChange={handleRadioCheck}
        checked={isChosenRadio == choice}
      />
    </>
  );
})} */
