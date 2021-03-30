import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        })
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 60,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: Colors.primary,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? "white" : Colors.primary,
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
