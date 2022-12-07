import { configureStore } from "@reduxjs/toolkit";

import { STORE_QUIZ } from "app/enum/store.enum";

import { quizReducer } from "./quiz";

export const store = configureStore({
  reducer: {
    [STORE_QUIZ]: quizReducer,
  },
});
