import { StyleSheet, Platform } from "react-native";
import * as Screen from "../../utils/screen";

export default StyleSheet.create({
  body: {
    flex: 1,
  },
  list: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#fff"
  },
  card: {
    padding: 15,
    backgroundColor: "#fff",
    height: 158,
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  cardTitle: {
    position: "absolute",
    left: 140,
    top: 10,
    fontWeight: 'normal',
    color: "#000",
    fontSize: 20,
  },
  cardImage: {
    position: "absolute",
    left: 35,
    top: 44,
  },
  cardSummary: {
    position: "absolute",
    left: 290,
    top: 15,
    flex: 1,
    textAlign: "right",
    fontWeight: 'normal',
    color: "#000",
    fontSize: 16,
  },
  cardDetails: {
    position: "absolute",
    left: 140,
    top: 40,
    flex: 1,
  },
  cardDetailsKey: {
    color: "#777",
    fontSize: 14,
  },
  cardValues: {
    position: "absolute",
    left: 290,
    top: 40,
    flex: 1,
  },
  cardDetailsValue: {
    color: "#000",
    fontWeight: "normal",
    fontSize: 14,
  }
});