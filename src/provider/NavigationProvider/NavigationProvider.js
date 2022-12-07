import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeContainer } from "app/component/screen/Home";
import { QuizContainer } from "app/component/screen/Quiz";
import { ResultsContainer } from "app/component/screen/Results";
import {
  NAVIGATION_HOME,
  NAVIGATION_QUIZ,
  NAVIGATION_RESULT,
} from "app/enum/navigation.enum";

const Stack = createNativeStackNavigator();

export const NavigationProvider = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NAVIGATION_HOME} component={HomeContainer} />
        <Stack.Screen name={NAVIGATION_QUIZ} component={QuizContainer} />
        <Stack.Screen name={NAVIGATION_RESULT} component={ResultsContainer} />
      </Stack.Navigator>
      {/**
       * Modal screens go here
       */}
    </NavigationContainer>
  );
};
