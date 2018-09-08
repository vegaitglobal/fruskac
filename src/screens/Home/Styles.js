import { StyleSheet, Platform } from "react-native";
import * as Screen from "../../utils/screen";

export default StyleSheet.create({
  greeter: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  listitem: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    borderBottomWidth:1,
    borderBottomColor: "#888"
  }
});