import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Comments Screen</Text>
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

export default CommentsScreen;
