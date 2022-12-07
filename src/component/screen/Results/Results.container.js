import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { NAVIGATION_HOME } from "app/enum/navigation.enum";
import {
  resetAnswers,
  quizResults,
  quizQuestionsCount,
  quizCorrectAnswersCount,
} from "app/redux/quiz";

import { Results } from "./Results";

export const ResultsContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const results = useSelector(quizResults);
  const questionsCount = useSelector(quizQuestionsCount);
  const correctAnswersCount = useSelector(quizCorrectAnswersCount);

  const onTryAgain = () => {
    dispatch(resetAnswers());
    navigation.navigate(NAVIGATION_HOME);
  };

  return (
    <Results
      results={results}
      questionsCount={questionsCount}
      correctAnswersCount={correctAnswersCount}
      onTryAgain={onTryAgain}
    />
  );
};
