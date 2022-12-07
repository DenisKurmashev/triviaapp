import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import map from "lodash/map";
import constant from "lodash/fp/constant";

import { useTranslation } from "app/provider/LocaleProvider";
import { ActivityIndicator } from "app/component/base/ActivityIndicator";
import { Button } from "app/component/base/Button";
import { Text } from "app/component/base/Text";
import { Card } from "app/component/base/Card";

import { styles } from "./Quiz.style";

/**
 * @param {{
 *   hasData: boolean,
 *   category: string,
 *   question: string,
 *   questionIndex: number,
 *   questionsCount: number,
 *   answers: string[],
 *   onNext: (answer: string) => any,
 *   fetchData: () => any
 * }} props
 * @returns
 */
export const Quiz = ({
  hasData,
  category,
  question,
  questionIndex,
  questionsCount,
  answers,
  onNext,
  fetchData,
}) => {
  const { ts } = useTranslation("quiz");

  useEffect(() => {
    fetchData();
  }, []);

  if (!hasData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text type="primary">{category}</Text>
      <View style={styles.cardContainer}>
        <Card>{question}</Card>
        <Text>
          {ts("outOf", () => (
            <>
              {questionIndex + 1} of {questionsCount}
            </>
          ))}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {map(answers, (answer) => {
          return (
            <Button
              key={answer}
              style={{ base: styles.button }}
              label={answer}
              onPress={() => onNext(answer)}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

Quiz.defaultProps = {
  hasData: false,
  category: "",
  question: "",
  questionIndex: 0,
  questionsCount: 0,
  answers: [],
  onNext: constant(null),
  fetchData: constant(null),
};
