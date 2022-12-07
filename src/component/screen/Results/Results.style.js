import { StyleSheet } from "react-native";

import { gutter } from "app/style";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: gutter,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: gutter * 2,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  questionState: {
    marginRight: gutter,
    color: "gray",
  },
  questionText: {
    flex: 1,
    color: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: gutter,
  },
});
