import React from "react";
import { ActivityIndicator as RNActivityIndicator } from "react-native";

/**
 * @param {{size: number | "small" | "large"}} props
 * @returns
 */
export const ActivityIndicator = ({ size }) => {
  return <RNActivityIndicator animating size={size} />;
};

ActivityIndicator.defaultProps = {
  size: "small",
};
