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
    backgroundColor: '#fff',
  },
  banner: {
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  listitem: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    fontSize: 18,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  }
});