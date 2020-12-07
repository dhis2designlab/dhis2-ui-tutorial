import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import QuizUiComponents from "./QuizUiComponents.js";
import ShowCode from "../components/ShowCode.js"
import Hints from "../components/Hints.js";

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
    width: "75ch",
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
    marginRight: "26px",
    marginLeft: "26px",
    marginBottom: "16px",
  },
}));

function Questions({
  setPoints,
  points,
  images,
  sections,
  iframe,
  question,
  image,
  information,
  components,
  questions,
  breadcrumb,
  title,
  showCode,
  section,
  hints,
  imageWidth,
  handleImgClick,
  chosenValue,
  isCorrect,
  isIncorrect,
  solutionImg,
}) {
  const classes = useStyles();

  const handleClick = (value) => {
    handleImgClick(value);
  };

  return (
    <>
      <div className={classes.question}>
        <div className={classes.text}>
          <BreadCrumb title={title} breadcrumb={breadcrumb} section={section} />
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
              handleImgClick={handleClick}
              chosenValue={chosenValue}
              solutionImg={solutionImg}
            />
          )}
        </div>
        {image && <Image image={image} imageWidth={imageWidth} />}
      </div>
      {iframe && (
        <div className={classes.media}>
          <div dangerouslySetInnerHTML={{ __html: iframe }} />
        </div>
      )}
      {hints && <Hints hints={hints}/>}
      {showCode && <ShowCode showCode={showCode}/>}
      {components && <QuizUiComponents />}
    </>
  );
}

export default Questions;
