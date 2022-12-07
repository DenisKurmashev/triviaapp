import { createAsyncThunk } from "@reduxjs/toolkit";
import map from "lodash/fp/map";
import get from "lodash/fp/get";

import { STORE_QUIZ } from "app/enum/store.enum";
import { fetchData } from "app/util/fetch.util";

export const fetchQuestions = createAsyncThunk(
  `${STORE_QUIZ}/fetchQuestions`,
  () => {
    return fetchData("", {
      query: { amount: 10, difficulty: "hard", type: "boolean" },
    })
      .then((response) => response.json())
      .then(get("results"));
  }
);
