import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { TouchableWithoutFeedback, Keyboard } from "react-native";

import { Routers } from "./Routers";

export default function App() {
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
    // </TouchableWithoutFeedback>
  );
}
