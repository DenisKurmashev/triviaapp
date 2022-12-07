import React from "react";
import { View, SafeAreaView } from "react-native";
import constant from "lodash/fp/constant";

import { useTranslation } from "app/provider/LocaleProvider";
import { Text } from "app/component/base/Text";
import { Button } from "app/component/base/Button";

import { styles } from "./Home.style";

export const Home = ({ onOpenQuiz }) => {
  const { ts } = useTranslation("home");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text type="primary" style={styles.text}>
          {ts("welcome", "Welcome to the \nTrivia Challenge!")}
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.text}>
          {ts(
            "description",
            "You will be presented \nwith 10 True or False \nquestions"
          )}
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text>{ts("score", "Can you score 100%?")}</Text>
      </View>
      <Button
        label={ts("begin", "Begin")}
        style={{ base: styles.buttonContainer }}
        onPress={onOpenQuiz}
      />
    </SafeAreaView>
  );
};

Home.defaultProps = {
  onOpenQuiz: constant(null),
};
