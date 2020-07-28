import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import topImageFB from "../assets/topImageFB.jpg";

const windowWidth = Dimensions.get("window").width;

export default function FbLogin() {
  return (
    <View style={styles.safeArea}>
      {/* View1 Top */}
      <View style={styles.view1}>
      <StatusBar style="light" />
        <Image source={topImageFB} style={styles.topImage} />
      </View>

      {/* View2 Bottom */}
      <View style={styles.view2}>
        <TextInput
          style={styles.usernamePassword}
          placeholder="Số điện thoại hoặc email"
        />
        <TextInput
          style={styles.usernamePassword}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.dangNhapButton}>
          <Text style={styles.dangNhapText}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quenPassQuayLaiButton}>
          <Text style={styles.quenPassQuayLaiText}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quenPassQuayLaiButton}>
          <Text style={styles.quenPassQuayLaiText}>Quay lại</Text>
        </TouchableOpacity>
      </View>

      {/* View3 Footer */}
      <View style={styles.view3}>
        <View style={styles.viewHoac}>
          <View style={styles.line}></View>
          <Text style={styles.hoacText}>HOẶC</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity style={styles.taoTaiKhoanMoiButton}>
        <Text style={styles.taoTaiKhoanMoiText}>Tạo tài khoản mới</Text>
      </TouchableOpacity>
      </View>
      {/* 
      <View style={styles.testView}>
        
      </View> */}
      {/* 
      

      <View style={styles.hoac}>
        
      </View>

       */}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "#053d87",
  },
  usernamePassword: {
    color: "#053d85",
    fontSize: 16,
    height: 40,
    textAlign: "left",
    paddingLeft: 15,
    // width: "100%",
    // marginHorizontal: 20,
    backgroundColor: "#fff",
    borderColor: "#f4f4f4",
    borderWidth: 1,
  },
  view1: {
    // backgroundColor: "#053d85",
    backgroundColor: "red",
    flex: 3 / 10,
  },
  view2: {
    // backgroundColor: "#8c8c8c",
    flex: 4 / 10,
    padding: 20,
  },
  view3: {
    flex: 3 / 10,
    // backgroundColor: "#7ebef2",
    alignItems: "center",
    padding: 20,
  },
  dangNhapButton: {
    backgroundColor: "#1977f3",
    height: 40,
    marginVertical: 16,
    justifyContent: "center",
    borderRadius: 5,
  },
  dangNhapText: {
    textAlign: "center",
    color: "#fff",
  },
  quenPassQuayLaiButton: {
    justifyContent: "center",
    margin: 2,
  },
  quenPassQuayLaiText: {
    textAlign: "center",
    margin: 2,
    color: "#1977f3",
  },
  hoacText: {
    color: "#040404",
    fontSize: 14,
  },
  line: {
    borderBottomColor: "#8c8c8c",
    width: "20%",
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  viewHoac: {
    marginTop: 60,
    marginHorizontal: 40,
    // backgroundColor: "green",
    height: 20,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    
  },
  taoTaiKhoanMoiButton: {
backgroundColor: "#e7f3ff",
marginTop: 30,
width: "100%",
height: 40,
alignItems: "center",
justifyContent: "center"
  },
  taoTaiKhoanMoiText: {
    color: "#053d85"
  },
  topImage: {
    // width: windowWidth,
    // height: (windowWidth * 338) / 178,
    width: "100%",
    height: "100%",
    // resizeMode: "contain",
  },
  testView: {
    backgroundColor: "#053d85",
  },
});
