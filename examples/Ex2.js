import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Ex2() {
  return (
    // <SafeAreaView style={{flex : 1, justifyContent:'center', backgroundColor: 'red', alignContent: 'center'}}>
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text
          style={{
            color: "red",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 20
          }}
        >
          LALAA
        </Text>
        <Text style={{ color: "blue", fontSize: 10, marginBottom: 20 }}>
          TechMaster
        </Text>
        <Text style={styles.redText}>Big Red </Text>
        <Text style={styles.blueText}>Blue text</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
