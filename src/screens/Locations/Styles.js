import { StyleSheet, Platform } from "react-native";
import * as Screen from "../../utils/screen";

export default StyleSheet.create({
  body: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  tabBar: {
    flex: 1,
    width: Screen.width,
    flexDirection: 'row',
    backgroundColor: "#fff",
    height: 45,
  },
  tabItem: {
    position: "relative",
    width: Screen.width / 2,
    borderColor: "#ccc",
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  tabItemSelected: {
    borderBottomColor: "#d02168",
    borderBottomWidth: 3,
  },
  listBox: {
    position: "absolute",
    width: Screen.width,
    top: 45,
    left: 0,
    right: 0,
    bottom: 0,
  },
  list: {
    width: Screen.width,
    backgroundColor: "#fff",
  },
  listItemType: {
    width: Screen.width / 2,
    height: 130,
    borderColor: "#ccc",
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  listItemTitleType: {
    marginTop: 10,
  },
  listItemPlace: {
    width: Screen.width,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  listItemTitlePlace: {
    textAlign: 'left',
  },
  listItemCountPlace: {
    textAlign: 'left',
    color: "#ccc"
  }
  
});