import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Feather } from "@expo/vector-icons";

import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";

const MainTab = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <MainTab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 9,
          paddingBottom: 34,
          paddingHorizontal: 81,

          height: 83,
        },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Posts")}
            >
              <AntDesign
                name="appstore-o"
                color="rgba(33, 33, 33, 0.8)"
                size={24}
              />
            </TouchableOpacity>
          ),
          title: "Публикации",
          headerRightContainerStyle: { paddingRight: 20 },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color="rgba(33, 33, 33, 0.8)" />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              style={styles.addBtn}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("CreatePosts")}
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          ),
          title: "Создать публикацию",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Posts")}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Profile")}
            >
              <Feather name="user" color="rgba(33, 33, 33, 0.8)" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
