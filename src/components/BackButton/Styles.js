/**
 * @flow
 */
import { StyleSheet, Platform } from "react-native";
import { tintColor } from "../../styles/CommonStyles";

export default StyleSheet.create({
  buttonHolder: {
    marginLeft: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  icon: {
    color: tintColor,
    marginRight: 8,
    top: Platform.OS === "ios" ? 2 : 1
  },
  text: { color: tintColor, fontSize: 16 }
});
