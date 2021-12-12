import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Actions from "../pages/Actions";
import Prices from "../pages/Prices";
import Settings from "../pages/Settings";
import TabBar from "../components/TabBar";

const TabBarNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabBarNavigator.Navigator tabBar={(props) => <TabBar {...props} />}>
      <TabBarNavigator.Screen
        name="Home"
        component={Home}
      ></TabBarNavigator.Screen>
      <TabBarNavigator.Screen name="Portfolio" component={Portfolio} />
      <TabBarNavigator.Screen name="Actions" component={Actions} />
      <TabBarNavigator.Screen name="Prices" component={Prices} />
      <TabBarNavigator.Screen name="Settings" component={Settings} />
    </TabBarNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
