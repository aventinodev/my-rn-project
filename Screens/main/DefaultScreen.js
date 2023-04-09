import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Default Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
