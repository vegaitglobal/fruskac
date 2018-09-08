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
  },
  card: {
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    backgroundColor: "#fff"
  },
  cardTitle: {
    fontWeight: 'bold',
    color: "#000",
    fontSize: 20,
  },
  cardImage: {
    left: -15,
    top: -15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  cardSummary: {
    flex: 1,
    textAlign: "justify",
    fontWeight: 'normal',
    color: "#aaa",
    fontSize: 15,
  },
});