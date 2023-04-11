import React, { useState, useEffect, useRef } from "react";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import {
  StyleSheet,
  Alert,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { MaterialIcons, Feather } from "@expo/vector-icons";

// <Feather name="trash-2" size={24} color="black" />

export const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const locationName = Location.reverseGeocodeAsync();
    console.log(photo.uri);
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setPhoto(photo.uri);
    setInputLocation(locationName);
  };

  const createPosts = () => {
    // if (!state.name || !state.location)
    //   Alert.alert("Please, enter all data");
    //   return;
    // }
    navigation.navigate("DefaultScreen", { photo }, { title });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
        <View style={styles.cameraBox}>
          <Camera
            style={styles.camera}
            ref={(ref) => {
              setCamera(ref);
            }}
          >
            {photo && (
              <View style={styles.imageBox}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: "100%", width: "100%" }}
                />
              </View>
            )}

            <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>

          <Text
            style={{
              fontSize: 16,
              color: "#BDBDBD",
            }}
          >
            Редагувати фото
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Назва..."
          value={title}
          onChangeText={(value) =>
            setTitle((prevState) => ({ ...prevState, title: value }))
          }
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
            placeholder="Місцевість..."
            value={inputLocation}
            onChangeText={(value) =>
              setLocation((prevState) => ({
                ...prevState,
                inputLocation: value,
              }))
            }
            onFocus={() => setIsShowKeyboard(true)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={createPosts}
          >
            <Text style={styles.buttonText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
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

  cameraBox: {
    height: 267,
    marginBottom: 32,
  },

  camera: {
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

  cameraBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
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

  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  buttonText: {
    color: "#FFFFFF",
  },
  button: {
    width: 300,
    //   width: "100%",
    borderColor: "#FF6C00",
    borderRadius: 25.5,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 27,
    marginBottom: 16,
  },
  text: {
    lineHeight: 19,
    textAlign: "center",
    // fontFamily: "Roboto-Medium",
  },
});
