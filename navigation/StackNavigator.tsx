import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import List from "../screens/List";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
};

const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, RegisterStackNavigator };
