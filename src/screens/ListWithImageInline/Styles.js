import { StyleSheet, Platform } from "react-native";
import * as Screen from "../../utils/screen";

export default StyleSheet.create({
  list: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#eee"
  },
  card: {
    marginTop: 5,
    marginHorizontal: 5,
    padding: 15,
    backgroundColor: "#fff",
    height: 100,
    borderColor: "#e0e0e0",
    borderWidth: 1,
  },
  cardTitle: {
    position: "absolute",
    left: 115,
    top: 10,
    fontWeight: 'bold',
    color: "#000",
    fontSize: 20,
  },
  cardImage: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  cardSummary: {
    position: "absolute",
    left: 115,
    top: 40,
    width: Screen.width - 130,
    flex: 1,
    textAlign: "justify",
    fontWeight: 'normal',
    color: "#aaa",
    fontSize: 15,
  },
});