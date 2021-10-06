import React from "react";
import {
  StatusBar,
  useColorModeValue,
  useToken,
  useColorMode,
} from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NotFoundScreen, ModalScreen } from "../screens";
import { RootStackParamList } from "../types";
import { BottomTabNavigator } from "./BottomTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const themeColor = useColorModeValue("gray.100", "gray.900");
  const backgroundColor: string = useToken("colors", themeColor);
  const { colorMode } = useColorMode();

  return (
    <>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={colorMode === "dark" ? "light-content" : "dark-content"}
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};
