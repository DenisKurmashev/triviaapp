import React, { useRef } from "react";

import { NAVIGATION_QUIZ } from "app/enum/navigation.enum";

import { Home } from "./Home";

export const HomeContainer = ({ navigation }) => {
  const onOpenQuiz = useRef(() => navigation.navigate(NAVIGATION_QUIZ)).current;

  return <Home onOpenQuiz={onOpenQuiz} />;
};
