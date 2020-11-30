import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";

import { quiz_data } from "../../quiz.js";
import { UserContext } from "../../userContext";

import FinishQuiz from "../../components/FinishQuiz";
import IntroductionCourse from "../../parts/introductionCourse";
import Questions from "../../parts/Questions.js";
import { Button } from "@dhis2/ui";

import main from "../../styles.module.css";

import styles from "./styles.module.css";

import { db } from "../../firebase";

function Course() {
  let { id } = useParams();

  const { currentUser, completedCourses, setCompletedCourses } = useContext(
    UserContext
  );

  const [indexState, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [isChosenRadio, setChosenRadio] = useState("");

  const quizData = quiz_data.map((q) => q);

  const { title, about, topics, quizId, status, courseImg, subtopics } = quizData[id];

  const {
    question,
    alternatives,
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
  } = quizData[id].steps[indexState];

  const handleStartOver = () => {
    setIndex(0);
    setPoints(0);
    setFinished(false);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    if (indexState - 1 >= 0) {
      setFinished(false);
      setIndex(indexState - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNextClick = () => {
    if (isChecked.includes(correct) || isChosenRadio == correct) {
      setPoints(points + 1);
    }
    if (isChecked.includes(correct) || isChosenRadio == correct) {
      setPoints(points + 1);
    }
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

  const handleSingleCheck = (e) => {
    const name = e.name;
    if (isChecked.includes(name[0])) {
      setIsChecked(
        isChecked.filter((checked_name) => checked_name !== name[0])
      );
      return;
    }

    isChecked.push(name[0]);
    setIsChecked([...isChecked]);
  };

  const handleRadioCheck = (e) => {
    const name = e.name;
    // if (isChosenRadio !== name[0]) {
    //  setChosenRadio(name[0]);
    //  }
  };

  return (
    <main className={main.container}>
      <p>go back to mainpage</p>
      <>
        {indexState == 0 ? (
          <IntroductionCourse
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
              <FinishQuiz setIndex={handleStartOver}  points={points} />
            ) : (
              <>
                <Questions
                  setPoints={setPoints}
                  points={points}
                  correct={correct}
                  handleBackClick={handleBackClick}
                  handleNextClick={handleNextClick}
                  images={images}
                  sections={sections}
                  iframe={iframe}
                  isChecked={isChecked}
                  handleSingleCheck={handleSingleCheck}
                  alternatives={alternatives}
                  image={image}
                  question={question}
                  information={information}
                  components={components}
                  handleRadioCheck={handleRadioCheck}
                  isChosenRadio={isChosenRadio}
                  questions={questions}
                  breadcrumb={breadcrumb}
                  title={title}
                  showCode={showCode}
                  section={section}
                  hints={hints}
                  imageWidth={imageWidth}
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
    </main>
  );
}

export default Course;
