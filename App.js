import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import UserScreen from "./screens/UserScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="homeName"
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
          activeTintColor: "orange",
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={35} />
            ),
          }}
          name="home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={30} />
            ),
          }}
          name="search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={30} />
            ),
          }}
          name="user"
          component={UserScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
