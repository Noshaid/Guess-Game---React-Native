import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <BodyText>The Game is Over!</BodyText>
        <View style={styles.imageContainer}>
          <Image
            fadeDuration={300} //default is 300
            source={require("../assets/success.png")}
            //source={{uri: 'https://explorersweb.com/wp-content/uploads/2019/07/nims-k2-up.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your Phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        {/* <Button title="NEW GAME" onPress={props.onRestart} /> */}
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7, //"80%",
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30, //30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 40,
    marginVertical: Dimensions.get("window").height / 60, //20,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20, //20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
