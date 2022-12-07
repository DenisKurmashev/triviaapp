import { createSelector } from "@reduxjs/toolkit";
import map from "lodash/map";
import get from "lodash/fp/get";
import size from "lodash/fp/size";
import concat from "lodash/fp/concat";
import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";

import { STORE_QUIZ } from "app/enum/store.enum";

export const quiz = get(STORE_QUIZ);

export const quizState = createSelector(quiz, get("state"));

export const quizCurrentQuestionIndex = createSelector(
  quiz,
  get("currentQuestionIndex")
);

export const quizQuestions = createSelector(quiz, get("questions"));

export const quizAnswers = createSelector(quiz, get("answers"));

export const quizCurrentQuestion = createSelector(
  [quizQuestions, quizCurrentQuestionIndex],
  (questions, index) => get(index)(questions)
);

export const quizQuestionsCount = createSelector(quizQuestions, size);

export const quizHasNextQuestion = createSelector(
  [quizQuestionsCount, quizCurrentQuestionIndex],
  (total, current) => current !== total - 1
);

export const quizCurrentQuestionCategory = createSelector(
  quizCurrentQuestion,
  get("category")
);

export const quizCurrentQuestionCorrectAnswer = createSelector(
  quizCurrentQuestion,
  get("correct_answer")
);

export const quizCurrentQuestionIncorrectAnswers = createSelector(
  quizCurrentQuestion,
  get("incorrect_answers")
);

export const quizCurrentQuestionText = createSelector(
  quizCurrentQuestion,
  get("question")
);

export const quizCurrentQuestionAnswers = createSelector(
  [quizCurrentQuestionCorrectAnswer, quizCurrentQuestionIncorrectAnswers],
  concat
);

export const quizResults = createSelector(
  [quizQuestions, quizAnswers],
  (questions, answers) =>
    map(questions, ({ question, correct_answer: correctAnswer }, index) => ({
      question,
      isCorrect: correctAnswer === answers[index],
    }))
);

export const quizCorrectAnswersCount = createSelector(
  quizResults,
  flow(filter(get("isCorrect")), size)
);
