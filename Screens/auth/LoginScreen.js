import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";

import { stylesForm } from "./StylesForm";

const initialState = {
  email: "",
  password: "",
};
const initialFocus = {
  email: false,
  password: false,
};

export const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isOnFocus, setIsOnFocus] = useState(initialFocus);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [logIn, setLogIn] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onLogIn = () => {
    if (!state.email || !state.password) {
      return Alert.alert("You should fill all the fields!");
    }
    // Alert.alert(`email: ${state.email} \npassword: ${state.password}`);
    setLogIn(true);
    setState(initialState);
    navigation.navigate("Home");
  };

  const handleFocus = (key) => {
    setIsShowKeyboard(true);
    setIsOnFocus({ [key]: true });
  };

  const handleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <ImageBackground
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            resizeMode: "cover",
          }}
          source={require("../../assets/images/photoBG.jpg")}
        >
          <KeyboardAvoidingView
            style={stylesForm.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...stylesForm.form,
                paddingBottom: 144,
                marginBottom: isShowKeyboard ? -263 : 0,
                width: dimensions,
              }}
            >
              <View style={{ ...stylesForm.wrap, overflow: "hidden" }}>
                {logIn && (
                  <Image
                    source={require("../../assets/images/avatar.jpg")}
                  ></Image>
                )}
              </View>
              <Text style={stylesForm.title}>Log In</Text>

              <View style={{ width: "100%" }}>
                <TextInput
                  style={{
                    ...stylesForm.input,
                    borderColor: isOnFocus.email ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Email"
                  value={state.email}
                  keyboardType="email-address"
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={() => handleFocus("email")}
                />
              </View>

              <View style={{ width: "100%", position: "relative" }}>
                <TextInput
                  style={{
                    ...stylesForm.input,
                    borderColor: isOnFocus.password ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Password"
                  value={state.password}
                  secureTextEntry={isShowPassword}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  onFocus={() => handleFocus("password")}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: 26,
                    right: 10,
                  }}
                  onPress={() => handleShowPassword()}
                >
                  <Text style={stylesForm.text}>
                    {isShowPassword ? "Show" : "Hide"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={stylesForm.button}
                onPress={onLogIn}
              >
                <Text style={{ color: "#fff", lineHeight: 19 }}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={stylesForm.text}>
                  Don't have an account? Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
