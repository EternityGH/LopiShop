import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from 'react-native-elements'

function SignUp(props) {
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../assets/images/Gradient_rnJE5Br.png")}
        >
          <View style={styles.progressBarColumn}>
            <View style={styles.progressBar}>
              <View style={styles.icon2Row}>
                <IoniconsIcon
                  name="md-checkmark-circle"
                  style={styles.icon2}
                ></IoniconsIcon>
                <View style={styles.rect4}></View>
                <EntypoIcon name="time-slot" style={styles.icon3}></EntypoIcon>
                <View style={styles.rect5}></View>
              </View>
              <View style={styles.icon2RowFiller}></View>
              <FontAwesomeIcon
                name="circle"
                style={styles.icon4}
              ></FontAwesomeIcon>
            </View>
            <Text style={styles.text3}>ĐĂNG KÝ THÀNH VIÊN</Text>
            <View style={styles.form}>
              <View style={styles.nameColumn}>
                <View style={styles.name}>
                <FontAwesomeIcon
                    name="user-circle-o"
                    style={styles.icon5}
                  ></FontAwesomeIcon>
                  <TextInput
                    placeholder="Họ và tên"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.nameInput}
                  ></TextInput>
                </View>
                <View style={styles.name}>
                <FontAwesomeIcon
                    name="envelope-o"
                    style={styles.icon7}
                  ></FontAwesomeIcon>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.nameInput}
                  ></TextInput>
                </View>
                <View style={styles.name}>
                <FontAwesomeIcon
                    name="phone"
                    style={styles.icon7}
                  ></FontAwesomeIcon>
                  <TextInput
                    placeholder="Số điện thoại"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.nameInput}
                  ></TextInput>
                </View>
                <View style={styles.name}>
                <FontAwesomeIcon
                    name="lock"
                    style={styles.icon7}
                  ></FontAwesomeIcon>
                  <TextInput
                    placeholder="Mật khẩu"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.nameInput}
                  ></TextInput>
                </View>
                <View style={styles.name}>
                <FontAwesomeIcon
                    name="lock"
                    style={styles.icon7}
                  ></FontAwesomeIcon>
                  <TextInput
                    placeholder="Nhập lại mật khẩu"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.nameInput}
                  ></TextInput>
                </View>
                <View style={styles.checkCondition}>
                <CheckBox
                  center
                  title='Đồng ý các điều khoản'
                  checkedIcon='dot-circle-o'
                  containerStyle={{backgroundColor: 'transparent',   
                                  borderColor: 'transparent'}}
                  textStyle={{color: 'white'}}
                />
                </View>
               
              </View>
            </View>
          </View>
          <View style={styles.progressBarColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Timeline")}
              style={styles.button}
            >
              <Text style={styles.text2}>Đăng ký</Text>
            </TouchableOpacity>
            <Text style={styles.text4}>Trở lại đăng nhập</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  rect2: {
    flex: 1
  },
  rect2_imageStyle: {},
  progressBar: {
    height: 40,
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 28
  },
  icon2: {
    color: "rgba(30,174,199,1)",
    fontSize: 40,
    width: 33,
    height: 40
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 40,
    marginLeft: 6,
    marginTop: 16
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 35,
    width: 40,
    height: 36,
    marginLeft: 4,
    marginTop: 4
  },
  rect5: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.75,
    borderRadius: 40,
    marginTop: 16
  },
  icon2Row: {
    height: 40,
    flexDirection: "row"
  },
  icon2RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 67,
    alignSelf: "center"
  },
  form: {
    height: 331,
    marginTop: 11
  },
  name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 30
  },
  checkCondition: {
    height: 59,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  nameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  group: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 8
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    width: 33,
    height: 33,
    marginLeft: 24,
    marginTop: 23
  },
  textInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 4,
    marginTop: 14
  },
  email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    width: 278,
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center"
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 22,
    alignSelf: "center"
  },
  emailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 23,
    marginTop: 14
  },
  nameColumn: {},
  nameColumnFiller: {
    flex: 1
  },
  group2: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 9
  },
  icon9: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  textInput2: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  group2Column: {},
  progressBarColumn: {
    marginTop: 53,
    marginLeft: 41,
    marginRight: 41
  },
  progressBarColumnFiller: {
    flex: 1
  },
  button: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 57
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text4: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "center"
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41
  }
});

export default SignUp;