import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Ex3prev() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.redText}> Menu </Text>
      </View>
      <View style={styles.container2}>
        <Text> Hello World</Text>
      </View>
      <View style={styles.container1}>
        <Text> Footer </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27ae60",
    alignItems: "center",
    justifyContent: "space-between"
  },
  container1: {
    width: "100%",
    height: "100",
    backgroundColor: "#8e44ad",
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    width: "100%",
    height: "100",
    backgroundColor: "#c0392b",
    alignItems: "center",
    justifyContent: "center"
  },
  redText: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
  blueText: {
    color: "blue",
    fontSize: 12
  },
  viewStyle: {
    width: 250,
    height: 250,
    backgroundColor: "#f1c40f",
    // padding : 30,
    alignItems: "center",
    justifyContent: "center"
  }
});
