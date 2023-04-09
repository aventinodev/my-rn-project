import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

import { Profile, Post } from "../../Components/Profile";

import { profilesAll, postsAll } from "../../assets/data";

export const PostsScreen = () => {
  const [profiles, setProfiles] = useState(profilesAll);
  const [posts, setPosts] = useState(postsAll);
  const { avatar, name, email } = profiles;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Profile avatar={item.avatar} name={item.name} email={item.email} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
    paddingLeft: 16,
  },
});
