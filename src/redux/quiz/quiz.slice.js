import { createSlice } from "@reduxjs/toolkit";

import {
  STORE_QUIZ,
  STATE_INITIAL,
  STATE_IN_PROGRESS,
  STATE_ERROR,
  STATE_SUCCESS,
} from "app/enum/store.enum";

import { fetchQuestions } from "./quiz.thunk";

const initialState = {
  state: STATE_INITIAL,
  currentQuestionIndex: 0,
  questions: [],
  answers: [],
};

export const quizSlice = createSlice({
  name: STORE_QUIZ,
  initialState,
  reducers: {
    addAnswer: (st, { payload }) => {
      st.answers = [...st.answers, payload];
    },
    incrementQuestion: (st) => {
      st.currentQuestionIndex = st.currentQuestionIndex + 1;
    },
    resetAnswers: (st) => {
      st.currentQuestionIndex = 0;
      st.answers = [];
    },
  },
  extraReducers: {
    [fetchQuestions.pending]: (state) => {
      state.state = STATE_IN_PROGRESS;
    },
    [fetchQuestions.fulfilled]: (state, { payload }) => {
      state.state = STATE_SUCCESS;
      state.questions = payload;
    },
    [fetchQuestions.rejected]: (state) => {
      state.state = STATE_ERROR;
    },
  },
});

export const { addAnswer, incrementQuestion, resetAnswers } = quizSlice.actions;

export const quizReducer = quizSlice.reducer;
