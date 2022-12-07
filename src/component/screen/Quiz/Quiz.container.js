import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { NAVIGATION_RESULT } from "app/enum/navigation.enum";
import { STATE_SUCCESS } from "app/enum/store.enum";
import {
  quizState,
  fetchQuestions,
  addAnswer,
  incrementQuestion,
  quizHasNextQuestion,
  quizCurrentQuestionIndex,
  quizQuestionsCount,
  quizCurrentQuestionCategory,
  quizCurrentQuestionText,
  quizCurrentQuestionAnswers,
} from "app/redux/quiz";

import { Quiz } from "./Quiz";

export const QuizContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector(quizState);
  const hasNext = useSelector(quizHasNextQuestion);
  const questionIndex = useSelector(quizCurrentQuestionIndex);
  const questionsCount = useSelector(quizQuestionsCount);
  const category = useSelector(quizCurrentQuestionCategory);
  const question = useSelector(quizCurrentQuestionText);
  const answers = useSelector(quizCurrentQuestionAnswers);

  const hasData = state === STATE_SUCCESS;

  const onNext = (answer) => {
    dispatch(addAnswer(answer));

    if (hasNext) {
      dispatch(incrementQuestion());
    } else {
      navigation.navigate(NAVIGATION_RESULT);
    }
  };

  const fetchData = () => {
    if (!hasData) {
      dispatch(fetchQuestions());
    }
  };

  return (
    <Quiz
      hasData={hasData}
      questionIndex={questionIndex}
      questionsCount={questionsCount}
      category={category}
      question={question}
      answers={answers}
      onNext={onNext}
      fetchData={fetchData}
    />
  );
};
