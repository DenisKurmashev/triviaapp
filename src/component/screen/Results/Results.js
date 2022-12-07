import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import map from "lodash/map";
import constant from "lodash/fp/constant";

import { useTranslation } from "app/provider/LocaleProvider";
import { Button } from "app/component/base/Button";
import { Text } from "app/component/base/Text";

import { styles } from "./Results.style";

export const Results = ({
  results,
  questionsCount,
  correctAnswersCount,
  onTryAgain,
}) => {
  const { ts } = useTranslation("results");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text type="primary">{ts("yuScored", "You scored")}</Text>
          <Text type="primary">
            {correctAnswersCount} / {questionsCount}
          </Text>
        </View>
        {map(results, ({ question, isCorrect }) => {
          return (
            <View key={question} style={styles.questionContainer}>
              <Text style={styles.questionState}>{isCorrect ? "+" : "-"}</Text>
              <Text style={styles.questionText}>{question}</Text>
            </View>
          );
        })}
        <View style={styles.buttonContainer}>
          <Button label={ts("tryAgain", "Play again?")} onPress={onTryAgain} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Results.defaultProps = {
  results: [],
  questionsCount: 0,
  correctAnswersCount: 0,
  onTryAgain: constant(null),
};
