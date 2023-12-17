import React, { useState } from "react";

import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Text,
  TextInput,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

import bgImg from "../../assets/images/bg.png";

const LoginScreen = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  const handleSubmit = () => {
    Keyboard.dismiss();
    setState({
      email: "",
      password: "",
    });
  };

  const handleFocus = (input) => {
    if (input === "email") setIsEmailFocused(true);
    else if (input === "password") setIsPasswordFocused(true);
  };

  const handleChangeFocus = (input) => {
    if (input === "email") setIsEmailFocused(false);
    else if (input === "password") setIsPasswordFocused(false);
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={bgImg} style={styles.imageBg}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "android" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                width: dimensions,
              }}
            >
              <View>
                <Text style={styles.title}>Увійти</Text>
              </View>
              <View>
                <TextInput
                  style={[styles.input, isEmailFocused && styles.focusedInput]}
                  value={state.email}
                  placeholder="Адреса електронної пошти"
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={() => {
                    handleFocus("email");
                  }}
                  onBlur={() => {
                    handleChangeFocus("email");
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={[
                    styles.input,
                    isPasswordFocused && styles.focusedInput,
                  ]}
                  value={state.password}
                  secureTextEntry={passwordVisibility}
                  placeholder="Пароль"
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  onFocus={() => {
                    handleFocus("password");
                  }}
                  onBlur={() => {
                    handleChangeFocus("password");
                  }}
                />
                <TouchableOpacity>
                  <Text style={styles.showText}>Показати</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Увійти</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.accountText}>
                  Немає акаунту?{" "}
                  <Text style={styles.registrationText}>Зареєструватися</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  form: {
    width: "100%",
    height: 489,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.3,
    paddingTop: 32,
    marginBottom: 33,
  },
  input: {
    borderWidth: 1,
    height: 50,
    width: 343,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    paddingLeft: 16,
    paddingRight: 16,
    marginHorizontal: 32,
    marginBottom: 16,
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
  showText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
    top: -51,
    left: 271,
  },
  btn: {
    marginHorizontal: 32,
    marginBottom: 16,
    width: 343,
    height: 51,
    borderRadius: 100,
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  accountText: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  registrationText: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
