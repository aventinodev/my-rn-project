import React, { useState } from "react";

import {
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { stylesForm } from "./StylesForm";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const initialFocus = {
  login: false,
  email: false,
  password: false,
};

export const RegistrationScreen = ({
  isShowKeyboard,
  setIsShowKeyboard,
  dimensions,
}) => {
  const [state, setState] = useState(initialState);
  const [isOnFocus, setIsOnFocus] = useState(initialFocus);
  const [isShowPassword, setIsShowPassword] = useState(true);

  const onSignUp = () => {
    console.log("hahaha");
    if (state.login && state.email && state.password) {
      setState(initialState);
      return Alert.alert(
        `Login: ${state.login} \nemail: ${state.email} \npassword: ${state.password}`
      );
    }
    return Alert.alert("You  should enter all the fields!");
  };

  const handleFocus = (key) => {
    setIsShowKeyboard(true);
    setIsOnFocus({ [key]: true });
  };

  // const handleBlur = (key) => {
  //   setIsShowKeyboard(false);
  //   setIsOnFocus({
  //     [key]: false,
  //   });
  // };

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
          paddingBottom: 78,
          marginBottom: isShowKeyboard ? -195 : 0,
          width: dimensions,
        }}
      >
        <View style={stylesForm.wrap}>
          <TouchableOpacity style={stylesForm.btnAdd}>
            <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
          </TouchableOpacity>
        </View>
        <Text style={stylesForm.title}>Sign Up</Text>
        <View style={{ width: "100%" }}>
          <TextInput
            style={{
              ...stylesForm.input,
              borderColor: isOnFocus.login ? "#FF6C00" : "#E8E8E8",
            }}
            placeholder="Login"
            // autoFocus
            value={state.login}
            keyboardType="default"
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, login: value }))
            }
            onFocus={() => handleFocus("login")}
            // onEndEditing={() => handleBlur("login")}
          />
        </View>
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
            // onEndEditing={() => handleBlur("email")}
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
            // onEndEditing={() => handleBlur("password")}
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
          onPress={onSignUp}
        >
          <Text style={{ color: "#fff", lineHeight: 19 }}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={stylesForm.text}>Already have an account? Log in</Text>
      </View>
    </KeyboardAvoidingView>
  );
};
