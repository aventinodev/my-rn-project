import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./Screens/main/Home";
import { LoginScreen } from "./Screens/auth/LoginScreen";
import { RegistrationScreen } from "./Screens/auth/RegistrationScreen";

const MainStack = createStackNavigator();

export const Routers = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Lgin"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Register" component={RegistrationScreen} />

      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

//     <MainTab.Navigator
//       screenOptions={{
//         initialRouteName: "Posts",
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           paddingTop: 9,
//           paddingBottom: 34,
//           paddingHorizontal: 81,
//           //   alignItems: "center",
//           //   justifyContent: "space-between",
//           height: 83,
//         },
//       }}
//     >
//       <MainTab.Screen
//         options={{
//           tabBarIcon: ({ focused, color, size }) => (
//             <AntDesign
//               name="appstore-o"
//               color="rgba(33, 33, 33, 0.8)"
//               size={24}
//             />
//           ),
//         }}
//         name="Posts"
//         component={PostsScreen}
//       />
//       <MainTab.Screen
//         options={{
//           tabBarIcon: ({ focused, color, size }) => (
//             <TouchableOpacity style={styles.button}>
//               <AntDesign name="plus" size={24} color="white" />
//             </TouchableOpacity>
//           ),
//         }}
//         name="Create post"
//         component={CreatePostsScreen}
//       />
//       <MainTab.Screen
//         options={{
//           tabBarIcon: ({ focused, color, size }) => (
//             <Feather name="user" color="rgba(33, 33, 33, 0.8)" size={24} />
//           ),
//         }}
//         name="Profile"
//         component={ProfileScreen}
//       />
//     </MainTab.Navigator>
//   );
