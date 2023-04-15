import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { DefaultScreenPosts } from "../nested/DefaultPostsScreen";
import { CommentsScreen } from "../nested/CommentsScreen";
import { MapScreen } from "../nested/MapScreen";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation, route }) => {
  return (
    <NestedScreen.Navigator
      initialRouteName="DefaultScreen"
      screenOptions={{ headerShown: false }}
    >
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};
