import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
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

export const LoginScreen = ({
  isShowKeyboard,
  setIsShowKeyboard,
  dimensions,
}) => {
  const [state, setState] = useState(initialState);
  const [isOnFocus, setIsOnFocus] = useState(initialFocus);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [logIn, setLogIn] = useState(false);

  const onLogIn = () => {
    Alert.alert(`email: ${state.email} \npassword: ${state.password}`);
    setLogIn(true);
    setState(initialState);
  };

  const handleFocus = (key) => {
    setIsShowKeyboard(true);
    setIsOnFocus({ [key]: true });
  };

  const handleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };
  return (
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
            <Image source={require("../../assets/images/avatar.jpg")}></Image>
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

        <Text style={stylesForm.text}>Don't have an account? Sign up</Text>
      </View>
    </KeyboardAvoidingView>
  );
};
