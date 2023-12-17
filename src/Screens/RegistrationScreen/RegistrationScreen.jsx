import { useState, useEffect } from "react";

import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
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
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    const listener = Dimensions.addEventListener("change", onChange);
    return () => {
      listener.remove();
    };
  }, []);

  const handleSubmit = () => {
    Keyboard.dismiss();
    setState({
      email: "",
      password: "",
    });
  };

  const handleLoginFocus = () => {
    setIsLoginFocused(true);
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleLoginChangeFocus = () => {
    setIsLoginFocused(false);
  };
  const handleEmailChangeFocus = () => {
    setIsEmailFocused(false);
  };
  const handlePasswordChangeFocus = () => {
    setIsPasswordFocused(false);
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPressIn={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={bgImg} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "android" ? "padding" : "height"}
          >
            <View style={{ ...styles.form, width: dimensions }}>
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
                  style={[styles.input, isLoginFocused && styles.focusedInput]}
                  value={state.login}
                  placeholder="Логін"
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  onFocus={handleLoginFocus}
                  onBlur={handleLoginChangeFocus}
                />
              </View>
              <View>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  style={[styles.input, isEmailFocused && styles.focusedInput]}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailChangeFocus}
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
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordChangeFocus}
                />
                <TouchableOpacity>
                  <Text style={styles.showText}>Показати</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Зареєстуватися</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.loginText}>
                  Вже є акаунт? <Text>Увійти</Text>
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
    alignItems: "center",
    justifyContent: "flex-end",
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
    height: 549,
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
    paddingTop: 95,
    marginBottom: 33,
  },
  input: {
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
