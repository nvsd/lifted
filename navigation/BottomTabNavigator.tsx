import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabTwoScreen, Dashboard } from "../screens";
import { RootTabParamList } from "../types";
import { BottomTabs } from "../components/BottomTabs";
import { Icon } from "native-base";
import { faChartLine } from "@fortawesome/pro-duotone-svg-icons";
import { Platform } from "react-native";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      tabBar={BottomTabs}
      screenOptions={{
        tabBarStyle: { marginBottom: "10px" },
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={faChartLine}
              color={color}
              name={Platform.OS ? "ios-menu" : "md-menu"}
              size={20}
            />
          ),
        }}
        component={Dashboard}
      />
      <BottomTab.Screen name="TabTwo" component={TabTwoScreen} />
    </BottomTab.Navigator>
  );
};
