import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const BodyText = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text> 

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-regular'
  },
});

export default BodyText;
