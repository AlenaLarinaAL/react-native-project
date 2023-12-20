import { useState } from "react";

import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";

import bgImg from "../../assets/images/bg.png";
import avatarPlace from "../../assets/images/avatarPlace.png";
import addBtn from "../../assets/images/addBtn.png";

const RegistrationScreen = () => {
  const [state, setState] = useState({
    login: "",
    email: "",
    password: "",
  });
  const [isFocused, setIsFocused] = useState(null);
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = () => {
    console.log(state);
    Keyboard.dismiss();
    setState({
      email: "",
      password: "",
    });
  };

  const handleChangeText = (name, value) => {
    if (name === "password") {
      setState((prevState) => ({
        ...prevState,
        [name]: value.toLowerCase(),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onFocus = (name) => {
    setIsFocused(name);
  };

  const onBlur = () => {
    setIsFocused(null);
    Keyboard.dismiss();
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPressIn={onBlur}>
      <View style={styles.container}>
        <ImageBackground source={bgImg} style={styles.image}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "android" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.form,
                }}
              >
                <View style={styles.avatarContainer}>
                  <Image source={avatarPlace} style={styles.avatarPlace} />

                  <TouchableOpacity>
                    <Image source={addBtn} style={styles.addAvatarBtn} />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.title}>Реєстрація</Text>
                </View>
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      isFocused === "login" && styles.focusedInput,
                    ]}
                    value={state.login}
                    placeholder="Логін"
                    onChangeText={(value) => handleChangeText("login", value)}
                    onFocus={() => onFocus("login")}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="Адреса електронної пошти"
                    style={[
                      styles.input,
                      isFocused === "email" && styles.focusedInput,
                    ]}
                    value={state.email}
                    onChangeText={(value) => handleChangeText("email", value)}
                    onFocus={() => onFocus("email")}
                  />
                </View>
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      isFocused === "password" && styles.focusedInput,
                    ]}
                    value={state.password}
                    secureTextEntry={showPassword}
                    placeholder="Пароль"
                    onChangeText={(value) =>
                      handleChangeText("password", value)
                    }
                    onFocus={() => onFocus("password")}
                  />
                  <TouchableOpacity>
                    <Text style={styles.showText} onPress={passwordVisibility}>
                      {showPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Зареєстуватися</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.loginText}>
                    Вже є акаунт? <Text>Увійти</Text>
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
    padding: 0,
    margin: 0,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingTop: 160,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  //form
  form: {
    width: "100%",
    minHeight: 549,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
    paddingBottom: 40,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.3,
    paddingTop: 95,
    marginBottom: 33,
  },
  input: {
    height: 50,
    // width: 343,
    width: "80%",
    alignSelf: "center",
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
  loginText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
  },
  //avatar
  avatarContainer: {
    alignItems: "center",
  },
  avatarPlace: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
  },
  addAvatarBtn: {
    position: "absolute",
    top: 21,
    left: 45,
    width: 25,
    height: 25,
  },
});

export default RegistrationScreen;
