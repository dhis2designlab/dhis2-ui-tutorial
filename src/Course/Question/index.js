import React from "react";
import QuizUiComponents from "./QuizUiComponents.js";
import ShowCode from "./ShowCode.js";
import Hints from "./Hints.js";

import BreadCrumb from "./BreadCrumb.js";
import Sections from "./Sections";
import RadioButtons from "./RadioButtons";
import Images from "./Images";
import Image from "./Image";

import styled from "styled-components";

const Code = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  @media (max-width: 959px) {
    width: 80%
  }
`;

const Container = styled.div`
  padding-top: 128px;
`;

function Question({
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
  const handleClick = (value) => {
    handleImgClick(value);
  };

  return (
    <Container>
      <Content>
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
        {image && <Image image={image} imageWidth={imageWidth} />}
      </Content>
      <Code>
        {iframe && <div dangerouslySetInnerHTML={{ __html: iframe }} />}
        {hints && <Hints hints={hints} />}
        {showCode && <ShowCode showCode={showCode} />}
        {components && <QuizUiComponents />}
      </Code>
    </Container>
  );
}

export default Question;
