import { StyleSheet } from "react-native";

import { gutter, screenWidth } from "app/style";

const size = screenWidth - gutter * 2;

export const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    margin: gutter,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    textAlign: "center",
  },
});
