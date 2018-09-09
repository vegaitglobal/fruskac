import { StyleSheet, Platform } from "react-native";
import * as Screen from "../../utils/screen";

export default StyleSheet.create({
  cover: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  article: {
    width: Screen.width,
  },
  articleBody:{
    borderColor: "#ccc",
    borderTopWidth: 1,
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Screen.width - 5,
    padding: 20,
  },
  articleTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'left'
  },
  articleText: {
    marginTop: 10,
    width: Screen.width - 40,
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'justify'
  }
});