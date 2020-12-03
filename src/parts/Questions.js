import React, { useState } from "react";

import { makeStyles, StylesProvider } from "@material-ui/core/styles";

import QuizUiComponents from "./QuizUiComponents";

import BreadCrumb from "../components/BreadCrumb.js";
import Sections from "../components/Sections";
import RadioButtons from "../components/RadioButtons";
import Images from "../components/Images";
import Image from "../components/Image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@dhis2/ui";

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
    marginRight: '26px',
    marginLeft: '26px',
    marginBottom: "16px",
  }
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
  showCode,
  section,
  hints,
  imageWidth,
  handleImgClick,
  chosenValue,
  chosenImg,
  isCorrect,
  isIncorrect,
  solutionImg,
}) {
  const classes = useStyles();

  const [shouldShowCode, setShowCode] = useState(false);
  const [shouldShowHint, setShowHint] = useState(false);

  const handleClick = (value) => {
    console.log(value)
    handleImgClick(value)
  };

  return (
    <>
      <div className={classes.question}>
        <div className={classes.text}>
          <BreadCrumb title={title} breadcrumb={breadcrumb} section={section}/>
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
        {image && <Image image={image} imageWidth={imageWidth}/>}
        </div>
        {iframe && (
          <div className={classes.media}>
            <div dangerouslySetInnerHTML={{ __html: iframe }} />
          </div>
        )}
        {hints && (
          <div className={classes.media}>
          <Button onClick={() => setShowHint(!shouldShowHint)}>{shouldShowHint ? "Hide hint" : "Show hint"}</Button>
          {shouldShowHint &&
            <ul>
              {hints.map((hint) => {
                return <li>{hint}</li>
              })}
            </ul>
           }
          </div>
        )}
        {showCode && (
          <div className={classes.media}>
            <Button onClick={() => setShowCode(!shouldShowCode)}>{shouldShowCode ? "Hide solution" : "Show solution"}</Button>
            {shouldShowCode && (
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {showCode}
              </SyntaxHighlighter>
            )}
          </div>
        )}
        {components && <QuizUiComponents />} 
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
