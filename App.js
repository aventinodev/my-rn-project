import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
// import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Routers } from "./Routers";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
      {/* </TouchableWithoutFeedback> */}
    </Provider>
  );
}
