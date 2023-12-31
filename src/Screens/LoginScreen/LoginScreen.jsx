import React, { useState } from "react";

import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";

import bgImg from "../../assets/images/bg.png";

const LoginScreen = () => {
  const [state, setState] = useState({
    email: { value: "", focused: false },
    password: { value: "", focused: false },
  });

  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = () => {
    console.log(state);
    Keyboard.dismiss();
    setState({
      email: { value: "", focused: false },
      password: { value: "", focused: false },
    });
  };

  const handleFocus = (input) => {
    setState((prevState) => ({
      ...prevState,
      [input]: { ...prevState[input], focused: true },
    }));
  };
  const handleBlur = (input) => {
    setState((prevState) => ({
      ...prevState,
      [input]: { ...prevState[input], focused: false },
    }));
    Keyboard.dismiss();
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (input, value) => {
    if (input === "password") {
      value = value.toLowerCase();
    }
    setState((prevState) => ({
      ...prevState,
      [input]: { ...prevState[input], value },
    }));
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={bgImg} style={styles.imageBg}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "android" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.form,
                }}
              >
                <View>
                  <Text style={styles.title}>Увійти</Text>
                </View>
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      state.email.focused && styles.focusedInput,
                    ]}
                    value={state.email.value}
                    placeholder="Адреса електронної пошти"
                    onChangeText={(value) => handleChange("email", value)}
                    onFocus={() => {
                      handleFocus("email");
                    }}
                    onBlur={() => {
                      handleBlur("email");
                    }}
                  />
                </View>
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      state.password.focused && styles.focusedInput,
                    ]}
                    value={state.password.value}
                    secureTextEntry={showPassword}
                    placeholder="Пароль"
                    onChangeText={(value) => handleChange("password", value)}
                    onFocus={() => {
                      handleFocus("password");
                    }}
                    onBlur={() => {
                      handleBlur("password");
                    }}
                  />
                  <TouchableOpacity>
                    <Text style={styles.showText} onPress={passwordVisibility}>
                      {showPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.accountText}>
                    Немає акаунту?
                    <Text style={styles.registrationText}>
                      {" "}
                      Зареєструватися
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
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
  scrollView: {
    flexGrow: 1,
    justifyContent: "flex-end",
    // paddingTop: 160,
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
