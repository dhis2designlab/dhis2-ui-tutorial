import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { quiz_data } from "../../quiz.js";
import { UserContext } from "../../userContext";

import FinishQuiz from "../../components/FinishQuiz";
import IntroductionCourse from "../../components/IntroductionCourse";
import QuizSection from "../../components/QuizSection";

import styles from "./styles.module.css";

import main from "../../styles.module.css";

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
  const [isChosenRadio, setChosenRadio] = useState('');

  const quizData = quiz_data.map((q) => q);

  const { title, about, topics, quizId, status } = quizData[id];

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
  } = quizData[id].steps[indexState];

  const handleStartOver = () => {
    setIndex(0);
    setPoints(0);
    setFinished(false);
    window.scrollTo(0, 0)
  };

  const handleBackClick = () => {
    if (indexState - 1 >= 0) {
      setFinished(false);
      setIndex(indexState - 1);
      window.scrollTo(0, 0)
    }
  };

  const handleNextClick = () => {
    if (isChecked.includes(correct) || isChosenRadio == correct) {
      setPoints(points + 1);
    }
    if (indexState + 1 < quizData[id].steps.length) {
      setIndex(indexState + 1);
      window.scrollTo(0, 0)
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
          });
        setCompletedCourses([
          ...completedCourses,
          { points: points, name: title },
        ]);
      }

      setFinished(true);
    }
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
    if (isChosenRadio !== name[0]) {
      setChosenRadio(name[0]);
    }
  };

  return (
    <div>
      <main>
        <p>go back to mainpage</p>
        <div className={main.container}>
          <div>
            {indexState == 0 ? (
              <IntroductionCourse
                status={status}
                handleNextClick={handleNextClick}
                title={title}
                topics={topics}
                about={about}
              />
            ) : (
              <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                  {finished ? (
                    <FinishQuiz setIndex={handleStartOver} points={points} />
                  ) : (
                    <QuizSection
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
                    />
                  )}{" "}
                </Grid>
              </Grid>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Course;
