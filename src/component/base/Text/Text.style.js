import { StyleSheet } from "react-native";

import { TEXT_TYPE_DEFAULT, TEXT_TYPE_PRIMARY } from "./Text.enum";

export const styles = StyleSheet.create({
  base: {
    fontSize: 20,
  },
  [TEXT_TYPE_DEFAULT]: {
    fontWeight: "normal",
  },
  [TEXT_TYPE_PRIMARY]: {
    fontWeight: "bold",
  },
});
