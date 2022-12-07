import React from "react";
import { Text as RNText } from "react-native";

import { TEXT_TYPE_DEFAULT, TEXT_TYPE_PRIMARY } from "./Text.enum";
import { styles } from "./Text.style";

/**
 * @param {{type: (TEXT_TYPE_PRIMARY|TEXT_TYPE_DEFAULT)}} props
 * @returns
 */
export const Text = ({ type, style, ...props }) => {
  const textStyles = [style, styles.base, styles[type]];

  return <RNText {...props} style={textStyles} />;
};

Text.defaultProps = {
  type: TEXT_TYPE_DEFAULT,
};
