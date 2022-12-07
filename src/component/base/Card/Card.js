import React from "react";
import { View } from "react-native";
import get from "lodash/get";

import { Text } from "app/component/base/Text";

import { styles } from "./Card.style";

export const Card = ({ style, children }) => {
  const containerStyle = [styles.container, get(style, "base")];
  const textStyle = [styles.text, get(style, "label")];

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

Card.defaultProps = {
  style: { base: {}, label: {} },
  children: null,
};
