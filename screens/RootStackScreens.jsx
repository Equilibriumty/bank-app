import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./Welcome";
import Auth from "./Auth";

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="Auth"
      component={Auth}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
