import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator, RegisterStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Contact" component={RegisterStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
