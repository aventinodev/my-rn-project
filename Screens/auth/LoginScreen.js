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

import { useSelector, useDispatch } from "react-redux";
import { loginUser, carrentuser } from "../../redux/auth/authOperations";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

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
  // const [logIn, setLogIn] = useState(false);
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
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const onLogIn = async () => {
    if (!state.email || !state.password) {
      return Alert.alert("You should fill all the fields!");
    }

    setState(initialState);
    navigation.navigate("Home");

    await dispatch(loginUser(state)).then((response) => {
      response.meta.requestStatus === "fulfilled" &&
        navigation.navigate("Home", { screen: "Posts" });
      response.meta.requestStatus !== "fulfilled" &&
        alert("Your data is wrong");
    });
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
                {isLoggedIn && (
                  <Image
                    source={require("../../assets/images/avatar.jpg")}
                  ></Image>
                )}
              </View>

              <Text style={stylesForm.title}>Увійти</Text>
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
                    {isShowPassword ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={stylesForm.button}
                onPress={onLogIn}
              >
                <Text style={{ color: "#fff", lineHeight: 19 }}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={stylesForm.text}>
                  Не маєте акаунта? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
