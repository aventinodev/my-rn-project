import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { MaterialIcons, Feather } from "@expo/vector-icons";

// <Feather name="trash-2" size={24} color="black" />

const initialState = {
  name: "",
  location: "",
};

export const CreatePostsScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const createPosts = () => {
    if (!state.name || !state.location) {
      alert("Enter all data pleace!!!");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
        <View style={styles.download}>
          <View style={styles.downloadImage}>
            <View style={styles.boxImage}>
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </View>
          </View>
          <Text style={styles.text}>Загрузите фото</Text>
        </View>
        <TextInput
          placeholder="Название..."
          value={state.name}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, name: value }))
          }
          style={styles.input}
          onFocus={() => setIsShowKeyboard(true)}
        />

        <View style={styles.inputBox}>
          <Feather
            name="map-pin"
            size={24}
            color="#BDBDBD"
            style={styles.imageLocation}
          />
          <TextInput
            placeholder="Местность..."
            value={state.location}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, location: value }))
            }
            onFocus={() => setIsShowKeyboard(true)}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={createPosts}
        >
          <Text style={styles.buttonText}>Опубликовать</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
  },

  download: {
    height: 267,
    marginBottom: 32,
  },

  downloadImage: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  boxImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },

  text: {
    fontSize: 16,
    color: "#BDBDBD",
  },

  input: {
    paddingBottom: 15,
    marginBottom: 16,
    color: "#BDBDBD",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },

  inputBox: {
    position: "relative",
    paddingBottom: 15,
    marginBottom: 32,
    paddingLeft: 28,
    width: "100%",
    color: "#BDBDBD",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },

  imageLocation: {
    position: "absolute",
  },

  button: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  buttonText: {
    color: "#FFFFFF",
  },
});
