import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import { Profile } from "../../Components/Profile";
import { Post } from "../../Components/Post.js";

export const DefaultScreenPosts = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <Profile
        avatar={require("../../assets/images/avatarSmall.jpg")}
        name="Natali Romanova"
        email="nat@gmale.com"
      />

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            image={item.photo}
            text={item.title}
            location={item.inputLocation}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
  },
});
