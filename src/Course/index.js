import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";

import { quiz_data } from "../quiz.js";
import { UserContext } from "../userContext";

import FinishedCourse from "./FinishedCourse.js";
import CourseOverview from "./CourseOverview.js";
import Question from "./Question";
import { Button } from "@dhis2/ui";
import Grid from "@material-ui/core/Grid";

import { db } from "../firebase";

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
    totalPoints
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
            totalPoints={totalPoints}
          />
        ) : (
          <>
            {finished ? (
              <FinishedCourse completedCourses={completedCourses} setIndex={handleStartOver} points={points} />
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
                <Grid container justify="center" spacing={6}>
                  <div style={{marginTop: '26px', paddingTop: '12px', marginRight: '12px'}}>
                    <Button
                      dataTest="dhis2-uicore-button"
                      onClick={handleBackClick}
                      secondary
                      type="button"
                    >
                      Back
                    </Button>
                  </div>
                  <div style={{marginTop: '26px', paddingTop: '12px'}}>
                    <Button
                      dataTest="dhis2-uicore-button"
                      onClick={handleNextClick}
                      secondary
                      type="button"
                    >
                      Next
                    </Button>
                    </div>
                  </Grid>
              </>
            )}{" "}
          </>
        )}
      </>
    </>
  );
}

export default Course;
