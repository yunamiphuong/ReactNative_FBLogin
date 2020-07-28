import React from "react";
import {StatusBar} from "expo-status-bar"
import { Text, StyleSheet, SafeAreaView, View, TextInput, Button, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Momo() {
  return (
    <SafeAreaView style={style.backgroundContainer}>
      <Text style={[style.textStyle, { fontWeight: "bold" }]}>Xin chao!</Text>

      <Text style={style.textStyle}> Hoang Yen Phuong </Text>
      <Text style={style.textStyle}>0999990099</Text>
      <TouchableOpacity>
          <TextInput style={style.passwordTextInput} secureTextEntry={true} placeholder />
      </TouchableOpacity>


      <View>
        <Text style={style.textStyle}>DANG NHAP</Text>
      </View>
      <View style={style.centeredContent}>
        <Text style={style.textStyle}>QUEN MAT KHAU</Text>
        <Text style={style.textStyle}>DANG KY</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#b0006d",
    alignItems: 'center'
  },
  buttonColor: {
    backgroundColor: "#8d015a",
  },
  centeredContent: {
    justifyContent: "center",
  },
  textStyle: {
    margin: 30,
    color: "#f0d9eb",
  },
});
