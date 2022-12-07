import React from "react";
import { TouchableOpacity } from "react-native";
import constant from "lodash/fp/constant";
import get from "lodash/get";

import { Text } from "app/component/base/Text";

import { styles } from "./Button.style";

/**
 * @param {{onPress: (...args: any) => any, label: string}} props
 * @returns
 */
export const Button = ({ onPress, label, style }) => {
  const containerStyle = [styles.container, get(style, "base")];
  const textStyle = [styles.label, get(style, "label")];

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  onPress: constant(null),
  label: "",
  style: { base: {}, label: {} },
};
