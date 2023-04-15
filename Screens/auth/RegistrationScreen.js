import React, { useState, useEffect } from "react";

import {
  TouchableWithoutFeedback,
  Keyboard,
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
import { useSelector, useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { registerUser } from "../../redux/auth/authOperations";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

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

export const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(initialFocus);
  const [isShowPassword, setIsShowPassword] = useState(true);

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
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const onSignUp = async () => {
    if (!state.login || !state.email || !state.password) {
      return Alert.alert("You  should enter all the fields!");
    }

    setState(initialState);
    navigation.navigate("Home");

    await dispatch(registerUser(state)).then((response) => {
      response.meta.requestStatus === "fulfilled" &&
        navigation.navigate("Home", { screen: "Posts" });
      response.meta.requestStatus !== "fulfilled" &&
        alert("Your data is wrong");
      console.log(response.meta.requestStatus);
    });
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
              <Text style={stylesForm.title}>Зареєструватися</Text>
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
                    {isShowPassword ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={stylesForm.button}
                onPress={onSignUp}
              >
                <Text style={{ color: "#fff", lineHeight: 19 }}>
                  Зареєструватися
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={stylesForm.text}>Маєте акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
