import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";

import { quiz_data } from "../quiz.js";
import { UserContext } from "../userContext";

import FinishedCourse from "./FinishedCourse.js";
import CourseOverview from "./CourseOverview.js";
import Question from "./Question";
import { Button } from "@dhis2/ui";

import { db } from "../firebase";

import styled from "styled-components";

const Main = styled.main`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: "blue";
`;



const styles = {
  cardGrid: {
    paddingTop: "8px",
    paddingBottom: "8px",
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "52px",
  },

  title: {
    textAlign: "center",
  },
  buttons: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  navigation: {
    textAlign: "center",
  },

  button: {
    margin: "6px",
  },
};
function Course() {
  let { id } = useParams();

  const { currentUser, completedCourses, setCompletedCourses } = useContext(
    UserContext
  );

  const [indexState, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [finished, setFinished] = useState(false);

  const quizData = quiz_data.map((q) => q);

  const {
    title,
    about,
    topics,
    quizId,
    status,
    courseImg,
    subtopics,
  } = quizData[id];
  const [chosenImg, setChosenImg] = useState("");
  const [chosenValue, setChosenValue] = useState(-1);

  const isCorrect = chosenImg === "correct";
  const isIncorrect = chosenImg === "incorrect";
  const {
    question,
    information,
    image,
    iframe,
    sections,
    images,
    components,
    correct,
    questions,
    breadcrumb,
    showCode,
    section,
    hints,
    imageWidth,
    solutionImg,
  } = quizData[id].steps[indexState];

  const handleStartOver = () => {
    setIndex(0);
    setPoints(0);
    setFinished(false);
    setChosenValue(-1);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    if (indexState - 1 >= 0) {
      setFinished(false);
      setIndex(indexState - 1);
      window.scrollTo(0, 0);
      setChosenValue(-1);
    }
  };

  const handleImgClick = (value) => {
    if (chosenValue !== -1) return;
    if (value === correct) {
      setChosenImg("correct");
      setChosenValue(value);
      setPoints(points + 1);
    } else {
      setChosenImg("incorrect");
      setChosenValue(value);
    }
  };

  const handleNextClick = () => {
    setChosenValue(-1);
    // if (isChecked.includes(correct) || isChosenRadio === correct) {
    //  setPoints(points + 1);
    //  }

    if (indexState + 1 < quizData[id].steps.length) {
      setIndex(indexState + 1);
    } else {
      if (currentUser.loggedIn) {
        db.collection("users")
          .doc(currentUser.uid)
          .collection("points")
          .doc(quizId)
          .set({
            name: title,
            id: id,
            points: points,
            courseImg: courseImg,
          });

        setCompletedCourses([
          ...completedCourses,
          { points: points, name: title, courseImg: courseImg },
        ]);
      }
      setFinished(true);
    }

    window.scrollTo(0, 0);
  };

  return (
    <>
      <>
        {indexState === 0 ? (
          <CourseOverview
            status={status}
            handleNextClick={handleNextClick}
            title={title}
            topics={topics}
            about={about}
            subtopics={subtopics}
          />
        ) : (
          <>
            {finished ? (
              <FinishedCourse setIndex={handleStartOver} points={points} />
            ) : (
              <>
                <Question
                  setPoints={setPoints}
                  points={points}
                  images={images}
                  sections={sections}
                  iframe={iframe}
                  question={question}
                  image={image}
                  information={information}
                  components={components}
                  questions={questions}
                  breadcrumb={breadcrumb}
                  title={title}
                  showCode={showCode}
                  section={section}
                  hints={hints}
                  imageWidth={imageWidth}
                  handleImgClick={handleImgClick}
                  chosenValue={chosenValue}
                  isCorrect={isCorrect}
                  isIncorrect={isIncorrect}
                  solutionImg={solutionImg}
                />
                <div className={styles.navigation}>
                  <span className={styles.button}>
                    <Button
                      dataTest="dhis2-uicore-button"
                      onClick={handleBackClick}
                      secondary
                      type="button"
                    >
                      Back
                    </Button>
                  </span>
                  <span className={styles.button}>
                    <Button
                      dataTest="dhis2-uicore-button"
                      onClick={handleNextClick}
                      secondary
                      type="button"
                    >
                      Next
                    </Button>
                  </span>
                </div>
              </>
            )}{" "}
          </>
        )}
      </>
    </>
  );
}

export default Course;
