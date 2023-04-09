import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { Fontisto, SimpleLineIcons, Feather } from "@expo/vector-icons";

export const Post = ({ image, text, comments, likes, location }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <Text style={styles.title}>{text}</Text>
      <View style={styles.boxInfo}>
        <View style={{ ...styles.boxLikes, alignItems: "center" }}>
          <TouchableOpacity style={{ ...styles.button, marginRight: 27 }}>
            <View style={styles.iconWrap}>
              <Fontisto name="comment" size={18} color="#FF6C00" />
            </View>

            <Text style={styles.text}>{comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.iconWrap}>
              <SimpleLineIcons name="like" size={18} color="#FF6C00" />
            </View>

            <Text style={styles.text}>{likes}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <View style={styles.iconWrap}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
          </View>

          <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
            {location}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    paddingBottom: 32,
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },

  title: {
    color: "#212121",
    marginBottom: 11,
    // fontWeight: 500,
    fontSize: 16,
  },

  boxInfo: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },

  boxLikes: {
    flexDirection: "row",
    flex: 1,
    gap: 24,
    alignItems: "center",
  },

  button: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 9,
  },

  text: {
    fontSize: 16,
    marginRight: 9,
  },

  iconWrap: { width: 24, height: 24, marginRight: 6 },
});
